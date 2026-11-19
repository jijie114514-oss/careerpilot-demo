import { scenarios } from './scripts.js';

const $ = (id) => document.getElementById(id);
const languageButtons = [...document.querySelectorAll('[data-language]')];
const taskButtons = [...document.querySelectorAll('[data-task]')];
const newSession = () => ({ sent: [], draft: null });
const sessions = Object.fromEntries(taskButtons.map(({ dataset }) => [dataset.task, newSession()]));
const transcript = $('conversation');
const composer = $('composer');
const draft = $('draft');
const send = $('send');
const targetPanel = $('target-panel');
const confirmTarget = $('confirm-target');
const backTarget = $('back-target');

let language = 'en';
let task = 'match';
let targetStep = 0;

const isTargetConfirmed = () => targetStep === scenarios[language].target.steps.length;
const taskIsLocked = (id) => id !== 'match' && !isTargetConfirmed();

function roleCard({ title, description, selected }, preset) {
  const option = document.createElement('li');
  option.className = selected ? 'role-option is-selected' : 'role-option';
  const heading = document.createElement('strong');
  heading.textContent = title;
  option.append(heading);
  if (selected) {
    const badge = document.createElement('span');
    badge.className = 'role-preset';
    badge.textContent = preset;
    option.append(badge);
  }
  if (description) {
    const detail = document.createElement('p');
    detail.textContent = description;
    option.append(detail);
  }
  return option;
}

function renderTarget({ label, name, preset, progressLabel, back, confirmed, steps }) {
  const complete = isTargetConfirmed();
  const step = steps[targetStep];
  const review = complete || targetStep === steps.length - 1;
  targetPanel.hidden = task !== 'match';
  $('workspace').hidden = !complete;
  $('task-target').textContent = `${label} · ${name}`;
  $('task-target').hidden = !complete;
  if (targetPanel.hidden) return;

  $('target-label').textContent = label;
  const progress = $('role-progress');
  progress.hidden = complete;
  progress.setAttribute('aria-label', progressLabel);
  progress.replaceChildren(...steps.map(({ label }, index) => {
    const item = document.createElement('li');
    item.textContent = label;
    if (index < targetStep) item.className = 'step-complete';
    if (index === targetStep) item.setAttribute('aria-current', 'step');
    return item;
  }));

  $('target-step-title').textContent = step?.label ?? '';
  $('target-step-title').hidden = complete;
  $('target-instructions').textContent = step?.instructions ?? '';
  $('target-instructions').hidden = complete;
  $('career-area').hidden = !step?.input;
  if (step?.input) {
    $('career-input-label').textContent = step.input.label;
    $('career-input').value = step.input.value;
  }

  const choices = $('role-choices');
  choices.hidden = !step?.options;
  choices.replaceChildren(...(step?.options ?? []).map(option => roleCard(option, preset)));
  $('role-review').hidden = !review;
  if (review) {
    $('final-role').textContent = name;
    $('confirmed-details').replaceChildren(...steps.slice(0, -1).map(({ label, input, options }) => {
      const pair = document.createElement('div');
      const term = document.createElement('dt');
      const value = document.createElement('dd');
      term.textContent = label;
      value.textContent = input?.value ?? options.find(option => option.selected).title;
      pair.append(term, value);
      return pair;
    }));
  }

  $('target-status').textContent = confirmed;
  $('target-status').hidden = !complete;
  $('role-actions').hidden = complete;
  backTarget.textContent = back;
  backTarget.hidden = targetStep === 0;
  confirmTarget.textContent = step?.confirm ?? '';
}

function addMessage(speaker, body, isUser, lang) {
  const message = document.createElement('div');
  const label = document.createElement('b');
  const text = document.createElement('p');
  message.className = isUser ? 'message user' : 'message';
  label.textContent = speaker;
  text.textContent = body;
  text.lang = lang;
  message.append(label, text);
  transcript.append(message);
}

function render() {
  const ui = scenarios[language];
  const scenario = ui.tasks[task];
  const session = sessions[task];
  const nextTurn = scenario.turns[session.sent.length];
  const assistant = task === 'interview' ? ui.interviewer : ui.assistant;

  document.documentElement.lang = ui.lang;
  document.title = ui.pageTitle;
  $('title').textContent = ui.title;
  $('intro').textContent = ui.intro;
  $('languages').setAttribute('aria-label', ui.language);
  $('tasks').setAttribute('aria-label', ui.tasksLabel);
  transcript.setAttribute('aria-label', ui.conversation);
  $('task-title').textContent = scenario.label;
  $('task-detail').textContent = scenario.detail;
  $('draft-label').textContent = ui.draftLabel;
  $('draft-hint').textContent = ui.hint;
  $('complete').textContent = ui.complete;
  $('restart').textContent = ui.restart;
  $('restart').hidden = session.sent.length === 0 && session.draft === null;
  send.textContent = ui.send;

  for (const button of languageButtons) {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  }
  for (const button of taskButtons) {
    const id = button.dataset.task;
    button.textContent = ui.tasks[id].label;
    button.disabled = taskIsLocked(id);
    button.setAttribute('aria-pressed', String(id === task));
  }
  renderTarget(ui.target);

  transcript.replaceChildren();
  addMessage(assistant, scenario.opening, false, ui.lang);
  session.sent.forEach((sent, index) => {
    const [example, reply] = scenario.turns[index];
    addMessage(ui.user, sent?.text ?? example, true, sent?.lang ?? ui.lang);
    addMessage(assistant, reply, false, ui.lang);
  });
  transcript.scrollTop = transcript.scrollHeight;

  composer.hidden = !nextTurn;
  $('complete').hidden = Boolean(nextTurn);
  if (nextTurn) {
    $('turn').textContent = ui.turn(session.sent.length + 1, scenario.turns.length);
    draft.value = session.draft ?? nextTurn[0];
    send.disabled = !draft.value.trim();
  }
}

for (const button of languageButtons) {
  button.addEventListener('click', () => {
    if (language === button.dataset.language) return;
    language = button.dataset.language;
    render();
  });
}

for (const button of taskButtons) {
  button.addEventListener('click', () => {
    const id = button.dataset.task;
    if (task === id || taskIsLocked(id)) return;
    task = id;
    render();
  });
}

confirmTarget.addEventListener('click', () => {
  if (isTargetConfirmed()) return;
  targetStep++;
  render();
  $(isTargetConfirmed() ? 'target-status' : 'target-step-title').focus({ preventScroll: true });
});

backTarget.addEventListener('click', () => {
  if (targetStep === 0 || isTargetConfirmed()) return;
  targetStep--;
  render();
  $('target-step-title').focus({ preventScroll: true });
});

draft.addEventListener('input', () => {
  const session = sessions[task];
  const example = scenarios[language].tasks[task].turns[session.sent.length][0];
  session.draft = draft.value === example ? null : draft.value;
  send.disabled = !draft.value.trim();
  $('restart').hidden = session.sent.length === 0 && session.draft === null;
});

composer.addEventListener('submit', (event) => {
  event.preventDefault();
  const ui = scenarios[language];
  const session = sessions[task];
  const nextTurn = ui.tasks[task].turns[session.sent.length];
  const text = draft.value.trim();
  if (!isTargetConfirmed() || !nextTurn || !text) return;
  session.sent.push(text === nextTurn[0] ? null : { text, lang: ui.lang });
  session.draft = null;
  render();
  if (!composer.hidden) draft.focus({ preventScroll: true });
  else $('restart').focus({ preventScroll: true });
});

$('restart').addEventListener('click', () => {
  sessions[task] = newSession();
  render();
  draft.focus({ preventScroll: true });
});

render();
