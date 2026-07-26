import type { CharacterId } from './characters';

export type CategoryId = 'communication' | 'thinking' | 'systems';

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

export interface LawHero {
  titleHtml: string;
  subtitleHtml: string;
  leadHtml: string;
}

export interface Law {
  slug: string;
  order: number;
  layout: 'comparison' | 'statement';
  category: CategoryId;
  icon: string;
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
    description: '提问、汇报、求助和异步沟通，少让别人猜你脑子里缺了哪一块。',
  },
  {
    id: 'thinking',
    eyebrow: '02',
    title: '别急着下结论',
    description: '处理证据、假设和认知偏差。自信的语气不能替你完成论证。',
  },
  {
    id: 'systems',
    eyebrow: '03',
    title: '看见系统和人',
    description: '群聊、平台和团队都会放大坏习惯。知道机制，才不会被它牵着走。',
  },
];
