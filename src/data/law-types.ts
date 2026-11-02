import type { CharacterId } from './characters';

type CategoryId = 'communication' | 'thinking' | 'systems';

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

interface LawHero {
  titleHtml: string;
  subtitleHtml: string;
  leadHtml: string;
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
  | 'bystander-curve';

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
    id: 'communication',
    eyebrow: '01',
    title: '把话说清楚',
    description: '提问、汇报、求助、异步沟通：把缺的那块补齐，别让人猜。',
  },
  {
    id: 'thinking',
    eyebrow: '02',
    title: '别急着下结论',
    description: '证据、假设、认知偏差。语气再自信，也不能替你完成论证。',
  },
  {
    id: 'systems',
    eyebrow: '03',
    title: '看见系统和人',
    description: '群聊、平台、团队都会放大坏习惯。看见机制，才不至于被推着走。',
  },
];
