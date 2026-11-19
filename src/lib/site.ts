export const SITE_URL = 'https://tomasdiblik.cz';

export function canonicalPath(pathname: string): string {
	const path = pathname.replace(/\.html$/, '').replace(/\/index$/, '/');
	return path === '' ? '/' : path;
}

export function canonicalUrl(pathname: string): string {
	return SITE_URL + canonicalPath(pathname);
}
