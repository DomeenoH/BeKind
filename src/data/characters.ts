export const characters = {
  domino: {
    name: '多米诺',
    qq: '287887313',
  },
  cider: {
    name: '西打',
    qq: '2992332948',
  },
  tail: {
    name: '尾巴',
    qq: '2033886359',
  },
  bot327: {
    name: '群友',
    qq: '3272419793',
  },
} as const;

export type CharacterId = keyof typeof characters;

export function qqAvatarUrl(qq: string, size = 100) {
  return `https://q1.qlogo.cn/g?b=qq&nk=${encodeURIComponent(qq)}&s=${size}`;
}
