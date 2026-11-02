import type { ChatLine, Law } from '../data/law-types';

const isNarration = (line: ChatLine) => {
  const text = line.text.trim();
  return Boolean(line.rawHtml || /^（.*(?:后|直到|过去|保持|没有人|线下偶遇)/.test(text));
};

const sceneText = (lines: ChatLine[] = []) => lines
  .filter((line) => line.text.trim() && !isNarration(line))
  .map((line) => line.text.trim());

// 卡片由 html2canvas 截图，它不支持 -webkit-line-clamp：
// 用 CSS 裁会裁出"每行只剩上半截"，所以在这里按字数截断。
const clampText = (text: string | undefined, limit = 84) => {
  if (!text) return text;
  return text.length <= limit ? text : `${text.slice(0, limit - 1)}…`;
};

export function getSharePosterContent(law: Law, total: number) {
  const badLines = sceneText(law.bad?.lines);
  const goodLines = sceneText(law.good?.lines);
  const badLineSet = new Set(badLines);
  const goodLineSet = new Set(goodLines);

  const indexCurrent = String(law.order).padStart(2, '0');
  const indexTotal = String(total).padStart(2, '0');

  return {
    indexLabel: `${indexCurrent} / ${indexTotal}`,
    indexCurrent,
    indexTotal,
    titleClass: law.title.length >= 8 ? 'is-long' : '',
    badExample: clampText(badLines.find((line) => !goodLineSet.has(line)) ?? badLines[0]),
    goodExample: clampText(goodLines.find((line) => !badLineSet.has(line)) ?? goodLines[0]),
  };
}
