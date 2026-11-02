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
      messageHtml: line.character ? stripLegacyIndent(line.html) : line.html,
      lineStyle: isSystem || line.rawHtml ? line.style : undefined,
    };
  });
}
