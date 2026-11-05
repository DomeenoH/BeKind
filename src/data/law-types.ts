import type { CharacterId } from './characters';

type CategoryId = 'clarity' | 'relation' | 'thinking' | 'systems';

// 场合：这条法则在哪种「话落地的地方」才用得上。
// 和分类是两根轴——分类讲主题，场合讲场景。认知偏差类不标场合，它们不挑地方。
export type SituationId = 'group' | 'dm' | 'mail' | 'public';

export interface Situation {
  id: SituationId;
  label: string;
}

export const situations: Situation[] = [
  { id: 'group', label: '群聊' },
  { id: 'dm', label: '私聊' },
  { id: 'mail', label: '邮件' },
  { id: 'public', label: '公开平台' },
];


export interface Category {
  id: CategoryId;
  eyebrow: string;
  title: string;
  description: string;
}

// 系统行的语义色。样式在 CSS 里，数据只声明「这行是结果 / 旁白 / 时间」。
export type ChatLineTone = 'good' | 'bad' | 'aside' | 'meta';

export interface ChatLine {
  character?: CharacterId;
  avatarUrl?: string;
  name?: string;
  text: string;
  html: string;
  rawHtml?: string;
  time?: string;
  tone?: ChatLineTone;
}

export interface ChatScene {
  titleHtml: string;
  lines: ChatLine[];
  explanationHtml: string;
}

// 少数条目的主标题区可以「演」一遍法则本身（no-hello 把 hello 划掉那种）。
// 和 visual 一样：数据只声明用哪段，实现放在 components/HeroEffect.astro。
export type HeroEffectId =
  | 'greeting-strike'
  | 'reply-all-echo'
  | 'one-message-split'
  | 'three-strikes-count'
  | 'jargon-swap';

interface LawHero {
  titleHtml: string;
  subtitleHtml: string;
  leadHtml: string;
  effect?: HeroEffectId;
}

// 有些条目的内容本身就是一张图，硬写成三段式反而难懂。
// 这里只登记「用哪张图」，图形本体在 components/visuals/ 里单独画。
export type VisualId =
  | 'dunning-kruger-curve'
  | 'bikeshed-bars'
  | 'yak-shaving-chain'
  | 'correlation-panels'
  | 'goodhart-divergence'
  | 'survivorship-funnel'
  | 'false-consensus-dots'
  | 'sunk-cost-bars'
  | 'bystander-curve'
  | 'attribution-grid';

export interface Law {
  slug: string;
  order: number;
  layout: 'comparison' | 'statement';
  category: CategoryId;
  title: string;
  englishTitle: string;
  summary: string;
  hero: LawHero;
  visual?: VisualId;
  bad?: ChatScene;
  good?: ChatScene;
  specialHtml?: string;
  footerHtml: string;
}

export const categories: Category[] = [
  {
    id: 'clarity',
    eyebrow: '01',
    title: '把话说清楚',
    description: '提问、汇报、写标题、挑说话方式。把缺的那块补上，别让人猜。',
  },
  {
    id: 'relation',
    eyebrow: '02',
    title: '别把关系弄僵',
    description: '拒绝、纠错、夸人、被拒绝。话说出口之前，先想想对方怎么接。',
  },
  {
    id: 'thinking',
    eyebrow: '03',
    title: '别急着下结论',
    description: '证据、假设、认知偏差。话说得再笃定，也得拿出东西来。',
  },
  {
    id: 'systems',
    eyebrow: '04',
    title: '看见系统和人',
    description: '群聊、平台、团队，都会把坏习惯放大。看清它怎么运转，才不会被推着走。',
  },
];
