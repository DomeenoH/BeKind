import type { ChatLine } from '../data/law-types';

const isCharacterLikeLine = (line: ChatLine) => Boolean(
  line.character || line.avatarUrl || line.name === '小黄鸭'
);

const stripLegacyIndent = (html: string) => html.replace(/^(?:\s|&nbsp;)+/gi, '');

export function getChatLinePresentations(lines: ChatLine[]) {
  return lines.map((line, index) => {
    const previous = lines[index - 1];
    const isContinuation = Boolean(line.character && previous?.character === line.character);
    const isSystem = !isCharacterLikeLine(line);
    const isOutgoing = (line.character ?? (line.rawHtml ? previous?.character : undefined)) === 'cider';

    return {
      line,
      isContinuation,
      isSystem,
      isOutgoing,
      hasAvatar: isCharacterLikeLine(line) && !isContinuation,
      messageHtml: stripLegacyIndent(line.html),
      toneClass: line.tone ? `is-tone-${line.tone}` : undefined,
      // 没有名字也没有时间的系统行不该占一行 meta（时间流逝、读数这类）
      hasMeta: Boolean(line.name || line.time),
    };
  });
}
