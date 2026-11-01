import type { APIRoute } from 'astro';
import { orderedLaws } from '../data/laws';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://bk.0x0.cat');

  const entries = [
    { loc: new URL('/', base).href, priority: '1.0' },
    ...orderedLaws.map((law) => ({
      loc: new URL(`/${law.slug}/`, base).href,
      priority: law.order <= 3 ? '0.9' : '0.7',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>monthly</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
