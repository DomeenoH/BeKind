import type { ChatLine, Law } from '../data/law-types';

const isNarration = (line: ChatLine) => {
  const text = line.text.trim();
  return Boolean(line.rawHtml || /^（.*(?:后|直到|过去|保持|没有人|线下偶遇)/.test(text));
};

const sceneText = (lines: ChatLine[] = []) => lines
  .filter((line) => line.text.trim() && !isNarration(line))
  .map((line) => line.text.trim());

export function getSharePosterContent(law: Law, total: number) {
  const badLines = sceneText(law.bad?.lines);
  const goodLines = sceneText(law.good?.lines);
  const badLineSet = new Set(badLines);
  const goodLineSet = new Set(goodLines);

  return {
    indexLabel: `${String(law.order).padStart(2, '0')} / ${total}`,
    titleClass: law.title.length >= 8 ? 'is-long' : '',
    badExample: badLines.find((line) => !goodLineSet.has(line)) ?? badLines[0],
    goodExample: goodLines.find((line) => !badLineSet.has(line)) ?? goodLines[0],
  };
}
