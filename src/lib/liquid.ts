export function truncate(input: string, length: number): string {
	return input.length > length ? `${input.slice(0, length - 3)}...` : input;
}

export function squish(input: string): string {
	return input.replace(/\s+/g, ' ').trim();
}
