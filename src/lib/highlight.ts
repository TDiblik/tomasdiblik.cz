import { createHighlighter, type ShikiTransformer } from 'shiki';

const LANGUAGES: Record<string, string> = {
	bash: 'bash',
	zsh: 'bash',
	powershell: 'powershell',
	csharp: 'csharp',
	js: 'javascript',
	javascript: 'javascript',
	json: 'json',
	python: 'python',
	css: 'css',
	html: 'html',
	markup: 'html',
	xml: 'xml',
};

const highlighter = await createHighlighter({
	themes: ['github-light-default', 'github-dark-default'],
	langs: [...new Set(Object.values(LANGUAGES))],
});

const entities: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decodeEntities(html: string): string {
	return html.replace(/&(#x[0-9a-f]+|#\d+|\w+);/gi, (match, entity: string) => {
		if (entity[0] === '#') {
			const isHex = entity[1].toLowerCase() === 'x';
			return String.fromCodePoint(parseInt(entity.slice(isHex ? 2 : 1), isHex ? 16 : 10));
		}
		return entities[entity.toLowerCase()] ?? match;
	});
}

export function highlightCode(html: string): string {
	return html.replace(
		/<pre([^>]*)>\s*<code[^>]*class="[^"]*\blang(?:uage)?-([\w-]+)[^"]*"[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/g,
		(_, preAttrs: string, language: string, content: string) => {
			const preClasses = /class="([^"]*)"/.exec(preAttrs)?.[1] ?? '';
			const keepClasses: ShikiTransformer = {
				pre(node) {
					for (const className of preClasses.split(/\s+/).filter(Boolean)) this.addClassToHast(node, className);
				},
			};
			return highlighter.codeToHtml(decodeEntities(content).replace(/\n$/, ''), {
				lang: LANGUAGES[language.toLowerCase()] ?? 'text',
				themes: { light: 'github-light-default', dark: 'github-dark-default' },
				defaultColor: false,
				transformers: [keepClasses],
			});
		}
	);
}
