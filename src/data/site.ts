import { orderedLaws } from './laws';

const total = orderedLaws.length;

export const site = {
  name: 'BeKind',
  title: '互联网沟通指北',
  tagline: '别当混蛋，做个好网友。',
  description: `BeKind 收录 ${total} 条网上沟通法则。每条配一段群聊演示：坏例子 vs 好回复，看完就能用。`,
  intro: `${total} 条网上沟通法则。每条配一段群聊演示：坏例子 vs 好回复。两分钟一条，看完就能用。`,
  eyebrow: `${total} 条法则，附翻车现场`,
  footerLine: '一些把天聊明白的说法，拿去就能用。',
  url: 'https://bk.0x0.cat',
  repo: 'https://github.com/DomeenoH/BeKind',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  year: 2026,
  searchPlaceholder: '搜索法则、关键词，或直接输条号',
  searchEmptyTitle: '没有这条法则',
  searchEmptyHint: '换个词试试，比如在吗、提问、群聊、已读不回，或者直接输 07 这样的条号。',
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
