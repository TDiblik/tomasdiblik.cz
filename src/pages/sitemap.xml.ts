import type { APIRoute } from 'astro';
import { canonicalPath, SITE_URL } from '../lib/site';

// todo: dont forget to update on website changes
const PAGES_LAST_UPDATED = '2026-11-26';
const POSTS_LAST_UPDATED = '2026-11-19';

const pages = Object.keys(import.meta.glob('./**/*.astro'))
	.map((file) => canonicalPath(file.replace(/^\./, '').replace(/\.astro$/, '')))
	.filter((path) => path !== '/404')
	.sort();

export const GET: APIRoute = () => {
	const urls = pages
		.map((path) => {
			const lastmod = path.startsWith('/pages/blog/') ? POSTS_LAST_UPDATED : PAGES_LAST_UPDATED;
			return `<url>\n<loc>${SITE_URL}${encodeURI(path)}</loc>\n<lastmod>${lastmod}</lastmod>\n</url>`;
		})
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
		{ headers: { 'Content-Type': 'application/xml' } }
	);
};
