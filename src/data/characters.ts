export const characters = {
  domino: {
    id: 'domino',
    name: '多米诺',
    qq: '287887313',
    role: '站点作者',
  },
  cider: {
    id: 'cider',
    name: '西打',
    qq: '2992332948',
    role: '主要互动角色',
  },
  tail: {
    id: 'tail',
    name: '尾巴',
    qq: '2033886359',
    role: '咖啡车店长 · furry 小狗',
  },
  bot327: {
    id: 'bot327',
    name: '群友',
    qq: '3272419793',
    role: 'bot',
  },
} as const;

export type CharacterId = keyof typeof characters;

export function qqAvatarUrl(qq: string, size = 100) {
  return `https://q1.qlogo.cn/g?b=qq&nk=${encodeURIComponent(qq)}&s=${size}`;
}
