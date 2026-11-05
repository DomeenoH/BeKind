import type { APIRoute } from 'astro';
import { buildLawsMarkdown } from '../lib/law-markdown';

// 全文导出：场景对话、解释、代价、例外
export const GET: APIRoute = () =>
  new Response(buildLawsMarkdown(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
