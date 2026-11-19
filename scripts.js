export const scenarios = {
  en: {
    lang: 'en',
    pageTitle: 'CareerPilot · Classroom Demo',
    title: 'Career coaching workspace',
    intro: 'Set a target role, then try the coaching tasks with a fictional course survey project.',
    language: 'Language',
    tasksLabel: 'Coaching tasks',
    conversation: 'Conversation',
    assistant: 'CareerPilot',
    interviewer: 'Interviewer',
    user: 'You',
    draftLabel: 'Your reply',
    turn: (current, total) => `Reply ${current} of ${total}`,
    hint: 'Edit the draft or send it as written. CareerPilot’s replies follow a script.',
    send: 'Send',
    restart: 'Restart',
    complete: 'Demo complete. Select Restart to run this conversation again.',
    target: {
      label: 'Target role',
      name: 'Digital Marketing Intern',
      preset: 'Preset choice',
      progressLabel: 'Target role setup',
      back: 'Back',
      confirmed: 'Role confirmed. You can now open Résumé Coaching and Mock Interview.',
      steps: [
        {
          label: 'Career area',
          instructions: 'Start with a broad career area. The field is prefilled for this demo.',
          input: { label: 'Your starting area', value: 'Marketing' },
          confirm: 'Confirm career area',
        },
        {
          label: 'Job direction',
          instructions: 'CareerPilot suggests these roles for Marketing. Confirm the highlighted direction.',
          options: [
            { title: 'Brand Marketing Specialist', description: 'Brand positioning and communications' },
            { title: 'Digital Marketing Specialist', description: 'Ad campaigns and performance analysis', selected: true },
            { title: 'Market Researcher', description: 'Industry, market, and consumer research' },
          ],
          confirm: 'Confirm job direction',
        },
        {
          label: 'Experience',
          instructions: 'Add the experience you can bring to this role. The sample uses a course survey project.',
          options: [
            { title: 'Just Getting Started', description: 'No related project experience yet' },
            { title: 'Course or Personal Projects', description: 'Coursework, practice, or independent projects', selected: true },
            { title: 'Team Projects or Internships', description: 'Team collaboration or work experience' },
          ],
          confirm: 'Confirm experience',
        },
        {
          label: 'Opportunity',
          instructions: 'Confirm the type of opportunity this student is looking for.',
          options: [
            { title: 'Internship', selected: true },
            { title: 'Graduate Full-Time Role' },
            { title: 'Experienced Hire or Career Change' },
          ],
          confirm: 'Confirm opportunity',
        },
        {
          label: 'Review',
          instructions: 'Review the target role and confirm it to start the demo.',
          confirm: 'Confirm target role',
        },
      ],
    },
    tasks: {
      match: {
        label: 'Job Match',
        detail: 'Compare the role requirements with your project evidence',
        opening: 'For the digital marketing internship, share the job requirements and a relevant project. I’ll help you identify what your experience supports and where you need more evidence.',
        turns: [
          [
            'The digital marketing internship asks me to collect audience feedback, identify common themes, and suggest a change to an event campaign. In a course survey project about campus events, I wrote an open-ended question and grouped the responses by theme.',
            'Writing the survey question supports the feedback requirement, and grouping the answers supports the analysis requirement. What themes did you find, and how did you share them with your team?'
          ],
          [
            'I found two recurring themes: schedule conflicts and unclear event information. I summarized both themes and gave the notes to the group for our class presentation.',
            'That gives you a concrete contribution to point to: you turned written responses into two findings that your group could present. What action did you suggest based on one of those findings?'
          ],
          [
            'I suggested publishing the event date and a short description earlier so students could plan ahead. We included the suggestion in the presentation. The project ended there, so we didn’t measure its effect.',
            'You have evidence for all three duties: collecting feedback, identifying themes, and proposing a next step. Describe the proposal and its place in the presentation. In an interview, be ready to explain how you would test it, such as comparing sign-ups for events announced at different times.'
          ]
        ]
      },
      story: {
        label: 'Résumé Coaching',
        detail: 'Course survey project · Turn a team description into a résumé bullet',
        opening: 'Let’s tailor a résumé bullet to the digital marketing internship. Share your original wording, and I’ll ask about how you handled audience feedback and used it to recommend a change.',
        turns: [
          [
            'My current résumé says: “Our team designed a survey about campus events and presented the results.” Could you help me describe my part?',
            '“Our team” tells me what the group did. Which question did you write, and what did you personally do with the responses?'
          ],
          [
            'I wrote an open-ended question asking what made it hard to attend campus events. I reviewed the answers and tagged recurring themes, including schedule conflicts and unclear event information.',
            'That gives us two useful actions: writing the question and coding the responses. How did your group use the findings?'
          ],
          [
            'The group used my summary of those two themes in the class presentation. I also proposed publishing the event date and a short description earlier. We didn’t track attendance afterward.',
            'Suggested résumé bullet\nDesigned an open-ended survey question about barriers to campus event attendance, coded responses into recurring themes, and proposed publishing event details earlier. The team used the findings in its class presentation.\n\nFor an interview, prepare one anonymized response and explain how you assigned it to a theme.'
          ]
        ]
      },
      interview: {
        label: 'Mock Interview',
        detail: 'Project deep dive',
        opening: 'Thanks for joining the interview for our digital marketing internship. Tell me about a project where you used audience feedback. What were you personally responsible for?',
        turns: [
          [
            'In a course project about campus events, I wrote the survey question about barriers to attendance and grouped the written answers by theme. I shared the findings with my team for our class presentation.',
            'Why did you choose an open-ended question for that part of the survey?'
          ],
          [
            'I asked, “What made it difficult for you to attend a campus event?” I left it open because I wanted students to name issues we hadn’t thought of before offering a list of options.',
            'How did you handle answers that fitted more than one theme? Could you give an example?'
          ],
          [
            'If someone said the announcement came late and the event clashed with a class, I used two tags: unclear event information and schedule conflict. I kept the original wording beside the tags so the team could check how I coded it.',
            'What recommendation did you make from the findings, and how would you test it?'
          ],
          [
            'I recommended publishing the date and a short event description earlier. The project ended with the class presentation. In a follow-up, I’d compare sign-ups for similar events with different announcement lead times.',
            'Thank you. Let’s pause there. Ask for a debrief when you’re ready.'
          ],
          [
            'I’d like to end the interview. Could you give me feedback and one thing to practice?',
            'What worked\nYou named your own responsibilities, explained why you used an open-ended question, and gave a concrete example of coding one response. You also described a test for your recommendation.\n\nWhat to practice\nExplain what makes two events comparable, such as audience and capacity. Rehearse that explanation in one sentence so you can give it quickly in an interview.'
          ]
        ]
      }
    }
  },
  zh: {
    lang: 'zh-CN',
    pageTitle: 'CareerPilot · 课堂演示',
    title: '求职工作台',
    intro: '先确定目标岗位，再用一个虚构的课程问卷项目体验求职辅导。',
    language: '界面语言',
    tasksLabel: '辅导任务',
    conversation: '对话',
    assistant: 'CareerPilot',
    interviewer: '面试官',
    user: '你',
    draftLabel: '你的回复',
    turn: (current, total) => `第 ${current} / ${total} 轮`,
    hint: '可以直接发送预填文字，也可以先修改。CareerPilot 使用预设回复。',
    send: '发送',
    restart: '重新演示',
    complete: '本段演示已完成。点击「重新演示」可以从头开始。',
    target: {
      label: '目标岗位',
      name: '数字营销实习生',
      preset: '预设选项',
      progressLabel: '目标岗位设置进度',
      back: '上一步',
      confirmed: '已确认岗位，现在可以进入经历表达和模拟面试。',
      steps: [
        {
          label: '求职方向',
          instructions: '先从一个宽泛的方向开始。演示文字已填好。',
          input: { label: '你感兴趣的方向', value: '市场' },
          confirm: '确认求职方向',
        },
        {
          label: '具体岗位',
          instructions: 'CareerPilot 根据「市场」给出这三个岗位。确认高亮的演示选项。',
          options: [
            { title: '品牌营销专员', description: '品牌定位与传播' },
            { title: '数字营销专员', description: '广告投放与效果分析', selected: true },
            { title: '市场研究员', description: '行业、市场与消费者研究' },
          ],
          confirm: '确认具体岗位',
        },
        {
          label: '相关经历',
          instructions: '补充与岗位相关的经历。本次演示使用课程问卷项目。',
          options: [
            { title: '刚开始学习', description: '暂时没有相关项目' },
            { title: '课程 / 个人项目', description: '做过练习、课程作业或个人作品', selected: true },
            { title: '团队项目 / 实习经历', description: '有团队协作或实际工作经历' },
          ],
          confirm: '确认相关经历',
        },
        {
          label: '求职阶段',
          instructions: '确认这位学生主要寻找哪种机会。',
          options: [
            { title: '实习', selected: true },
            { title: '应届全职' },
            { title: '有经验 / 转行' },
          ],
          confirm: '确认求职阶段',
        },
        {
          label: '核对结果',
          instructions: '核对最终岗位和已确认的选项，然后开始演示。',
          confirm: '确认目标岗位',
        },
      ],
    },
    tasks: {
      match: {
        label: '岗位匹配',
        detail: '对照岗位要求与项目经历',
        opening: '请贴出数字营销实习的岗位要求，并介绍一个相关项目。我会帮你找出哪些要求已有经历支持、哪些还需要补充证据。',
        turns: [
          [
            '数字营销实习要求收集受众反馈、归纳常见主题，并提出改进活动推广的建议。我做过一个关于校园活动的课程问卷项目，负责写一道开放题，再把回收的答案按主题分类。',
            '设计问卷题目对应反馈收集，对答案分类对应反馈分析。你发现了哪些主题？后来怎么把发现交给组员？'
          ],
          [
            '我发现两类反复出现的问题：活动时间冲突、活动信息不清楚。我把这两类反馈整理成摘要，交给小组做课堂汇报。',
            '这是一项具体的个人贡献：你把开放题反馈变成了两条可以汇报的发现。你有没有根据其中一条发现提出具体建议？'
          ],
          [
            '我建议提前公布活动日期和简短介绍，让同学能早点安排行程。小组把这个建议写进了课堂汇报。项目到汇报为止，我们没有测量它的效果。',
            '收集反馈、归纳主题和提出行动建议，这三项要求都有经历支持。可以写清建议内容和它如何进入汇报。面试时还能补一句你会怎样验证它，比如比较同类活动在不同提前通知时间下的报名情况。'
          ]
        ]
      },
      story: {
        label: '经历表达',
        detail: '课程问卷项目 · 把团队经历写成一条个人简历要点',
        opening: '我们把这段经历改成适合数字营销实习的简历要点。先发来原文，我会问你怎样整理受众反馈、怎样根据发现提出改进建议。',
        turns: [
          [
            '我现在写的是「我们设计了关于校园活动的问卷，并汇报了调研结果」。能不能帮我写清楚自己做了什么？',
            '这句话交代了小组完成的任务。你具体写了哪道题？收回答案后，你自己做了哪些处理？'
          ],
          [
            '我写了一道问参加校园活动有哪些困难的开放题。回收后，我逐条查看并给反复出现的问题加标签，比如活动时间冲突、活动信息不清楚。',
            '可以写出两项个人行动：设计开放题、对反馈分类。你整理的发现后来怎么被小组使用？'
          ],
          [
            '小组用了我总结的两个主题做课堂汇报。我也建议提前公布活动日期和简短介绍。汇报后我们没有继续跟踪到场情况。',
            '建议写法\n设计校园活动参与障碍问卷的开放题，归类并总结高频反馈，提出提前发布活动信息的建议；小组在课堂汇报中采用了这两类发现。\n\n准备面试时，可以挑一条去掉个人信息的反馈，讲清你为什么把它归到那个主题。'
          ]
        ]
      },
      interview: {
        label: '模拟面试',
        detail: '项目深挖',
        opening: '你好，欢迎参加数字营销实习面试。请介绍一次你用到受众反馈的项目，以及你个人负责的部分。',
        turns: [
          [
            '我们做过一个校园活动问卷项目。我负责设计一道有关参与障碍的开放题，再把文字回答按主题分类，把整理好的发现交给组员做课堂汇报。',
            '你为什么选择用开放题来问这个问题？'
          ],
          [
            '我问的是「什么情况会让你难以参加校园活动？」我想先让同学说出我们没考虑过的问题，所以这道题先让他们自由作答。',
            '如果一条回答同时属于两个主题，你是怎么处理的？能举个例子吗？'
          ],
          [
            '比如有人说活动通知发得太晚，而且活动正好和一节课冲突，我就同时加上「活动信息不清楚」和「时间冲突」两个标签。我也把原文留在标签旁边，方便组员复核。',
            '你根据这些反馈提出了什么建议？如果继续做下去，你会怎么验证建议是否有效？'
          ],
          [
            '我建议提前公布活动日期和简短介绍。项目做到课堂汇报就结束了。如果能继续，我会选相似的活动，比较不同提前通知时间下的报名情况。',
            '谢谢，项目深挖就到这里。准备好后可以结束面试并查看复盘。'
          ],
          [
            '结束面试。请点评我的回答，再给我一个可以练习的地方。',
            '做得清楚的地方\n你说清了个人分工和开放题的设计理由，也用一条反馈说明了怎么分类，并提出了可验证的改进建议。\n\n下一次可以练习\n用一句话解释你会怎样挑选可比较的活动，例如关注参与人群和活动名额。这样就更容易说明你的验证方法。'
          ]
        ]
      }
    }
  }
};
