/**
 * 分享卡的排版计算层。
 *
 * 这里刻意不碰 DOM、不读全局字体：所有文字宽度都由调用方注入的 measure 给出。
 * 同一套断行与选档逻辑因此能在 Node 里跑测试、在浏览器里跑渲染，两边结果一致。
 * measure 的语义是「纯字形 advance 宽度」，不含字距；字距由 widthOf 单独加。
 */

export type PosterFormat = 'portrait' | 'square';
export type PosterWeight = 400 | 700;
export type MeasureFn = (text: string, size: number, weight: PosterWeight) => number;

export const FONT_STACK =
  '"PingFang SC","Hiragino Sans GB","Microsoft YaHei","Noto Sans SC","Source Han Sans SC",system-ui,sans-serif';

export const POSTER_COLORS = {
  paper: '#f5f4f0',
  ink: '#17171b',
  ink2: '#55555d',
  ink3: '#6e6e78',
  line: '#dad9d6',
  bad: '#b3412c',
  good: '#2c6a4d',
} as const;

/** CJK 墨迹近似占 0.87em，全大写拉丁 0.72em；统一用 alphabetic 基线换算。 */
export const CJK_INK_RATIO = 0.87;
export const CAP_INK_RATIO = 0.72;

/* -------------------------------------------------------------------------- */
/* 断行                                                                        */
/* -------------------------------------------------------------------------- */

const segmenter =
  typeof Intl !== 'undefined' && 'Segmenter' in Intl
    ? new Intl.Segmenter('zh-Hans', { granularity: 'grapheme' })
    : null;

const graphemeCache = new Map<string, string[]>();

export function graphemes(text: string): string[] {
  const hit = graphemeCache.get(text);
  if (hit) return hit;
  const result = segmenter
    ? Array.from(segmenter.segment(text), (entry) => entry.segment)
    : Array.from(text);
  if (graphemeCache.size < 4000) graphemeCache.set(text, result);
  return result;
}

const SPACE = /[\s\u00a0\u3000\u200b]/;
// 拉丁词内可以连写的字符：URL、标识符、代码片段靠这些保持成一个 token。
const WORD_CHAR = /[0-9A-Za-z\u00c0-\u024f\u0370-\u04ff'’._\-/:@#&+=~$%*\\^|]/;
// 行首禁则：这些字符不能出现在行首，遇到就往回粘到前一个单元上。
const LINE_START_FORBIDDEN = new Set(
  graphemes('，。、；：？！）」』】》〉…—%·、～～→,.;:!?)]}％'),
);
// 行尾禁则：开引号、开括号不能留在行尾，遇到就攒着粘到后一个单元上。
const LINE_END_FORBIDDEN = new Set(graphemes('（「『【《〈([{'));
// 长 token 里允许断行的位置（只在整 token 超宽时启用）。
const BREAK_AFTER = new Set(graphemes('/_.-:?&=@#~'));

interface Unit {
  text: string;
  spaceBefore: boolean;
}

function tokenize(paragraph: string): Unit[] {
  const units: Unit[] = [];
  let word = '';
  let pendingPrefix = '';
  let spaceBefore = false;

  const flushWord = () => {
    if (!word) return;
    units.push({ text: pendingPrefix + word, spaceBefore });
    word = '';
    pendingPrefix = '';
    spaceBefore = false;
  };

  for (const ch of graphemes(paragraph)) {
    if (SPACE.test(ch)) {
      flushWord();
      if (units.length) spaceBefore = true;
      continue;
    }
    if (WORD_CHAR.test(ch)) {
      word += ch;
      continue;
    }
    flushWord();
    if (LINE_START_FORBIDDEN.has(ch) && units.length) {
      units[units.length - 1].text += ch;
      continue;
    }
    if (LINE_END_FORBIDDEN.has(ch)) {
      pendingPrefix += ch;
      continue;
    }
    units.push({ text: pendingPrefix + ch, spaceBefore });
    pendingPrefix = '';
    spaceBefore = false;
  }
  flushWord();
  if (pendingPrefix) units.push({ text: pendingPrefix, spaceBefore });
  return units;
}

export interface WrapOptions {
  maxWidth: number;
  size: number;
  weight: PosterWeight;
  measure: MeasureFn;
  letterSpacingEm?: number;
}

export function widthOf(text: string, opts: WrapOptions): number {
  const spacing = opts.letterSpacingEm ?? 0;
  const base = opts.measure(text, opts.size, opts.weight);
  return spacing ? base + graphemes(text).length * opts.size * spacing : base;
}

/** 单个单元比整行还宽时，先按代码里的断点切，再退化成逐字切。 */
function splitUnit(unit: Unit, opts: WrapOptions): Unit[] {
  const parts: string[] = [];
  let chunk = '';
  for (const ch of graphemes(unit.text)) {
    chunk += ch;
    if (BREAK_AFTER.has(ch)) {
      parts.push(chunk);
      chunk = '';
    }
  }
  if (chunk) parts.push(chunk);

  const out: Unit[] = [];
  for (const part of parts) {
    if (widthOf(part, opts) <= opts.maxWidth) {
      out.push({ text: part, spaceBefore: false });
      continue;
    }
    let piece = '';
    for (const ch of graphemes(part)) {
      const next = piece + ch;
      if (piece && widthOf(next, opts) > opts.maxWidth) {
        out.push({ text: piece, spaceBefore: false });
        piece = ch;
      } else {
        piece = next;
      }
    }
    if (piece) out.push({ text: piece, spaceBefore: false });
  }
  if (!out.length) return [{ text: unit.text, spaceBefore: false }];
  out[0].spaceBefore = unit.spaceBefore;
  return out;
}

/**
 * 断行。CJK 逐字、拉丁逐词，行首/行尾禁则通过粘连实现，`\n` 是硬断行。
 * 不做 justify：两端对齐会算出不等字距，跨设备不一致。
 */
export function wrapText(text: string, opts: WrapOptions): string[] {
  const lines: string[] = [];
  for (const paragraph of text.split('\n')) {
    const trimmed = paragraph.trim();
    if (!trimmed) continue;
    const paragraphStart = lines.length;

    const units = tokenize(trimmed).flatMap((unit) =>
      widthOf(unit.text, opts) > opts.maxWidth ? splitUnit(unit, opts) : [unit],
    );

    let line = '';
    for (const unit of units) {
      const candidate = line ? line + (unit.spaceBefore ? ' ' : '') + unit.text : unit.text;
      if (!line || widthOf(candidate, opts) <= opts.maxWidth) {
        line = candidate;
        continue;
      }
      lines.push(line);
      line = unit.text;
    }
    if (line) lines.push(line);

    // 中文孤字：末行只剩「撑。」这种 1–2 个字符时，从上一行借一个字回来。
    const lastIndex = lines.length - 1;
    if (lastIndex - paragraphStart >= 1) {
      const last = graphemes(lines[lastIndex]);
      const isCjkOnly = last.every((char) => /[\u3000-\u9fff\uf900-\ufaff\uff00-\uffef]/.test(char));
      if (isCjkOnly && last.length <= 2) {
        const previous = graphemes(lines[lastIndex - 1]);
        if (previous.length > 3) {
          const moved = previous.pop();
          if (moved) {
            lines[lastIndex - 1] = previous.join('');
            lines[lastIndex] = moved + lines[lastIndex];
          }
        }
      }
    }
  }
  return lines;
}

/** 按 。！？； 整句从尾部丢弃，直到行数够用；绝不按字数切。 */
export function wrapWithEllipsis(text: string, opts: WrapOptions, maxLines: number): string[] {
  const sentences = text.match(/[^。！？；!?;\n]*[。！？；!?;\n]?/gu)?.filter((part) => part.trim()) ?? [text];
  for (let keep = sentences.length; keep >= 1; keep -= 1) {
    const head = sentences.slice(0, keep).join('').trimEnd();
    const candidate = keep < sentences.length ? `${head}…` : head;
    const lines = wrapText(candidate, opts);
    if (lines.length <= maxLines) return lines;
  }
  // 只有一句且仍然超限时，才退化成按行截断并补省略号。
  const lines = wrapText(text, opts).slice(0, maxLines);
  if (lines.length) lines[lines.length - 1] = `${lines[lines.length - 1].replace(/[，、,：:]$/, '')}…`;
  return lines;
}

/* -------------------------------------------------------------------------- */
/* 栅格                                                                        */
/* -------------------------------------------------------------------------- */

export interface PosterMetrics {
  width: number;
  height: number;
  contentLeft: number;
  contentRight: number;
  contentWidth: number;
  logoSize: number;
  logoX: number;
  logoY: number;
  markBaseline: number;
  headerRuleY: number;
  eyebrowDashWidth: number;
  eyebrowDashY: number;
  eyebrowBaseline: number;
  titleInkTop: number;
  ruleBase: number;
  contentLimit: number;
  labelOffset: number;
  labelGap: number;
  quoteX: number;
  quoteWidth: number;
  symbolX: number;
  firstInkOffset: number;
  blockGap: number;
  footerRuleY: number;
  domainBaseline: number;
  sloganBaseline: number;
  qr: { size: number; x: number; y: number };
}

const PORTRAIT_METRICS: PosterMetrics = {
  width: 540,
  height: 720,
  contentLeft: 44,
  contentRight: 496,
  contentWidth: 452,
  logoSize: 26,
  logoX: 44,
  logoY: 40,
  markBaseline: 58,
  headerRuleY: 80,
  eyebrowDashWidth: 24,
  eyebrowDashY: 100,
  eyebrowBaseline: 104,
  titleInkTop: 128,
  ruleBase: 288,
  contentLimit: 568,
  labelOffset: 16,
  labelGap: 26,
  quoteX: 44,
  quoteWidth: 452,
  symbolX: 26,
  firstInkOffset: 16,
  blockGap: 44,
  footerRuleY: 608,
  domainBaseline: 641,
  sloganBaseline: 659,
  qr: { size: 60, x: 436, y: 616 },
};

const SQUARE_METRICS: PosterMetrics = {
  width: 540,
  height: 540,
  contentLeft: 44,
  contentRight: 496,
  contentWidth: 452,
  logoSize: 22,
  logoX: 44,
  logoY: 28,
  markBaseline: 45,
  headerRuleY: 64,
  eyebrowDashWidth: 20,
  eyebrowDashY: 82,
  eyebrowBaseline: 86,
  titleInkTop: 100,
  ruleBase: 168,
  contentLimit: 412,
  labelOffset: 0,
  labelGap: 0,
  quoteX: 44,
  quoteWidth: 452,
  symbolX: 26,
  firstInkOffset: 14,
  blockGap: 24,
  footerRuleY: 452,
  domainBaseline: 474,
  sloganBaseline: 490,
  qr: { size: 52, x: 444, y: 456 },
};

export function posterMetrics(format: PosterFormat): PosterMetrics {
  return format === 'portrait' ? PORTRAIT_METRICS : SQUARE_METRICS;
}

/* -------------------------------------------------------------------------- */
/* 字号档位                                                                    */
/* -------------------------------------------------------------------------- */

interface Tier {
  good: number;
  bad: number;
  lineHeight: number;
  maxGood: number;
  maxBad: number;
}

// P0 允许好句排 2 行：短句要跳高，但不能和 46 的标题打架。
const PORTRAIT_TIERS: Tier[] = [
  { good: 32, bad: 28, lineHeight: 1.45, maxGood: 2, maxBad: 1 },
  { good: 28, bad: 24, lineHeight: 1.5, maxGood: 4, maxBad: 3 },
  { good: 24, bad: 21, lineHeight: 1.56, maxGood: 4, maxBad: 3 },
  { good: 21, bad: 19, lineHeight: 1.62, maxGood: 4, maxBad: 3 },
  { good: 18, bad: 17, lineHeight: 1.68, maxGood: 4, maxBad: 3 },
];

const SQUARE_TIERS: Tier[] = [
  { good: 30, bad: 26, lineHeight: 1.45, maxGood: 2, maxBad: 1 },
  { good: 26, bad: 23, lineHeight: 1.5, maxGood: 4, maxBad: 3 },
  { good: 22, bad: 20, lineHeight: 1.56, maxGood: 4, maxBad: 3 },
  { good: 19, bad: 18, lineHeight: 1.62, maxGood: 4, maxBad: 3 },
];

// 预算已减去章节线到首行墨迹的 16 / 14，剩下才是两块引文的总高。
const PORTRAIT_TIERS_BUDGET = 264;
const SQUARE_TIERS_BUDGET = 230;
const BODY_TRACKING = 0.01;

/* -------------------------------------------------------------------------- */
/* 版面结果                                                                    */
/* -------------------------------------------------------------------------- */

export interface TextBlockLayout {
  tone: 'bad' | 'good';
  label: string | null;
  size: number;
  lineHeight: number;
  lines: string[];
  /** 标签墨迹上沿；无标签行的版式为 null */
  labelTop: number | null;
  labelBaseline: number | null;
  quoteTop: number;
  quoteBaseline: number;
  symbolTop: number;
  height: number;
}

export interface CompareLayout {
  variant: 'labels' | 'margin';
  quoteX: number;
  quoteWidth: number;
  symbolX: number;
  symbolSize: number;
  tier: number;
  truncated: boolean;
  blocks: TextBlockLayout[];
  bottom: number;
}

export interface SummaryLayout {
  size: number;
  lineHeight: number;
  lines: string[];
  firstBaseline: number;
}

export interface StatementLayout {
  english: string;
  englishBaseline: number;
  chinese: string;
  chineseSize: number;
  chineseBaseline: number;
  attribution: string;
  attributionBaseline: number;
  points: TextBlockLayout[];
  bottom: number;
}

export interface PosterPlan {
  format: PosterFormat;
  width: number;
  height: number;
  title: { text: string; size: number; inkTop: number; baseline: number };
  summary: SummaryLayout | null;
  ruleY: number;
  compare: CompareLayout | null;
  statement: StatementLayout | null;
}

export interface PlanInput {
  title: string;
  summary: string;
  mode: 'contrast' | 'statement';
  examples: { tone: 'bad' | 'good'; label: string; text: string }[];
  statement?: {
    english: string;
    chinese: string;
    attribution: string;
    points: { tone: 'bad' | 'good'; label: string; text: string }[];
  };
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

/** 标题只做两档：46/40（3:4）、40/34（1:1）。66 条标题全部单行，不为 2 行写布局。 */
function titleLayout(title: string, format: PosterFormat, measure: MeasureFn, inkTop: number) {
  const base = format === 'portrait' ? 46 : 40;
  const small = format === 'portrait' ? 40 : 34;
  const limit = 444;
  const wide = widthOf(title, { maxWidth: limit, size: base, weight: 700, measure, letterSpacingEm: -0.005 });
  const size = wide > limit ? small : base;
  return { text: title, size, inkTop, baseline: inkTop + CJK_INK_RATIO * size };
}

function summaryLayout(
  summary: string,
  format: PosterFormat,
  measure: MeasureFn,
  firstBaseline: number,
): SummaryLayout | null {
  if (format !== 'portrait' || !summary.trim()) return null;
  const width = posterMetrics(format).contentWidth;

  const regular = wrapText(summary, { maxWidth: width, size: 21, weight: 400, measure });
  if (regular.length <= 2) {
    return { size: 21, lineHeight: 1.5, lines: regular, firstBaseline };
  }
  // 少数条目 3 行：降一档并允许 3 行，章节线下移 12px 给它腾位置。
  const compact = wrapWithEllipsis(summary, { maxWidth: width, size: 19, weight: 400, measure }, 3);
  return { size: 19, lineHeight: 1.55, lines: compact, firstBaseline };
}

function buildBlock(args: {
  tone: 'bad' | 'good';
  label: string | null;
  lines: string[];
  size: number;
  lineHeight: number;
  top: number;
  metrics: PosterMetrics;
  variant: 'labels' | 'margin';
}): TextBlockLayout {
  const { tone, label, lines, size, lineHeight, top, metrics, variant } = args;
  const labelHeight = 10.5 * CJK_INK_RATIO;
  const labelTop = variant === 'labels' ? top : null;
  const labelBaseline = labelTop === null ? null : labelTop + labelHeight;
  const quoteTop = variant === 'labels' ? top + metrics.labelGap : top;
  const quoteBaseline = quoteTop + CJK_INK_RATIO * size;
  // 块高按墨迹算：最后一行只有字身，不把行高里的下沿留白算进段落间距。
  const inkHeight = size + Math.max(0, lines.length - 1) * size * lineHeight;
  const height = (variant === 'labels' ? metrics.labelGap : 0) + inkHeight;
  // 符号与它所在的那一行视觉居中：有标签行时跟标签，没有时跟引文首行。
  const anchorCenter = labelTop === null ? quoteTop + (CJK_INK_RATIO * size) / 2 : labelTop + labelHeight / 2;
  return {
    tone,
    label,
    size,
    lineHeight,
    lines,
    labelTop,
    labelBaseline,
    quoteTop,
    quoteBaseline,
    symbolTop: anchorCenter - 5,
    height,
  };
}

function measureBlocks(
  examples: PlanInput['examples'],
  format: PosterFormat,
  measure: MeasureFn,
  metrics: PosterMetrics,
  variant: 'labels' | 'margin',
) {
  const tiers = format === 'portrait' ? PORTRAIT_TIERS : SQUARE_TIERS;
  const budget = format === 'portrait' ? PORTRAIT_TIERS_BUDGET : SQUARE_TIERS_BUDGET;
  const bad = examples.find((entry) => entry.tone === 'bad');
  const good = examples.find((entry) => entry.tone === 'good');
  const gap = metrics.blockGap;
  const labelHeight = variant === 'labels' ? metrics.labelGap : 0;

  const inkHeight = (lineCount: number, size: number, lineHeight: number) =>
    lineCount ? size + (lineCount - 1) * size * lineHeight : 0;

  const fit = (tier: Tier) => {
    const badLines = bad
      ? wrapText(bad.text, {
          maxWidth: metrics.quoteWidth,
          size: tier.bad,
          weight: 400,
          measure,
          letterSpacingEm: BODY_TRACKING,
        })
      : [];
    const goodLines = good
      ? wrapText(good.text, {
          maxWidth: metrics.quoteWidth,
          size: tier.good,
          weight: 700,
          measure,
          letterSpacingEm: BODY_TRACKING,
        })
      : [];
    const badHeight = badLines.length ? labelHeight + inkHeight(badLines.length, tier.bad, tier.lineHeight) : 0;
    const goodHeight = goodLines.length
      ? labelHeight + inkHeight(goodLines.length, tier.good, tier.lineHeight)
      : 0;
    const total = badHeight + goodHeight + (badHeight && goodHeight ? gap : 0);
    return { badLines, goodLines, badHeight, goodHeight, total };
  };

  for (let index = 0; index < tiers.length; index += 1) {
    const tier = tiers[index];
    const result = fit(tier);
    if (result.badLines.length > tier.maxBad || result.goodLines.length > tier.maxGood) continue;
    if (result.total > budget) continue;
    return { tier, index, ...result, truncated: false };
  }

  // 全部档位都放不下（当前 66 条不会走到这里）：最小档 + 整句丢弃。
  const tier = tiers[tiers.length - 1];
  const badLines = bad
    ? wrapWithEllipsis(
        bad.text,
        { maxWidth: metrics.quoteWidth, size: tier.bad, weight: 400, measure, letterSpacingEm: BODY_TRACKING },
        tier.maxBad,
      )
    : [];
  const goodLines = good
    ? wrapWithEllipsis(
        good.text,
        { maxWidth: metrics.quoteWidth, size: tier.good, weight: 700, measure, letterSpacingEm: BODY_TRACKING },
        tier.maxGood,
      )
    : [];
  return {
    tier,
    index: tiers.length - 1,
    badLines,
    goodLines,
    badHeight: badLines.length ? labelHeight + inkHeight(badLines.length, tier.bad, tier.lineHeight) : 0,
    goodHeight: goodLines.length
      ? labelHeight + inkHeight(goodLines.length, tier.good, tier.lineHeight)
      : 0,
    total: 0,
    truncated: true,
  };
}

export function buildPlan(input: PlanInput, format: PosterFormat, measure: MeasureFn): PosterPlan {
  const metrics = posterMetrics(format);
  const title = titleLayout(input.title, format, measure, metrics.titleInkTop);

  if (input.mode === 'statement' && input.statement) {
    return buildStatementPlan(input, format, measure, title, metrics);
  }

  const summary = summaryLayout(
    input.summary,
    format,
    measure,
    format === 'portrait' ? 224 : 0,
  );
  const variant: 'labels' | 'margin' = format === 'portrait' ? 'labels' : 'margin';
  const picked = measureBlocks(input.examples, format, measure, metrics, variant);

  // 摘要占到 3 行时，章节线整体下移 12px（只有该卡）。
  const base = metrics.ruleBase + (summary && summary.lines.length > 2 ? 12 : 0);
  const total = picked.badHeight + picked.goodHeight
    + (picked.badHeight && picked.goodHeight ? metrics.blockGap : 0);
  const pushLimit = format === 'portrait' ? 64 : 48;
  // 章节线的位置按「章节上方留白 = 页脚上方留白」反解，而不是固定对半分。
  // 摘要短的卡上方本来就更空，按基准线分配会把空白全堆在上面、正文贴到页脚。
  const aboveTop = summary
    ? summary.firstBaseline +
      (summary.lines.length - 1) * summary.size * summary.lineHeight +
      summary.size * 0.13
    : title.baseline + title.size * 0.13;
  const balanced = (metrics.footerRuleY + aboveTop - metrics.firstInkOffset - total) / 2;
  const maxRule = Math.min(
    base + pushLimit,
    metrics.contentLimit - metrics.firstInkOffset - total,
  );
  const ruleY = clamp(balanced, base, Math.max(base, maxRule));

  const blocks: TextBlockLayout[] = [];
  let cursor = ruleY + metrics.firstInkOffset;
  const bad = input.examples.find((entry) => entry.tone === 'bad');
  const good = input.examples.find((entry) => entry.tone === 'good');
  if (bad && picked.badLines.length) {
    blocks.push(
      buildBlock({
        tone: 'bad',
        label: variant === 'labels' ? bad.label : null,
        lines: picked.badLines,
        size: picked.tier.bad,
        lineHeight: picked.tier.lineHeight,
        top: cursor,
        metrics,
        variant,
      }),
    );
    cursor += blocks[blocks.length - 1].height + metrics.blockGap;
  }
  if (good && picked.goodLines.length) {
    blocks.push(
      buildBlock({
        tone: 'good',
        label: variant === 'labels' ? good.label : null,
        lines: picked.goodLines,
        size: picked.tier.good,
        lineHeight: picked.tier.lineHeight,
        top: cursor,
        metrics,
        variant,
      }),
    );
  }

  return {
    format,
    width: metrics.width,
    height: metrics.height,
    title,
    summary,
    ruleY,
    statement: null,
    compare: {
      variant,
      quoteX: metrics.quoteX,
      quoteWidth: metrics.quoteWidth,
      symbolX: metrics.symbolX,
      symbolSize: 10,
      tier: picked.index,
      truncated: picked.truncated,
      blocks,
      bottom: blocks.length
        ? (() => {
            const last = blocks[blocks.length - 1];
            return last.quoteTop + last.size + (last.lines.length - 1) * last.size * last.lineHeight;
          })()
        : ruleY,
    },
  };
}

/**
 * 陈述式（惠顿定律）只有一条：不套自动选档，按规范手工定位一次。
 * 1:1 版式里同样保留「大字陈述 + 三条」，只是压低字号让三条留在页脚线之上。
 */
function buildStatementPlan(
  input: PlanInput,
  format: PosterFormat,
  measure: MeasureFn,
  title: ReturnType<typeof titleLayout>,
  metrics: PosterMetrics,
): PosterPlan {
  const statement = input.statement!;
  const portrait = format === 'portrait';
  const englishSize = 15;
  const englishBaseline = portrait ? 214 + CAP_INK_RATIO * englishSize : 150 + CAP_INK_RATIO * englishSize;
  const chineseSize = portrait ? 40 : 32;
  const chineseInkTop = portrait ? 246 : 176;
  const attributionBaseline = portrait ? 306 : 226;
  const ruleY = portrait ? 330 : 238;
  const pointSize = portrait ? 18 : 17;
  const lineHeight = portrait ? 1.62 : 1.6;
  const gap = portrait ? 20 : 14;
  // 清单是「标签 + 一句」的 checklist，保留标签槽；对照式才用 26 的紧间距。
  const labelSlot = portrait ? 33 : 26;
  const metrics2 = { ...metrics, labelGap: labelSlot };

  const points: TextBlockLayout[] = [];
  let cursor = portrait ? 348 : 252;
  for (const point of statement.points) {
    const lines = wrapText(point.text, {
      maxWidth: metrics2.quoteWidth,
      size: pointSize,
      weight: point.tone === 'good' ? 700 : 400,
      measure,
      letterSpacingEm: BODY_TRACKING,
    });
    const block = buildBlock({
      tone: point.tone,
      label: point.label,
      lines,
      size: pointSize,
      lineHeight,
      top: cursor,
      metrics: metrics2,
      variant: 'labels',
    });
    // 清单按行盒计高；条目之间要有稳定的 20px，不能被行高下沿吃掉。
    block.height = labelSlot + lines.length * pointSize * lineHeight;
    points.push(block);
    cursor += block.height + gap;
  }

  const last = points[points.length - 1];
  return {
    format,
    width: metrics.width,
    height: metrics.height,
    title,
    summary: null,
    ruleY,
    compare: null,
    statement: {
      english: statement.english,
      englishBaseline,
      chinese: statement.chinese,
      chineseSize,
      chineseBaseline: chineseInkTop + CJK_INK_RATIO * chineseSize,
      attribution: statement.attribution,
      attributionBaseline,
      points,
      bottom: last ? last.quoteTop + last.lines.length * pointSize * lineHeight : ruleY,
    },
  };
}
