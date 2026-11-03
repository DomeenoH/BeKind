import QRCode from 'qrcode';
import {
  buildPlan,
  posterMetrics,
  FONT_STACK,
  POSTER_COLORS,
  graphemes,
  type PosterFormat,
  type TextBlockLayout,
} from './poster-layout';
import type { PosterContent } from './share-poster';

const SCALE = 2;

type Ctx = CanvasRenderingContext2D & { letterSpacing?: string };

function setFont(ctx: Ctx, size: number, weight: 400 | 700) {
  ctx.font = `${weight} ${size}px ${FONT_STACK}`;
}

function createMeasurer(ctx: Ctx) {
  return (text: string, size: number, weight: 400 | 700) => {
    setFont(ctx, size, weight);
    return ctx.measureText(text).width;
  };
}

/** 字距自己算：Canvas 的 letterSpacing 在 Safari / Firefox 上行为不一致，逐字排最稳。 */
function measureTracked(
  ctx: Ctx,
  text: string,
  size: number,
  weight: 400 | 700,
  trackingEm: number,
) {
  if (!trackingEm) {
    setFont(ctx, size, weight);
    return ctx.measureText(text).width;
  }
  setFont(ctx, size, weight);
  const chars = graphemes(text);
  const base = chars.reduce((width, char) => width + ctx.measureText(char).width, 0);
  return base + Math.max(0, chars.length - 1) * size * trackingEm;
}

function drawTracked(
  ctx: Ctx,
  text: string,
  x: number,
  baseline: number,
  size: number,
  weight: 400 | 700,
  color: string,
  trackingEm = 0,
) {
  ctx.fillStyle = color;
  setFont(ctx, size, weight);
  if (!trackingEm) {
    ctx.fillText(text, x, baseline);
    return;
  }
  let cursor = x;
  for (const char of graphemes(text)) {
    ctx.fillText(char, cursor, baseline);
    cursor += ctx.measureText(char).width + size * trackingEm;
  }
}

function drawLines(
  ctx: Ctx,
  lines: string[],
  x: number,
  firstBaseline: number,
  size: number,
  lineHeight: number,
  weight: 400 | 700,
  color: string,
) {
  ctx.fillStyle = color;
  setFont(ctx, size, weight);
  lines.forEach((line, index) => {
    ctx.fillText(line, x, firstBaseline + index * size * lineHeight);
  });
}

function ellipseToWidth(
  ctx: Ctx,
  text: string,
  maxWidth: number,
  size: number,
  weight: 400 | 700,
  trackingEm = 0,
) {
  if (measureTracked(ctx, text, size, weight, trackingEm) <= maxWidth) return text;
  const chars = graphemes(text);
  const ellipsis = '…';
  let result = '';
  for (const char of chars) {
    const next = result + char;
    if (measureTracked(ctx, next + ellipsis, size, weight, trackingEm) > maxWidth) break;
    result = next;
  }
  return `${result}${ellipsis}`;
}

function fillRule(ctx: Ctx, y: number, left = 44, width = 452) {
  ctx.fillStyle = POSTER_COLORS.line;
  ctx.fillRect(left, Math.round(y), width, 1);
}

function roundedRect(ctx: Ctx, x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawLogo(ctx: Ctx, x: number, y: number, size: number) {
  const k = size / 32;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(k, k);

  ctx.strokeStyle = POSTER_COLORS.ink;
  ctx.lineWidth = 2.2;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(5, 10);
  ctx.quadraticCurveTo(5, 5, 10, 5);
  ctx.lineTo(16, 5);
  ctx.quadraticCurveTo(21, 5, 21, 10);
  ctx.lineTo(21, 13);
  ctx.quadraticCurveTo(21, 18, 16, 18);
  ctx.lineTo(11, 18);
  ctx.lineTo(5, 24);
  ctx.closePath();
  ctx.stroke();

  ctx.fillStyle = POSTER_COLORS.good;
  // 不用 ctx.roundRect：Safari 16 之前没有这个方法，整张卡会直接失败。
  roundedRect(ctx, 14, 13, 14, 11, 4);
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(21, 23);
  ctx.lineTo(25, 29);
  ctx.lineTo(26, 22.5);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

function drawSymbol(ctx: Ctx, x: number, top: number, tone: 'bad' | 'good') {
  ctx.save();
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (tone === 'bad') {
    ctx.strokeStyle = POSTER_COLORS.bad;
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x + 10, top + 10);
    ctx.moveTo(x + 10, top);
    ctx.lineTo(x, top + 10);
    ctx.stroke();
  } else {
    ctx.strokeStyle = POSTER_COLORS.good;
    ctx.lineWidth = 1.9;
    ctx.beginPath();
    ctx.moveTo(x, top + 5.2);
    ctx.lineTo(x + 3.7, top + 9);
    ctx.lineTo(x + 10, top + 0.8);
    ctx.stroke();
  }
  ctx.restore();
}

function drawBlock(ctx: Ctx, block: TextBlockLayout, x = 44) {
  drawSymbol(ctx, 26, block.symbolTop, block.tone);
  if (block.label && block.labelBaseline !== null) {
    drawTracked(
      ctx,
      block.label,
      x,
      block.labelBaseline,
      10.5,
      700,
      block.tone === 'bad' ? POSTER_COLORS.ink2 : POSTER_COLORS.ink,
      0.12,
    );
  }
  drawLines(
    ctx,
    block.lines,
    x,
    block.quoteBaseline,
    block.size,
    block.lineHeight,
    block.tone === 'bad' ? 400 : 700,
    block.tone === 'bad' ? POSTER_COLORS.ink2 : POSTER_COLORS.ink,
  );
}

const qrCache = new Map<string, Promise<HTMLCanvasElement>>();

function qrCanvas(url: string, size: number) {
  const key = `${size}:${url}`;
  const hit = qrCache.get(key);
  if (hit) return hit;
  const task = (async () => {
    const canvas = document.createElement('canvas');
    await QRCode.toCanvas(canvas, url, {
      width: size,
      margin: 2,
      errorCorrectionLevel: 'M',
      color: { dark: POSTER_COLORS.ink2, light: POSTER_COLORS.paper },
    });
    return canvas;
  })();
  qrCache.set(key, task);
  return task;
}

async function waitForFonts() {
  if (typeof document === 'undefined' || !('fonts' in document)) return;
  await Promise.race([
    document.fonts.ready,
    new Promise((resolve) => window.setTimeout(resolve, 800)),
  ]);
}

export async function renderPoster(
  content: PosterContent,
  format: PosterFormat,
): Promise<HTMLCanvasElement> {
  await waitForFonts();

  const metrics = posterMetrics(format);
  const canvas = document.createElement('canvas');
  canvas.width = metrics.width * SCALE;
  canvas.height = metrics.height * SCALE;
  const ctx = canvas.getContext('2d') as Ctx | null;
  if (!ctx) throw new Error('Canvas 2D unavailable');

  ctx.scale(SCALE, SCALE);
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  ctx.fillStyle = POSTER_COLORS.paper;
  ctx.fillRect(0, 0, metrics.width, metrics.height);

  const measure = createMeasurer(ctx);
  const plan = buildPlan(content, format, measure);

  // 刊头
  drawLogo(ctx, metrics.logoX, metrics.logoY, metrics.logoSize);
  const wordmarkWidth = measureTracked(ctx, 'BeKind', 15, 700, -0.01);
  drawTracked(ctx, 'BeKind', 78, metrics.markBaseline, 15, 700, POSTER_COLORS.ink, -0.01);
  drawTracked(
    ctx,
    '互联网沟通指北',
    78 + wordmarkWidth + 10,
    metrics.markBaseline,
    10.5,
    400,
    POSTER_COLORS.ink3,
    0.01,
  );

  const totalText = ` / ${content.indexTotal}`;
  const totalWidth = measureTracked(ctx, totalText, 12, 400, 0.05);
  drawTracked(
    ctx,
    totalText,
    metrics.contentRight - totalWidth,
    metrics.markBaseline,
    12,
    400,
    POSTER_COLORS.ink3,
    0.05,
  );
  const currentWidth = measureTracked(ctx, content.indexCurrent, 12, 700, 0.05);
  drawTracked(
    ctx,
    content.indexCurrent,
    metrics.contentRight - totalWidth - currentWidth,
    metrics.markBaseline,
    12,
    700,
    POSTER_COLORS.ink,
    0.05,
  );

  fillRule(ctx, metrics.headerRuleY);
  ctx.fillStyle = POSTER_COLORS.ink3;
  ctx.fillRect(44, metrics.eyebrowDashY, metrics.eyebrowDashWidth, 1);

  const categoryText = ellipseToWidth(
    ctx,
    content.categoryLabel,
    Math.min(200, metrics.contentWidth * 0.42),
    10.5,
    400,
    0.02,
  );
  const categoryWidth = measureTracked(ctx, categoryText, 10.5, 400, 0.02);
  drawTracked(
    ctx,
    categoryText,
    metrics.contentRight - categoryWidth,
    metrics.eyebrowBaseline,
    10.5,
    400,
    POSTER_COLORS.ink3,
    0.02,
  );

  const english = content.englishTitle.toLocaleUpperCase('en-US');
  const englishWidth = measureTracked(ctx, english, 11, 700, 0.15);
  const englishMax = metrics.contentRight - 78 - categoryWidth - 20;
  drawTracked(
    ctx,
    ellipseToWidth(ctx, english, englishMax, 11, 700, 0.15),
    78,
    metrics.eyebrowBaseline,
    11,
    700,
    POSTER_COLORS.ink3,
    0.15,
  );

  // 标题 / 摘要
  drawTracked(
    ctx,
    plan.title.text,
    metrics.contentLeft,
    plan.title.baseline,
    plan.title.size,
    700,
    POSTER_COLORS.ink,
    -0.005,
  );

  if (plan.summary) {
    drawLines(
      ctx,
      plan.summary.lines,
      metrics.contentLeft,
      plan.summary.firstBaseline,
      plan.summary.size,
      plan.summary.lineHeight,
      400,
      POSTER_COLORS.ink2,
    );
  }

  // 章节线
  fillRule(ctx, plan.ruleY);

  if (plan.compare) {
    plan.compare.blocks.forEach((block) => drawBlock(ctx, block, plan.compare!.quoteX));
  }

  if (plan.statement) {
    const statement = plan.statement;
    if (statement.english) {
      drawTracked(
        ctx,
        statement.english,
        metrics.contentLeft,
        statement.englishBaseline,
        15,
        700,
        POSTER_COLORS.ink3,
        0.01,
      );
    }
    drawTracked(
      ctx,
      statement.chinese,
      metrics.contentLeft,
      statement.chineseBaseline,
      statement.chineseSize,
      700,
      POSTER_COLORS.ink,
      -0.008,
    );
    drawTracked(
      ctx,
      `— ${statement.attribution}`,
      metrics.contentLeft,
      statement.attributionBaseline,
      11,
      400,
      POSTER_COLORS.ink3,
    );
    statement.points.forEach((block) => drawBlock(ctx, block, metrics.contentLeft));
  }

  // 页脚
  fillRule(ctx, metrics.footerRuleY, 44, 452);
  drawTracked(ctx, content.host, 44, metrics.domainBaseline, 12, 700, POSTER_COLORS.ink);
  const hostWidth = measureTracked(ctx, content.host, 12, 700, 0);
  drawTracked(
    ctx,
    content.author,
    44 + hostWidth + 8,
    metrics.domainBaseline,
    11,
    400,
    POSTER_COLORS.ink3,
  );
  drawTracked(
    ctx,
    content.footerLine,
    44,
    metrics.sloganBaseline,
    10.5,
    400,
    POSTER_COLORS.ink3,
    0.01,
  );

  const qr = await qrCanvas(content.url, metrics.qr.size * SCALE);
  ctx.save();
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(qr, metrics.qr.x * SCALE, metrics.qr.y * SCALE);
  ctx.restore();

  return canvas;
}

export async function renderPosterBlob(content: PosterContent, format: PosterFormat) {
  const canvas = await renderPoster(content, format);
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('PNG encoding failed'));
    }, 'image/png');
  });
}
