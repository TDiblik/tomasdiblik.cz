import type { ImageMetadata } from 'astro';

const images = import.meta.glob<ImageMetadata>('/src/assets/**/*.{png,jpg,jpeg,webp,svg}', {
	eager: true,
	import: 'default',
});

export function resolveImage(path: string): ImageMetadata {
	const key = path.startsWith('/src/') ? path : `/src${path}`;
	const image = images[key];
	if (!image) throw new Error(`Image not found: ${path} (expected at ${key})`);
	return image;
}

export function resolveBlogImage(postUrl: string, file: string): ImageMetadata {
	const postDir = postUrl
		.replace(/^\/pages\/blog\//, '')
		.split('/')
		.slice(0, -1)
		.join('/');
	return resolveImage(`/src/assets/blog/${postDir}/${file.replace(/^\.\//, '')}`);
}
