import { defineMiddleware } from 'astro:middleware';

const EXTERNAL_LINK = /<a\b([^>]*?)\bhref="(https?:\/\/(?!(?:www\.)?tomasdiblik\.cz(?:[/"?#]|$))[^"]*)"([^>]*)>/g;

function openExternalLinksInNewTab(html: string): string {
	return html.replace(EXTERNAL_LINK, (tag: string, before: string, href: string, after: string) => {
		const attributes = `${before} ${after}`;
		const target = /\btarget=/.test(attributes) ? '' : ' target="_blank"';
		const rel = /\brel=/.test(attributes) ? '' : ' rel="noopener noreferrer"';
		if (!target && !rel) return tag;
		return `<a${before}href="${href}"${after}${target}${rel}>`;
	});
}

export const onRequest = defineMiddleware(async (_context, next) => {
	const response = await next();
	if (!response.headers.get('content-type')?.includes('text/html')) return response;
	const html = openExternalLinksInNewTab(await response.text());
	return new Response(html, { status: response.status, statusText: response.statusText, headers: response.headers });
});
