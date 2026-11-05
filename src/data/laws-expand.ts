import type { Law } from './law-types';

/**
 * 2026-11 第二批增补的 8 条（order 72–79）。
 *
 * 前一批在 laws-extra.ts。这里单独开一个文件，理由一样：
 * 别每次加条目都去动五千行的 laws.ts。
 *
 * 内容取自 HowToGetAlong（人情世故指南）里能迁移到线上沟通的场景，
 * 重写成这个站的调性：先演一遍怎么说会出事，再给一个能直接抄的说法。
 *
 * footerHtml 三段是固定结构，用 footer() 拼，别手写四份一样的 GitHub 尾巴。
 */
const footer = (linkLine: string, origin: string): string =>
  `<p>这不是非常严重的事情，所以请不要对送你来看这个网站的人<a href="https://www.bilibili.com/video/BV1t4411V7m2/">生气</a>。</p><p>如果你看到这个链接，说明${linkLine}</p><p>${origin}</p><p><a href="https://github.com/DomeenoH/BeKind" target="_blank">GitHub</a> · 编排与译文采用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a> · © {{YEAR}}</p>`;

export const expandLaws: Law[] = [
  {
    slug: 'heard-vs-verified',
    order: 72,
    category: 'thinking',
    title: '传话前先分清听说和看到',
    englishTitle: 'Heard vs. Verified',
    summary: '转之前先说清你从哪儿知道的。',
    layout: 'comparison',
    hero: {
      titleHtml: '传话前先分清听说和看到',
      subtitleHtml: 'Heard vs. Verified',
      leadHtml: '「群里都在传」后面还缺半句，<br>缺的是「谁亲眼见过」。',
    },
    bad: {
      titleHtml: '❌ 听说就转',
      lines: [
        { character: 'cider', name: '西打', time: '19:40', text: '群里有人说下周要改规则。', html: '群里有人说下周要改规则。' },
        { character: 'domino', name: '多米诺', time: '19:41', text: '改成啥？', html: '改成啥？' },
        { character: 'cider', name: '西打', time: '19:41', text: '不知道，好像是说以后不能发文件了。', html: '不知道，好像是说以后不能发文件了。' },
        { character: 'tail', name: '尾巴', time: '19:42', text: '谁说的？', html: '谁说的？' },
        { character: 'cider', name: '西打', time: '19:42', text: '忘了，有人发过。', html: '忘了，有人发过。' },
        { character: 'domino', name: '多米诺', time: '19:43', text: '那挺麻烦，我转到隔壁群去。', html: '那挺麻烦，我转到隔壁群去。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">转述每过一手就掉一层限定词</h3>\n<p>第一手是「听运营说，可能在讨论限制附件大小」。到第三手，就剩「以后不能发文件了」。数字、时间、「可能」全被磨掉。</p>\n<p>转的人常觉得自己在帮忙同步。他补一句「我也听说了」，别人就更难怀疑。群里没人追问出处，一条带着「好像」的消息被转三次，看上去就和通知一样。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 说清来源',
      lines: [
        { character: 'cider', name: '西打', time: '19:40', text: '运营在公告群说，下周可能限制附件，还没定。', html: '运营在公告群说，下周可能限制附件，还没定。' },
        { character: 'domino', name: '多米诺', time: '19:41', text: '原文我看下。', html: '原文我看下。' },
        { character: 'cider', name: '西打', time: '19:41', text: '截图发你，原话是「在讨论，未定」。', html: '截图发你，原话是「在讨论，未定」。' },
        { character: 'domino', name: '多米诺', time: '19:43', text: '收到。我前天在隔壁群转过一个「已经定了」的版本，我去更正。', html: '收到。我前天在隔壁群转过一个「已经定了」的版本，我去更正。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">出处和更正都留在原地</h3>\n<p>说清来源，别人手上就多一个能自己点开去看的入口。他信的是那条公告。你只是转了个链接。</p>\n<p>转错了，回原来的群说一句「我记错了，实际还在讨论」。这比悄悄删掉那条有用。删掉只让你自己干净，看过的人照样带着错印象。更正留在原地，后来翻记录的人才看得到。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你在转发之前，先说清这是听来的还是见过的。',
      '横向阅读（lateral reading）是新闻核查训练里的一个动作，读到一条说法先离开当前页面，去看原始出处和别的来源怎么讲。这个词在公开的媒介素养材料里很常见，谁先提出已经查不清。群聊里没有核查流程。能做的是转之前把话分三堆，自己见过的、听别人转述的、自己猜的。这一条没有统一出处，属于经验总结。',
    ),
  },
  {
    slug: 'accept-the-compliment',
    order: 73,
    category: 'relation',
    title: '别急着说没有没有',
    englishTitle: 'Accept the Compliment',
    summary: '一句「谢谢」就够，别推回去。',
    layout: 'comparison',
    hero: {
      titleHtml: '别急着说没有没有',
      subtitleHtml: 'Accept the Compliment',
      leadHtml: '「没有没有，运气好」<br>说完这句，夸你的人还得再夸一遍。',
    },
    bad: {
      titleHtml: '❌ 连忙否认',
      lines: [
        { character: 'cider', name: '西打', time: '20:10', text: '你昨天那版方案写得挺好啊，客户一次就过了。', html: '你昨天那版方案写得挺好啊，客户一次就过了。' },
        { character: 'domino', name: '多米诺', time: '20:10', text: '没有没有，主要是他们没细看。', html: '没有没有，主要是他们没细看。' },
        { character: 'cider', name: '西打', time: '20:11', text: '别谦虚，我是真觉得好。', html: '别谦虚，我是真觉得好。' },
        { character: 'cider', name: '西打', time: '20:11', text: '那正好，下周那个更难的也你来吧，反正你顺手。', html: '那正好，下周那个更难的也你来吧，反正你顺手。' },
        { character: 'domino', name: '多米诺', time: '20:12', text: '行吧。', html: '行吧。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">否认把话头递了回去</h3>\n<p>对方夸一句，本来这件事就完了。你说「没有没有」，他得再补一句「真的有」。你还得再推一次。两个来回，谁也没得到什么。</p>\n<p>麻烦在紧跟着的那半句。「你做得不错」和「以后都交给你」在一个句子里。接不接，是两件事。被夸的时候人容易一并收下，顺手把活儿也接了。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 先谢再说',
      lines: [
        { character: 'cider', name: '西打', time: '20:10', text: '你昨天那版方案写得挺好啊，客户一次就过了。', html: '你昨天那版方案写得挺好啊，客户一次就过了。' },
        { character: 'domino', name: '多米诺', time: '20:11', text: '谢谢，我改到第三版才敢发。', html: '谢谢，我改到第三版才敢发。' },
        { character: 'cider', name: '西打', time: '20:11', text: '那下周那个更难的也你来吧，反正你顺手。', html: '那下周那个更难的也你来吧，反正你顺手。' },
        { character: 'domino', name: '多米诺', time: '20:12', text: '下周我排满了，周四能给你看个初稿。', html: '下周我排满了，周四能给你看个初稿。' },
        { character: 'cider', name: '西打', time: '20:12', text: '行，那就周四。', html: '行，那就周四。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">夸奖管夸奖，请求管请求</h3>\n<p>「谢谢」两个字先把前一个回合结束掉。补一句真实的难处，对方就知道这份活儿值多少。下次夸的时候，他也不会夸错地方。</p>\n<p>后面那句话单独算。答应它要看时间和人手，跟刚才的夸奖没关系。团队成果被夸的时候也一样。把「这部分是西打做的」说出来，下次分活儿才不会又落到同一个人头上。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你收下这句夸奖，也把后面带的那件活儿分开算。',
      '英文社交建议里常见一句 just say thank you，各类礼仪专栏都写过，找不到最初的提出者。后半段那句「夸奖后面跟着的请求要单独算」，职场沟通的书里零散提过，没有统一说法。这一条是经验总结。',
    ),
  },
  {
    slug: 'tentative-is-a-answer',
    order: 74,
    category: 'relation',
    title: '我看看比不去更耗人',
    englishTitle: 'Tentative Is an Answer',
    summary: '待定要说清什么时候给准信。',
    layout: 'comparison',
    hero: {
      titleHtml: '我看看比不去更耗人',
      subtitleHtml: 'Tentative Is an Answer',
      leadHtml: '「再说吧」占着一个位置，<br>对方就一直不敢安排别人。',
    },
    bad: {
      titleHtml: '❌ 一直待定',
      lines: [
        { character: 'cider', name: '西打', time: '18:20', text: '周六晚上线上开黑，我开房间，六个人。', html: '周六晚上线上开黑，我开房间，六个人。' },
        { character: 'domino', name: '多米诺', time: '18:31', text: '看看，到时候再说。', html: '看看，到时候再说。' },
        { character: 'cider', name: '西打', time: '18:31', text: '那我先给你留个位。', html: '那我先给你留个位。' },
        { character: 'cider', name: '西打', time: '19:05', text: '今晚要定人数，你到底来不来？', html: '今晚要定人数，你到底来不来？' },
        { character: 'domino', name: '多米诺', time: '19:20', text: '不确定，可能有事。', html: '不确定，可能有事。' },
        { character: 'cider', name: '西打', time: '19:21', text: '行，我先按你来算。', html: '行，我先按你来算。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">位置占着，人就动不了</h3>\n<p>「再说吧」在发的人听来是礼貌，在等的人听来是一扇还没关的门。门没关，他就得留着。</p>\n<p>留着有成本。五个人变六个人，房间要重开，队伍要重排。到开房间前你说不来，他得当场找人补。这些活儿一条都不会记在你头上。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 说清时限',
      lines: [
        { character: 'cider', name: '西打', time: '18:20', text: '周六晚上线上开黑，我开房间，六个人。', html: '周六晚上线上开黑，我开房间，六个人。' },
        { character: 'domino', name: '多米诺', time: '18:31', text: '八点前给你准信，现在在开会。', html: '八点前给你准信，现在在开会。' },
        { character: 'cider', name: '西打', time: '18:31', text: '行，我先按五个算。', html: '行，我先按五个算。' },
        { character: 'domino', name: '多米诺', time: '19:52', text: '还是来不了，别留位，你们开。', html: '还是来不了，别留位，你们开。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">待定要带一个到期时间</h3>\n<p>「我现在定不了」和「我八点前告诉你」差在一个期限。前一句让对方干等。后一句让对方先按五个人安排。</p>\n<p>期限到了给不出准信，也要发一条。「还是定不了」这五个字照样能让人继续排。到了点没消息，他只能再问一遍。那条追问本来可以省掉。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你的「再说吧」后面跟个时间，别让人一直留着位。',
      '出处不明。日历软件把邀请回复分成接受、拒绝、暂定三档，选暂定的时候要填一个大概什么时候能定下来。产品设计里这是常识。群聊里没有这一档，只能自己补上时间。后半段是经验总结。',
    ),
  },
  {
    slug: 'dont-pick-a-side',
    order: 75,
    category: 'relation',
    title: '别在群里替别人定性',
    englishTitle: "Don't Pick a Side",
    summary: '别替第三个人做人格评价。',
    layout: 'comparison',
    hero: {
      titleHtml: '别在群里替别人定性',
      subtitleHtml: "Don't Pick a Side",
      leadHtml: '「你是不是也觉得他不行」<br>这句话接下去，你就成了证人。',
    },
    bad: {
      titleHtml: '❌ 附和定性',
      lines: [
        { character: 'cider', name: '西打', time: '14:02', text: '你是不是也觉得他那个方案挺敷衍？', html: '你是不是也觉得他那个方案挺敷衍？' },
        { character: 'domino', name: '多米诺', time: '14:03', text: '是有点，他最近好像都不太上心。', html: '是有点，他最近好像都不太上心。' },
        { character: 'cider', name: '西打', time: '14:03', text: '我就说吧。', html: '我就说吧。' },
        { character: 'cider', name: '西打', time: '14:04', text: '我去跟老板说，两个人看法一致。', html: '我去跟老板说，两个人看法一致。' },
        { character: 'tail', name: '尾巴', time: '14:05', text: '谁看过原文档？', html: '谁看过原文档？' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">一句感觉会变成一句证词</h3>\n<p>「他不太上心」讲的是他的动机。你不在他脑子里。这句话你没法答，别人也没法查。</p>\n<p>更要紧的是你被摆的位置。西打问「你是不是也觉得」，你一附和，它就变成两个人的共同看法。他之后跟谁去说，都会带上你。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 只说事实',
      lines: [
        { character: 'cider', name: '西打', time: '14:02', text: '你是不是也觉得他那个方案挺敷衍？', html: '你是不是也觉得他那个方案挺敷衍？' },
        { character: 'domino', name: '多米诺', time: '14:03', text: '他那版少了预算那页，我按旧数排的，后来重算半天。', html: '他那版少了预算那页，我按旧数排的，后来重算半天。' },
        { character: 'cider', name: '西打', time: '14:03', text: '就这个？', html: '就这个？' },
        { character: 'domino', name: '多米诺', time: '14:04', text: '他这周在忙什么我不知道，直接问他比较快。', html: '他这周在忙什么我不知道，直接问他比较快。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">把人格问题换成影响清单</h3>\n<p>「敷衍」讲的是动机，你答不了。「少了预算那页」讲的是发生过的动作，还有它落到谁头上。这句话能拿去开会。</p>\n<p>不知道的部分也说一句。你不清楚他这周在忙什么，就直说不清楚。剩下那句该问谁，直接在群里问他。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你把「他就是不行」换成他具体做过的哪件事。',
      '出处不明。认知行为疗法里常区分「事实」和「想法」，接纳承诺疗法（ACT）把这套动作叫脱钩，Russ Harris 的书里写过类似的练习。群聊里那句「你是不是也觉得」，是这套动作最常被用到的场合，具体说法找不到源头。',
    ),
  },
  {
    slug: 'praise-the-detail',
    order: 76,
    category: 'relation',
    title: '夸人得说清好在哪一步',
    englishTitle: 'Praise the Detail',
    summary: '具体到哪一步，夸奖才有用。',
    layout: 'comparison',
    hero: {
      titleHtml: '夸人得说清好在哪一步',
      subtitleHtml: 'Praise the Detail',
      leadHtml: '说一句「牛逼」只花两秒，<br>对方也不知道下次该保持什么。',
    },
    bad: {
      titleHtml: '❌ 空夸一句',
      lines: [
        { character: 'cider', name: '西打', time: '11:20', text: '牛逼啊。', html: '牛逼啊。' },
        { character: 'domino', name: '多米诺', time: '11:21', text: '哈哈谢谢。', html: '哈哈谢谢。' },
        { character: 'cider', name: '西打', time: '11:21', text: '看得出来你最近很努力。', html: '看得出来你最近很努力。' },
        { character: 'domino', name: '多米诺', time: '11:22', text: '……你看到啥了？', html: '……你看到啥了？' },
        { character: 'cider', name: '西打', time: '11:22', text: '反正就是很厉害。', html: '反正就是很厉害。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">夸不到点上，对方接不住</h3>\n<p>「牛逼」只管情绪，不管信息。对方收到了高兴，但不知道哪一段让你觉得值。</p>\n<p>编出来的细节更麻烦。「看你努力了很久」听着像夸奖，实际是一句猜测。他这周要是在摸鱼，这句就得他自己想办法接。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 夸到具体',
      lines: [
        { character: 'cider', name: '西打', time: '11:20', text: '你把报错截图直接贴进来那一步，帮我省了半小时。', html: '你把报错截图直接贴进来那一步，帮我省了半小时。' },
        { character: 'domino', name: '多米诺', time: '11:21', text: '那个啊，我顺手截的。', html: '那个啊，我顺手截的。' },
        { character: 'cider', name: '西打', time: '11:21', text: '以后都这么贴，我省事你也省事。', html: '以后都这么贴，我省事你也省事。' },
        { character: 'domino', name: '多米诺', time: '11:22', text: '行，那我以后都带上。', html: '行，那我以后都带上。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">夸具体的东西，等于告诉他下次照做</h3>\n<p>「截图那一步省了我半小时」里有动作，有结果，还有成本。对方听完就知道自己哪一下有用。</p>\n<p>顺带一句「以后都这么贴」，等于把这次的夸奖折成了习惯。他不用猜你是在客气还是真觉得好。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你把「很厉害」换成他做过的哪一步。',
      '出处不明。教育和管理类材料里常见的说法是「表扬要具体」，各类培训都在讲，找不到最初的提出者。也有研究对比过具体反馈和笼统表扬，样本和结论我记不准，不敢写在这里。这条按经验总结处理。',
    ),
  },
  {
    slug: 'accepted-the-no',
    order: 77,
    category: 'relation',
    title: '被拒了别把请求改小',
    englishTitle: 'Accept the No',
    summary: '对方已经答过一次了。',
    layout: 'comparison',
    hero: {
      titleHtml: '被拒了别把请求改小',
      subtitleHtml: 'Accept the No',
      leadHtml: '「就一分钟」「顺便再问一下」，<br>是同一个请求换了三种说法。',
    },
    bad: {
      titleHtml: '❌ 越问越小',
      lines: [
        { character: 'cider', name: '西打', time: '10:02', text: '那个文档你能帮我整理一下吗？', html: '那个文档你能帮我整理一下吗？' },
        { character: 'domino', name: '多米诺', time: '10:20', text: '这周不行，我排满了。', html: '这周不行，我排满了。' },
        { character: 'cider', name: '西打', time: '10:21', text: '就一分钟，你把链接发我就行。', html: '就一分钟，你把链接发我就行。' },
        { character: 'domino', name: '多米诺', time: '10:40', text: '……链接在我收藏夹，我得找。', html: '……链接在我收藏夹，我得找。' },
        { character: 'cider', name: '西打', time: '10:41', text: '那顺便帮我看下第三页对不对？', html: '那顺便帮我看下第三页对不对？' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">请求缩小了，答案没有变</h3>\n<p>「就一分钟」把活儿改小了。对方拒的是今天再多一件，跟这活儿多大没关系。答案还是那个不。</p>\n<p>每换一次说法，他就得重新判断一次，还要重新想一个不伤人的拒绝。问到第三次，他多半会答应，然后心里记一笔。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 就此打住',
      lines: [
        { character: 'cider', name: '西打', time: '10:02', text: '那个文档你能帮我整理一下吗？', html: '那个文档你能帮我整理一下吗？' },
        { character: 'domino', name: '多米诺', time: '10:20', text: '这周不行，我排满了。', html: '这周不行，我排满了。' },
        { character: 'cider', name: '西打', time: '10:20', text: '行，那我先自己弄。', html: '行，那我先自己弄。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">他拒的是一个时间段</h3>\n<p>「这周不行」这句里带着时间。下周再问一次，是一个新请求，不算磨人。</p>\n<p>磨人的是同一件事换个说法接着问。判断很简单。你这次问的和上次，是不是同一件事、同一个时间。都是，就停。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你把那句「就一分钟」咽回去，别再换个说法问。',
      '出处不明。谈判和销售培训里有个做法，先提一个大请求，被拒之后再提小的，成功率会往上走。那套东西是故意设计出来的。反过来看就知道，被拆的人要连着拒两次。这条按经验总结处理。',
    ),
  },
  {
    slug: 'ask-before-introducing',
    order: 78,
    category: 'systems',
    title: '拉群之前先问一声',
    englishTitle: 'Ask Before Introducing',
    summary: '替别人开门之前，先问一句。',
    layout: 'comparison',
    hero: {
      titleHtml: '拉群之前先问一声',
      subtitleHtml: 'Ask Before Introducing',
      leadHtml: '推名片、拉群、在群里说「你们聊」，<br>都是替别人开门。',
    },
    bad: {
      titleHtml: '❌ 先拉再说',
      lines: [
        { character: 'cider', name: '西打', time: '15:02', text: '我把你的名片推给客户了，你们直接聊。', html: '我把你的名片推给客户了，你们直接聊。' },
        { character: 'domino', name: '多米诺', time: '15:10', text: '啊？', html: '啊？' },
        { character: 'domino', name: '多米诺', time: '15:12', text: '你没跟我说一声。', html: '你没跟我说一声。' },
        { character: 'cider', name: '西打', time: '15:12', text: '客户挺急的，我想着省一步。', html: '客户挺急的，我想着省一步。' },
        { character: 'domino', name: '多米诺', time: '15:40', text: '我手机现在一直在响。', html: '我手机现在一直在响。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">你替别人开了一扇门，风是他受</h3>\n<p>名片上有电话。推出去之后，接不接、什么时候接、说到哪一步停，这些决定权一起被推了出去。</p>\n<p>拉群也一样。群一建，他就在一个自己没同意进的房间里，走也不是，留也不是。你只点了两下，他要花一下午收拾。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 先问一句',
      lines: [
        { character: 'cider', name: '西打', time: '15:02', text: '客户想直接找你，我把名片给他行吗？他要问报价，别的不用你管。', html: '客户想直接找你，我把名片给他行吗？他要问报价，别的不用你管。' },
        { character: 'domino', name: '多米诺', time: '15:08', text: '现在不行，我这周在收尾，下周一可以。', html: '现在不行，我这周在收尾，下周一可以。' },
        { character: 'cider', name: '西打', time: '15:08', text: '行，我跟他说下周一。', html: '行，我跟他说下周一。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">问的时候把三样说清楚</h3>\n<p>要问的是三样。这人是谁、找他干什么、他能不能说不。三样都给到，一句「行」才是真的行。</p>\n<p>用途写得越窄，他越敢说不行。「就问你个报价，别的不用管」比「你们认识一下」好拒得多。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你在推名片之前，先问一句他愿不愿意。',
      '出处不明。个人信息保护相关的法规里，把别人的联系方式提供给第三方，一般要先取得本人同意。群聊礼节讲的是同一件事，只是比法律早得多，也没那么严格。这条按经验总结处理。',
    ),
  },
  {
    slug: 'let-them-finish-the-good-news',
    order: 79,
    category: 'relation',
    title: '别人报喜的时候先接住',
    englishTitle: 'Let Them Finish the Good News',
    summary: '第一句先高兴，别急着分析。',
    layout: 'comparison',
    hero: {
      titleHtml: '别人报喜的时候先接住',
      subtitleHtml: 'Let Them Finish the Good News',
      leadHtml: '「我拿到 offer 了」<br>你回的第一句，决定他以后还报不报喜。',
    },
    bad: {
      titleHtml: '❌ 当场分析',
      lines: [
        { character: 'cider', name: '西打', time: '21:10', text: '我拿到 offer 了！', html: '我拿到 offer 了！' },
        { character: 'domino', name: '多米诺', time: '21:11', text: '多少钱一个月？', html: '多少钱一个月？' },
        { character: 'cider', name: '西打', time: '21:11', text: '……还没谈。', html: '……还没谈。' },
        { character: 'domino', name: '多米诺', time: '21:12', text: '那家我听说加班挺狠的，你想清楚了。', html: '那家我听说加班挺狠的，你想清楚了。' },
        { character: 'cider', name: '西打', time: '21:30', text: '嗯。', html: '嗯。' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">喜讯刚落地，就被拿去评估风险</h3>\n<p>他发那句话，要的是有人跟他一起高兴三秒。你回的三句都在处理信息，一句都没接情绪。</p>\n<p>那个「嗯」之后，他下次有好事会先发给别人。你再也听不到了。</p>\n</div>',
    },
    good: {
      titleHtml: '✅ 跟着高兴',
      lines: [
        { character: 'cider', name: '西打', time: '21:10', text: '我拿到 offer 了！', html: '我拿到 offer 了！' },
        { character: 'domino', name: '多米诺', time: '21:10', text: '真的？恭喜啊！', html: '真的？恭喜啊！' },
        { character: 'cider', name: '西打', time: '21:11', text: '我也没想到，面了三轮。', html: '我也没想到，面了三轮。' },
        { character: 'domino', name: '多米诺', time: '21:11', text: '三轮都过了，厉害。你最想干哪块？', html: '三轮都过了，厉害。你最想干哪块？' },
      ],
      explanationHtml:
        '<div>\n<h3 style="margin-top:0">先高兴，再问，顺序不能换</h3>\n<p>「恭喜」花不了几秒，它决定后面的话他还听不听得进去。先问薪资，后面说什么都像审问。</p>\n<p>想问就问他最想干哪块。这句话默认他会去，也不催他现在做决定。喜讯归他自己发，你替他转进群，等于替他决定了谁该知道。</p>\n</div>',
    },
    footerHtml: footer(
      '有人希望你先跟着高兴三秒，再问他想干哪块。',
      '出处不明。心理学里有个说法叫主动建设性回应，研究者 Shelly Gable 观察过伴侣之间怎么回应对方的好消息，常被引用来说热情回应有用。我记得结论，具体数字不敢写。中文里的老话「别扫兴」讲的是同一件事。这条按经验总结处理。',
    ),
  },
];
