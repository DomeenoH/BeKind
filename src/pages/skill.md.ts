import type { APIRoute } from 'astro';
import { buildSkillIndex } from '../lib/law-markdown';

// 给 AI 用的入口：规则 + 79 条索引，正文在同目录的 laws.md
export const GET: APIRoute = () =>
  new Response(buildSkillIndex(), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
