import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://tomasdiblik.cz',
	build: {
		format: 'file',
	},
	trailingSlash: 'never',
	compressHTML: true,
});
