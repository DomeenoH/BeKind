import { orderedLaws } from './laws';

const total = orderedLaws.length;

export const site = {
  name: 'BeKind',
  title: '互联网沟通指北',
  tagline: '别当混蛋，做个好网友。',
  description: `BeKind 收录 ${total} 条互联网沟通法则、思维剃刀和网络行为原则。多数法则配一段群聊：先演一遍怎么说会出事，再给一个能直接抄的说法。`,
  intro: `${total} 条互联网沟通法则，大多配一段 QQ 群聊：先演一遍怎么说会出事，再给一个能直接抄的说法。一条两分钟，不用做笔记。`,
  eyebrow: `${total} 条法则，附翻车现场`,
  footerLine: '不算教程，只是一些把天聊明白的说法。',
  url: 'https://bk.0x0.cat',
  repo: 'https://github.com/DomeenoH/BeKind',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  year: 2026,
  searchPlaceholder: '搜索法则、关键词或场景',
  searchEmptyTitle: '没有这条法则',
  searchEmptyHint: '换个词试试：在吗、提问、群聊、已读不回。',
} as const;

export const cast = [
  {
    id: 'domino',
    name: '多米诺',
    role: '站点作者',
    line: '老倒霉蛋。什么破事都能让他赶上，于是有了这个站。',
  },
  {
    id: 'cider',
    name: '西打',
    role: '多米诺的 partner',
    line: '有时是发起人，有时是那个被问「在吗」的人。',
  },
  {
    id: 'tail',
    name: '尾巴',
    role: '尾巴咖啡的吉祥物',
    line: '在咖啡车接客，也在这个站里当裁判。',
    href: 'https://cafe.weibazhen.com',
  },
  {
    id: 'bot327',
    name: '群友',
    role: '群演',
    line: '偶尔上线，当个群演。',
  },
] as const;

export const howToUse = [
  {
    step: '01',
    title: '先认领自己',
    text: '如果这条是别人发你的，先别生气。那段对话，多半是你上周刚发过的。',
  },
  {
    step: '02',
    title: '照着改一遍',
    text: '同一件事，换一种说法就能一次说完。抄那句好示范，比记住理论管用。',
  },
  {
    step: '03',
    title: '下次直接发',
    text: '遇到同样的场面，把链接甩过去就行。比当面纠正省事，也比憋着不说体面。',
  },
] as const;
