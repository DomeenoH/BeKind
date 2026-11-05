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
    title: '选对介质',
    englishTitle: 'Media Richness',
    summary: '事情越说不清，越不该只发文字。',
    layout: 'comparison',
    hero: {
      titleHtml: '选对介质',
      subtitleHtml: 'Media Richness',
      leadHtml: '同一件事，发文字、打电话、开视频，<br>\n                    传到的信息量不一样。',
    },
    bad: {
      titleHtml: '❌ 用最省事的方式',
      lines: [
        { character: 'cider', name: '西打', time: '10:02', text: '客户那边好像有点问题，你看着办吧。', html: '客户那边好像有点问题，你看着办吧。' },
        { character: 'domino', name: '多米诺', time: '10:05', text: '什么问题？严重吗？', html: '什么问题？严重吗？' },
        { character: 'cider', name: '西打', time: '10:06', text: '我也说不好，反正他们不太高兴。', html: '我也说不好，反正他们不太高兴。' },
        { character: 'domino', name: '多米诺', time: '10:08', text: '……我们打个电话吧。', html: '……我们打个电话吧。' },
      ],
      explanationHtml: '<div>\n<p><strong>模糊的任务 + 精简介质 = 反复猜。</strong>文字适合传事实，不适合传「到底多严重」。</p>\n<p>你省下的是打字时间，对方付的是理解成本。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 按任务的模糊度选',
      lines: [
        { character: 'cider', name: '西打', time: '10:02', text: '方便电话吗？客户对交付时间有异议，大概五分钟。', html: '方便电话吗？客户对交付时间有异议，大概五分钟。' },
        { character: 'domino', name: '多米诺', time: '10:03', text: '打。', html: '打。' },
        { name: '语音通话', time: '10:04', text: '通话 6 分钟，改成周五交付，客户确认。', html: '通话 6 分钟，改成周五交付，客户确认。', tone: 'meta' },
      ],
      explanationHtml: '<div>\n<p>任务越模糊，越需要反馈快、线索多的介质；事实清楚、只需要留痕的事，文字反而更合适。</p>\n<p>不是文字不好，是文字不适合这件事。</p>\n</div>',
    },
    footerHtml: '<p>这不是非常严重的事情，所以请不要对送你来看这个网站的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明对方希望你先判断这件事该不该只用文字说。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'curse-of-knowledge',
    order: 68,
    category: 'clarity',
    title: '知识的诅咒',
    englishTitle: 'Curse of Knowledge',
    summary: '你一旦知道，就很难想象别人不知道。',
    layout: 'comparison',
    hero: {
      titleHtml: '知识的诅咒',
      subtitleHtml: 'Curse of Knowledge',
      leadHtml: '你讲得越顺，<br>\n                    对方可能越听不懂。',
    },
    bad: {
      titleHtml: '❌ 跳过自己已经不用想的步骤',
      lines: [
        { character: 'domino', name: '多米诺', time: '15:00', text: '你先把这个 branch rebase 一下，然后走一遍 CI，过了就 merge，记得把 feature flag 打开。', html: '你先把这个 branch rebase 一下，然后走一遍 CI，过了就 merge，记得把 feature flag 打开。' },
        { character: 'cider', name: '西打', time: '15:01', text: '……rebase 是干嘛的？', html: '……rebase 是干嘛的？' },
        { character: 'domino', name: '多米诺', time: '15:01', text: '就是把你的改动挪到最新的主干上。', html: '就是把你的改动挪到最新的主干上。' },
        { character: 'cider', name: '西打', time: '15:02', text: '那 CI 是什么？', html: '那 CI 是什么？' },
        { character: 'domino', name: '多米诺', time: '15:03', text: '……我直接给你演示一遍吧。', html: '……我直接给你演示一遍吧。' },
      ],
      explanationHtml: '<div>\n<p>不是西打笨，是多米诺跳过了自己已经不需要想的步骤。</p>\n<p>Camerer、Loewenstein 和 Weber 1989 年把这叫「知识的诅咒」；Newton 1990 年的敲歌实验里，敲的人以为一半人能猜中，实际 120 次只中 3 次。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 一步一步给',
      lines: [
        { character: 'domino', name: '多米诺', time: '15:00', text: '我一步一步来，你跟着做。第一步，把代码更新到最新版本——这一步叫 rebase。', html: '我一步一步来，你跟着做。第一步，把代码更新到最新版本——这一步叫 rebase。' },
        { character: 'cider', name: '西打', time: '15:01', text: '好。', html: '好。' },
        { character: 'domino', name: '多米诺', time: '15:02', text: '第二步，等自动测试跑完。看到绿色再往下。', html: '第二步，等自动测试跑完。看到绿色再往下。' },
        { character: 'cider', name: '西打', time: '15:03', text: '懂了，继续。', html: '懂了，继续。' },
      ],
      explanationHtml: '<div>\n<p>把「我以为你知道」换成「你现在的下一步是什么」。</p>\n<p>第一次出现给全称，做完一步再给下一步；对方点头不等于听懂，能复述才算。</p>\n</div>',
    },
    footerHtml: '<p>这不是非常严重的事情，所以请不要对送你来看这个网站的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明对方希望你把「已经不用想的那几步」也讲出来。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'left-on-read',
    order: 69,
    category: 'clarity',
    title: '已读不回',
    englishTitle: 'Left on Read',
    summary: '已读是状态，不是承诺。',
    layout: 'comparison',
    hero: {
      titleHtml: '已读不回',
      subtitleHtml: 'Left on Read',
      leadHtml: '看到了，<br>\n                    不等于现在能回。',
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
      explanationHtml: '<div>\n<p>把「已读」当成「应该立刻回」，会把一个状态变成一笔债。</p>\n<p>Barber 和 Santuzzi 2015 年把这种「必须马上回」的冲动叫 telepressure；它和疲惫、睡眠变差相关，而且和实际工作量不是一回事。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 把时间说清楚',
      lines: [
        { character: 'cider', name: '西打', time: '09:10', text: '方案看了吗？不急，今天下班前给我个方向就行。', html: '方案看了吗？不急，今天下班前给我个方向就行。' },
        { character: 'domino', name: '多米诺', time: '09:11', text: '看了，第二页的数不对，我五点前批注给你。', html: '看了，第二页的数不对，我五点前批注给你。' },
        { character: 'cider', name: '西打', time: '09:12', text: '好。', html: '好。' },
      ],
      explanationHtml: '<div>\n<p>发消息时把「什么时候要」写清楚，对方就不用猜。</p>\n<p>需要即时回应就打电话；不需要，就别把「已读」当催促。你也可以主动补一句「不用现在回」。</p>\n</div>',
    },
    footerHtml: '<p>这不是非常严重的事情，所以请不要对送你来看这个网站的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明对方希望你别把「已读」当成「必须秒回」。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'sealioning',
    order: 70,
    category: 'systems',
    title: '海狮式纠缠',
    englishTitle: 'Sealioning',
    summary: '用礼貌的追问，把你耗到失态。',
    layout: 'comparison',
    hero: {
      titleHtml: '海狮式纠缠',
      subtitleHtml: 'Sealioning',
      leadHtml: '他不是来求证的，<br>\n                    是来让你发火的。',
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
      explanationHtml: '<div>\n<p>海狮式纠缠的特征：语气始终客气、问题反复、要求你为每一句话举证。</p>\n<p>目的不是求真，是让你疲惫或失态，再截图证明「他不讲理」。名字来自 2014 年 Wondermark 的漫画《The Terrible Sea Lion》。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 给一次，然后关门',
      lines: [
        { character: 'cider', name: '西打', time: '20:01', text: '这家店的豆子烘得有点深。', html: '这家店的豆子烘得有点深。' },
        { character: 'bot327', name: '群友', time: '20:02', text: '有数据吗？', html: '有数据吗？' },
        { character: 'cider', name: '西打', time: '20:03', text: '没有，个人口味，不构成推荐。', html: '没有，个人口味，不构成推荐。' },
        { character: 'bot327', name: '群友', time: '20:03', text: '那你怎么能这么说？', html: '那你怎么能这么说？' },
        { character: 'cider', name: '西打', time: '20:04', text: '这个话题我不继续了。', html: '这个话题我不继续了。' },
        { character: 'domino', name: '多米诺', time: '20:05', text: '他要的不是答案，是你的反应。', html: '他要的不是答案，是你的反应。' },
      ],
      explanationHtml: '<div>\n<p>给一次明确回答，重复追问就停止；把结论留给旁观者，不留给对方。</p>\n<p>和希钦斯剃刀一起用：主张的人要举证；但举证之后还追着要，那就不是求证。</p>\n</div>',
    },
    footerHtml: '<p>这不是非常严重的事情，所以请不要对送你来看这个网站的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明有人正在用「我只是想确认一下」消耗你。</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
  {
    slug: 'dont-doxx',
    order: 71,
    category: 'relation',
    title: '别拿别人的隐私当武器',
    englishTitle: "Don't Doxx",
    summary: '把别人的真实身份、电话、住址甩到群里，不是「正义」，是违法。',
    layout: 'comparison',
    hero: {
      titleHtml: '别拿别人的隐私当武器',
      subtitleHtml: "Don't Doxx",
      leadHtml: '你以为在「挂人」，<br>\n                    其实在踩法律的线。',
    },
    bad: {
      titleHtml: '❌ 把隐私甩进群里',
      lines: [
        { character: 'cider', name: '西打', time: '21:02', text: '这人刚才在评论区骂我，我把他微信、公司、住址全扒出来了，大家帮我转发一下！', html: '这人刚才在评论区骂我，我把他微信、公司、住址全扒出来了，大家帮我转发一下！' },
        { character: 'bot327', name: '群友', time: '21:03', text: '卧槽真的假的', html: '卧槽真的假的' },
        { character: 'cider', name: '西打', time: '21:04', text: '截图都在这，连身份证我都找到了。', html: '截图都在这，连身份证我都找到了。' },
        { character: 'domino', name: '多米诺', time: '21:05', text: '等等，先别发。把别人的真实姓名、电话、住址、聊天记录甩出来，不是「正义」，是《个人信息保护法》第十条说的「非法公开他人个人信息」。', html: '等等，先别发。把别人的真实姓名、电话、住址、聊天记录甩出来，不是「正义」，是《个人信息保护法》第十条说的「非法公开他人个人信息」。' },
      ],
      explanationHtml: '<div>\n<p>在中文网络里，这叫「开盒」或「挂人」：把一个人的真实身份和私密信息从私域挖出来，再甩到公开渠道。</p>\n<p>它踩的是硬线——《个人信息保护法》第十条：任何组织、个人不得非法收集、使用、加工、传输他人个人信息，不得非法买卖、提供或者公开他人个人信息。情节严重的，还可能触及《刑法》第二百五十三条之一（侵犯公民个人信息罪）。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 走通道，别扩散',
      lines: [
        { character: 'cider', name: '西打', time: '21:02', text: '这个人一直在私信骚扰我……', html: '这个人一直在私信骚扰我……' },
        { character: 'domino', name: '多米诺', time: '21:03', text: '先拉黑 + 平台举报，截图留好当证据。', html: '先拉黑 + 平台举报，截图留好当证据。' },
        { character: 'cider', name: '西打', time: '21:04', text: '那如果他还来现实中找我？', html: '那如果他还来现实中找我？' },
        { character: 'domino', name: '多米诺', time: '21:05', text: '涉及现实人身威胁就报警。别自己把他的信息散出去——你一转发，可能也成了共同侵权。', html: '涉及现实人身威胁就报警。别自己把他的信息散出去——你一转发，可能也成了共同侵权。' },
        { character: 'cider', name: '西打', time: '21:06', text: '懂了，我去走举报通道。', html: '懂了，我去走举报通道。' },
      ],
      explanationHtml: '<div>\n<p>平台内的事，走平台的举报、拉黑、留证；涉及现实威胁，报警。</p>\n<p>把对方「公开处刑」不会让你更占理，只会让更多人无辜卷入，也把你放到被告席。你守住的，是「不扩散」而不是「以暴制暴」。</p>\n</div>',
    },
    footerHtml: '<p>这条不是法律意见，只是提醒你别踩线；具体情形以官方条文和执业律师意见为准。</p><p>如果你看到这个链接，说明对方希望你先停一下，别把别人的隐私甩到群里。</p><p>法条来源：<a href="https://flk.npc.gov.cn/detail2.html?ZmY4MDgwODE3Yjg2MzYxODE2YjA0MjE2NGMwZTEwODc%3D" target="_blank">《中华人民共和国个人信息保护法》（国家法律法规数据库）</a></p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>',
  },
];
