import type { Law } from './law-types';

/**
 * 2026-11 增补的四条。放在单独文件里，避免每次新增都动 5000 行的 laws.ts。
 * order 接在现有 66 条之后；首页按分类分组，卡片显示分类内序号。
 */
export const extraLaws: Law[] = [
  {
    slug: 'media-richness',
    order: 67,
    category: 'clarity',
    title: '挑对说话的方式',
    englishTitle: 'Media Richness',
    summary: '事情越说不清，越别只靠打字。',
    layout: 'comparison',
    hero: {
      titleHtml: '挑对说话的方式',
      subtitleHtml: 'Media Richness',
      leadHtml: '同一件事，打字、打电话、开视频，<br>\n                    对方能接收到的东西不一样多。',
    },
    bad: {
      titleHtml: '❌ 用最省事的方式',
      lines: [
        { character: 'cider', name: '西打', time: '10:02', text: '客户那边好像有点问题，你看着办吧。', html: '客户那边好像有点问题，你看着办吧。' },
        { character: 'domino', name: '多米诺', time: '10:05', text: '什么问题？严重吗？', html: '什么问题？严重吗？' },
        { character: 'cider', name: '西打', time: '10:06', text: '我也说不好，反正他们不太高兴。', html: '我也说不好，反正他们不太高兴。' },
        { character: 'domino', name: '多米诺', time: '10:08', text: '……我们打个电话吧。', html: '……我们打个电话吧。' },
      ],
      explanationHtml: '<div>\n<p><strong>事情本来就说不清，又只发一行字，对方只能一遍遍猜。</strong>文字适合说清楚的事实，到底有多严重，靠文字很难传过去。</p>\n<p>你少打了几个字，对方得花更多工夫去琢磨。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 按任务的模糊度选',
      lines: [
        { character: 'cider', name: '西打', time: '10:02', text: '方便电话吗？客户对交付时间有异议，大概五分钟。', html: '方便电话吗？客户对交付时间有异议，大概五分钟。' },
        { character: 'domino', name: '多米诺', time: '10:03', text: '打。', html: '打。' },
        { name: '语音通话', time: '10:04', text: '通话 6 分钟，改成周五交付，客户确认。', html: '通话 6 分钟，改成周五交付，客户确认。', tone: 'meta' },
      ],
      explanationHtml: '<div>\n<p>事情越说不清，越该挑能马上来回问、能听到语气的方式，比如打电话。事实清楚、需要留个记录的事，打字就挺好。</p>\n<p>上面那件事要先弄清客户到底哪里不满，五分钟电话比来回打十条字快。</p>\n</div>',
    },
    footerHtml: '<p>这事不大，别跟发链接给你的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明对方希望你先想想，这件事是不是只发文字就说得清。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'curse-of-knowledge',
    order: 68,
    category: 'clarity',
    title: '知识的诅咒',
    englishTitle: 'Curse of Knowledge',
    summary: '你自己知道了，就很难想象别人不知道。',
    layout: 'comparison',
    hero: {
      titleHtml: '知识的诅咒',
      subtitleHtml: 'Curse of Knowledge',
      leadHtml: '你讲得越顺，<br>\n                    对方可能越跟不上。',
    },
    bad: {
      titleHtml: '❌ 跳过自己早就不用想的步骤',
      lines: [
        { character: 'domino', name: '多米诺', time: '15:00', text: '你先把这个 branch rebase 一下，然后走一遍 CI，过了就 merge，记得把 feature flag 打开。', html: '你先把这个 branch rebase 一下，然后走一遍 CI，过了就 merge，记得把 feature flag 打开。' },
        { character: 'cider', name: '西打', time: '15:01', text: '……rebase 是干嘛的？', html: '……rebase 是干嘛的？' },
        { character: 'domino', name: '多米诺', time: '15:01', text: '就是把你的改动挪到最新的主干上。', html: '就是把你的改动挪到最新的主干上。' },
        { character: 'cider', name: '西打', time: '15:02', text: '那 CI 是什么？', html: '那 CI 是什么？' },
        { character: 'domino', name: '多米诺', time: '15:03', text: '……我直接给你演示一遍吧。', html: '……我直接给你演示一遍吧。' },
      ],
      explanationHtml: '<div>\n<p>西打一点也不笨，是多米诺把自己早就不用想的几步跳过去了。</p>\n<p>1989 年，Camerer、Loewenstein 和 Weber 管这个叫「知识的诅咒」。1990 年 Newton 做过一个敲歌实验，让人用手指敲出一首歌的节奏给别人猜。敲的人以为一半人能猜中，结果 120 次里只猜中 3 次。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 一步一步给',
      lines: [
        { character: 'domino', name: '多米诺', time: '15:00', text: '我一步一步来，你跟着做。第一步，把代码更新到最新版本，这一步叫 rebase。', html: '我一步一步来，你跟着做。第一步，把代码更新到最新版本，这一步叫 rebase。' },
        { character: 'cider', name: '西打', time: '15:01', text: '好。', html: '好。' },
        { character: 'domino', name: '多米诺', time: '15:02', text: '第二步，等自动测试跑完。看到绿色再往下。', html: '第二步，等自动测试跑完。看到绿色再往下。' },
        { character: 'cider', name: '西打', time: '15:03', text: '懂了，继续。', html: '懂了，继续。' },
      ],
      explanationHtml: '<div>\n<p>别再默认对方知道，先想想他现在该做哪一步。</p>\n<p>专业词第一次出现就解释一句，做完一步再说下一步。对方点头了也不一定懂，能用自己的话说一遍才算懂了。</p>\n</div>',
    },
    footerHtml: '<p>这事不大，别跟发链接给你的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明对方希望你把<strong>自己早就不用想的那几步</strong>也讲出来。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'left-on-read',
    order: 69,
    category: 'clarity',
    title: '已读不回',
    englishTitle: 'Left on Read',
    summary: '显示已读，只说明他看到了，没答应你马上回。',
    layout: 'comparison',
    hero: {
      titleHtml: '已读不回',
      subtitleHtml: 'Left on Read',
      leadHtml: '看到了，<br>\n                    也可能现在没空回。',
    },
    bad: {
      titleHtml: '❌ 把已读当欠条',
      lines: [
        { character: 'cider', name: '西打', time: '09:10', text: '昨天那个方案你看了吗？', html: '昨天那个方案你看了吗？' },
        { name: '已读', time: '09:10', text: '……', html: '……', tone: 'meta' },
        { character: 'cider', name: '西打', time: '09:40', text: '？', html: '？' },
        { character: 'cider', name: '西打', time: '10:10', text: '是不是有什么问题？', html: '是不是有什么问题？' },
        { character: 'domino', name: '多米诺', time: '10:12', text: '刚开完会。看了，第二页有个数不对，晚点跟你说。', html: '刚开完会。看了，第二页有个数不对，晚点跟你说。' },
      ],
      explanationHtml: '<div>\n<p>把已读当成「该马上回」，对方就平白欠了你一笔。</p>\n<p>2015 年，Barber 和 Santuzzi 给这种「消息必须马上回」的压力起了个名字，叫 telepressure。他们发现这种压力和疲惫、睡不好有关，和手上的活多不多关系不大。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 把时间说清楚',
      lines: [
        { character: 'cider', name: '西打', time: '09:10', text: '方案看了吗？不急，今天下班前给我个方向就行。', html: '方案看了吗？不急，今天下班前给我个方向就行。' },
        { character: 'domino', name: '多米诺', time: '09:11', text: '看了，第二页的数不对，我五点前批注给你。', html: '看了，第二页的数不对，我五点前批注给你。' },
        { character: 'cider', name: '西打', time: '09:12', text: '好。', html: '好。' },
      ],
      explanationHtml: '<div>\n<p>发消息的时候写上什么时候要，对方就不用猜。</p>\n<p>真着急就打电话。不急，就别盯着已读两个字催。你也可以先补一句「不用现在回」。</p>\n</div>',
    },
    footerHtml: '<p>这事不大，别跟发链接给你的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明对方希望你别把<strong>已读</strong>当成<strong>必须秒回</strong>。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'sealioning',
    order: 70,
    category: 'systems',
    title: '海狮式纠缠',
    englishTitle: 'Sealioning',
    summary: '一句接一句客客气气地追问，直到把你问急。',
    layout: 'comparison',
    hero: {
      titleHtml: '海狮式纠缠',
      subtitleHtml: 'Sealioning',
      leadHtml: '他问那么多，没打算听答案，<br>\n                    就等着你发火。',
    },
    bad: {
      titleHtml: '❌ 无限追问',
      lines: [
        { character: 'cider', name: '西打', time: '20:01', text: '这家店的豆子烘得有点深。', html: '这家店的豆子烘得有点深。' },
        { character: 'bot327', name: '群友', time: '20:02', text: '有数据吗？', html: '有数据吗？' },
        { character: 'cider', name: '西打', time: '20:03', text: '就我个人口味。', html: '就我个人口味。' },
        { character: 'bot327', name: '群友', time: '20:03', text: '那你怎么能这么说？有对比测试吗？我只是想确认一下。', html: '那你怎么能这么说？有对比测试吗？我只是想确认一下。' },
        { character: 'cider', name: '西打', time: '20:04', text: '你有完没完？', html: '你有完没完？' },
        { character: 'bot327', name: '群友', time: '20:04', text: '你看，急了。', html: '你看，急了。' },
      ],
      explanationHtml: '<div>\n<p>海狮式纠缠的样子很好认。语气一直很客气，问题一遍遍地问，你说的每一句都要你拿出证据。</p>\n<p>他想要的是把你耗累、耗急，再截图说你不讲理。这个名字来自 2014 年 Wondermark 的一幅漫画，叫《The Terrible Sea Lion》，里面一只海狮追着一对夫妻不停地问「我只是想问问」。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 给一次，然后关门',
      lines: [
        { character: 'cider', name: '西打', time: '20:01', text: '这家店的豆子烘得有点深。', html: '这家店的豆子烘得有点深。' },
        { character: 'bot327', name: '群友', time: '20:02', text: '有数据吗？', html: '有数据吗？' },
        { character: 'cider', name: '西打', time: '20:03', text: '没有，个人口味，不构成推荐。', html: '没有，个人口味，不构成推荐。' },
        { character: 'bot327', name: '群友', time: '20:03', text: '那你怎么能这么说？', html: '那你怎么能这么说？' },
        { character: 'cider', name: '西打', time: '20:04', text: '这个话题我不继续了。', html: '这个话题我不继续了。' },
        { character: 'domino', name: '多米诺', time: '20:05', text: '他没想要答案，就想看你急。', html: '他没想要答案，就想看你急。' },
      ],
      explanationHtml: '<div>\n<p>认真回答一次，他再重复追问就别接了。你那句回答是说给旁边看的人听的，他听不听无所谓。</p>\n<p>可以和希钦斯剃刀一起用。提出主张的人确实该拿证据，可证据给过了还追着要，那就是纠缠了。</p>\n</div>',
    },
    footerHtml: '<p>这事不大，别跟发链接给你的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明有人正拿「我只是想确认一下」来耗你。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'dont-doxx',
    order: 71,
    category: 'relation',
    title: '别拿别人的隐私当武器',
    englishTitle: "Don't Doxx",
    summary: '把别人的姓名、电话、住址甩到群里，这事违法。',
    layout: 'comparison',
    hero: {
      titleHtml: '别拿别人的隐私当武器',
      subtitleHtml: "Don't Doxx",
      leadHtml: '你以为在挂人出气，<br>\n                    其实已经踩到法律的线了。',
    },
    bad: {
      titleHtml: '❌ 把隐私甩进群里',
      lines: [
        { character: 'cider', name: '西打', time: '21:02', text: '这人刚才在评论区骂我，我把他微信、公司、住址全扒出来了，大家帮我转发一下！', html: '这人刚才在评论区骂我，我把他微信、公司、住址全扒出来了，大家帮我转发一下！' },
        { character: 'bot327', name: '群友', time: '21:03', text: '卧槽真的假的', html: '卧槽真的假的' },
        { character: 'cider', name: '西打', time: '21:04', text: '截图都在这，连身份证我都找到了。', html: '截图都在这，连身份证我都找到了。' },
        { character: 'domino', name: '多米诺', time: '21:05', text: '等等，先别发。把别人的真实姓名、电话、住址、聊天记录甩出来，这是《个人信息保护法》第十条说的非法公开他人个人信息。', html: '等等，先别发。把别人的真实姓名、电话、住址、聊天记录甩出来，这是《个人信息保护法》第十条说的非法公开他人个人信息。' },
      ],
      explanationHtml: '<div>\n<p>中文网络里管这个叫「开盒」或者「挂人」，就是把一个人的真实身份和私人信息挖出来，再甩到公开的地方。</p>\n<p>这条线是法律画的。《个人信息保护法》第十条写着，任何组织、个人不得非法收集、使用、加工、传输他人个人信息，不得非法买卖、提供或者公开他人个人信息。情节严重的，还可能构成《刑法》第二百五十三条之一的侵犯公民个人信息罪。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 走通道，别扩散',
      lines: [
        { character: 'cider', name: '西打', time: '21:02', text: '这个人一直在私信骚扰我……', html: '这个人一直在私信骚扰我……' },
        { character: 'domino', name: '多米诺', time: '21:03', text: '先拉黑，再去平台举报，截图留好当证据。', html: '先拉黑，再去平台举报，截图留好当证据。' },
        { character: 'cider', name: '西打', time: '21:04', text: '那如果他还来现实中找我？', html: '那如果他还来现实中找我？' },
        { character: 'domino', name: '多米诺', time: '21:05', text: '要是有现实里的人身威胁，就报警。别自己把他的信息散出去，你一转发，可能也成了共同侵权。', html: '要是有现实里的人身威胁，就报警。别自己把他的信息散出去，你一转发，可能也成了共同侵权。' },
        { character: 'cider', name: '西打', time: '21:06', text: '懂了，我去走举报通道。', html: '懂了，我去走举报通道。' },
      ],
      explanationHtml: '<div>\n<p>平台上的事，就在平台上举报、拉黑、留证据。牵扯到现实里的威胁，就报警。</p>\n<p>把对方挂出来公开处刑，你并不会因此更占理。不相干的人会被卷进来，你自己也可能坐上被告席。</p>\n</div>',
    },
    footerHtml: '<p>这条只是提醒你别踩线，算不上法律意见。具体情况以官方条文和执业律师的意见为准。</p><p>如果你看到这个链接，说明对方希望你先停一下，别把别人的隐私甩到群里。</p><p>法条来源：<a href="https://flk.npc.gov.cn/detail2.html?ZmY4MDgwODE3Yjg2MzYxODE2YjA0MjE2NGMwZTEwODc%3D" target="_blank">《中华人民共和国个人信息保护法》（国家法律法规数据库）</a></p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
];
