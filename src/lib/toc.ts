interface TocHeading {
	level: number;
	id: string;
	text: string;
}

const stripTags = (html: string) => html.replace(/<[^>]*>/g, '');
const escapeHtml = (text: string) =>
	text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const decodeBasicEntities = (text: string) =>
	text
		.replace(/&#39;/g, "'")
		.replace(/&quot;/g, '"')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&amp;/g, '&');

export function injectAnchors(html: string): { html: string; headings: TocHeading[] } {
	const headings: TocHeading[] = [];
	const usedIds = new Map<string, number>();

	const result = html.replace(/<h([1-6])([^>]*)>([\s\S]*?)<\/h\1>/g, (_, level: string, attrs: string, inner: string) => {
		const text = decodeBasicEntities(stripTags(inner)).trim();
		let id = /\bid="([^"]*)"/.exec(attrs)?.[1];
		if (id === undefined) {
			id = text
				.toLowerCase()
				.replace(/[^\p{L}\p{N}_\- ]/gu, '')
				.replaceAll(' ', '-');
			const count = usedIds.get(id) ?? 0;
			usedIds.set(id, count + 1);
			if (count > 0) id += `-${count}`;
			attrs += ` id="${id}"`;
		}
		headings.push({ level: Number(level), id, text });
		return `<h${level}${attrs}><a href="#${id}">${inner}</a></h${level}>`;
	});

	return { html: result, headings };
}

export function buildToc(headings: TocHeading[]): string {
	let html = '<ol id="toc" class="section-nav">\n';
	const levels: number[] = [];
	headings.forEach((heading, i) => {
		while (levels.length > 0 && heading.level < levels[levels.length - 1]) {
			html += '</ol>\n</li>\n';
			levels.pop();
		}
		if (levels.length === 0 || heading.level > levels[levels.length - 1]) levels.push(heading.level);

		html += `<li class="toc-entry toc-h${heading.level}"><a href="#${heading.id}">${escapeHtml(heading.text)}</a>`;
		const next = headings[i + 1];
		if (next && next.level > heading.level) {
			html += '\n<ol>\n';
		} else {
			html += '</li>\n';
		}
	});
	for (let i = 1; i < levels.length; i++) html += '</ol>\n</li>\n';
	return `${html}</ol>`;
}
