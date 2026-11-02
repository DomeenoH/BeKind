import type { CharacterId } from './characters';

type CategoryId = 'communication' | 'thinking' | 'systems';

export interface Category {
  id: CategoryId;
  eyebrow: string;
  title: string;
  description: string;
}

export interface ChatLine {
  character?: CharacterId;
  avatarUrl?: string;
  name?: string;
  text: string;
  html: string;
  rawHtml?: string;
  time?: string;
  style?: string;
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

export interface Law {
  slug: string;
  order: number;
  layout: 'comparison' | 'statement';
  category: CategoryId;
  title: string;
  englishTitle: string;
  summary: string;
  hero: LawHero;
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
