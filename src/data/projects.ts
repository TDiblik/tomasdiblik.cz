export interface ProjectLink {
	text: string;
	href: string;
}

export interface Project {
	name: string;
	id?: string;
	date: string;
	line: string;
	links: ProjectLink[];
}

const github = (repo: string): ProjectLink => ({ text: 'Source code', href: `https://github.com/TDiblik/${repo}` });

export const FEATURED: Project[] = [
	{
		name: 'cpp-web-server',
		id: 'cpp-web-server',
		date: '2026',
		line: 'C++ web server built to handle as many incoming connections as possible, from 9k to 58k req/s (wrk, 8 threads, 1000 connections, macOS/kqueue).',
		links: [
			github('cpp-web-server'),
			{ text: 'Video part 1', href: 'https://youtu.be/dCwylDrxowQ' },
			{ text: 'Video part 2', href: 'https://youtu.be/66FlfZYIitk' },
		],
	},
	{
		name: 'Main Gate ALPR',
		id: 'main-gate-alpr',
		date: '2023',
		line: 'Read license plate numbers using fine-tuned yolov8, OCR (tesseract) and Hikvision camera. The OSS version is more of a POC that works, however for internal usage I rewrote the whole system in Rust using newer models (p50 ~65 ms, p99 < 80 ms per frame).',
		links: [
			github('main-gate-alpr'),
			{ text: 'Video', href: 'https://youtu.be/PJRPVsoAB-A' },
			{ text: 'First version', href: '/pages/blog/pr/14-03-2023/main-gate-alpr-(deprecated)' },
			{ text: 'Hacker News', href: 'https://news.ycombinator.com/item?id=37384327' },
		],
	},
	{
		name: 'Multi-Device Monitor and Control System',
		id: 'factory-monitoring',
		date: '2021',
		line: '21 temperature sensors, 5 humidity sensors and 33 I/O modules across the factory, desktop control + web analysis. Running since 2021.',
		links: [{ text: 'Blog post', href: '/pages/blog/pr/11-03-2023/multi-device-monitor-and-control-system' }],
	},
	{
		name: '7941W RFID card cloner',
		date: '2023',
		line: 'RFID card cloning device.',
		links: [github('7941W-rfid-card-cloner'), { text: 'Video', href: 'https://youtu.be/tPACvUD-hMk' }],
	},
	{
		name: 'Lunch Ordering and Management System',
		date: '2023',
		line: 'Desktop ordering, RFID pickup, a mobile app, web management for HR and automated emails to the supplier.',
		links: [{ text: 'Blog post', href: '/pages/blog/pr/12-03-2023/lunch-ordering-and-management-system' }],
	},
	{
		name: 'Revision Books',
		date: '2023',
		line: 'Rewrite of a legacy app from the 90s, migrating data back to the 1970s from dBase to MSSQL.',
		links: [{ text: 'Blog post', href: '/pages/blog/pr/25-04-2023/revision-books' }],
	},
];

export const OTHER: Project[] = [
	{
		name: 'naive-network-scanner',
		date: '2023',
		line: 'Naive network scanner for Windows and Linux.',
		links: [github('naive-network-scanner'), { text: 'Video', href: 'https://youtu.be/Z-Y10Acvshs' }],
	},
	{
		name: 'KeyXpert',
		date: '2023',
		line: 'Keyboard remapper for Windows: a mapper service that only handles the mapping, plus a Tauri UI for the settings.',
		links: [github('KeyXpert'), { text: 'Video', href: 'https://youtu.be/S7OUbiH-VsE' }],
	},
	{
		name: 'Tank parameterization',
		date: '2023',
		line: 'Web app that helps technicians test out different variables while preparing tanks.',
		links: [{ text: 'Blog post', href: '/pages/blog/pr/13-03-2023/tank-parameterization' }],
	},
	{
		name: 'Robot-Assisted Laser Plate Processing',
		date: '2020',
		line: 'My first real programming project (January 2020), a robotic arm programmed in Python.',
		links: [{ text: 'Blog post', href: '/pages/blog/pr/10-03-2023/robot-assisted-laser-plate-processing' }],
	},
	{ name: 'tomasdiblik.cz', date: '2023', line: 'Personal website.', links: [github('tomasdiblik.cz')] },
	{
		name: 'c-http-server',
		id: 'c-http-server',
		date: '2026',
		line: 'Cross-platform HTTP server in C from scratch (STB-style libraries), serving a real-time macOS system monitor. 4IZ110 semester project at VŠE.',
		links: [github('c-http-server')],
	},
	{
		name: 'IR signal cloner',
		date: '2023',
		line: 'Arduino project able to capture infrared light and repeat it.',
		links: [github('infrared-signal-cloner'), { text: 'Video', href: 'https://youtu.be/hRusnT3PcRQ' }],
	},
	{
		name: 'anyhow-tauri',
		date: '2024',
		line: 'A crate that makes it easy to use the anyhow crate with the tauri framework as a command result.',
		links: [github('anyhow-tauri')],
	},
	{
		name: 'vscode-number-peeker',
		date: '2023',
		line: 'Hover over number in VSCode and see alternative representations.',
		links: [
			{ text: 'Marketplace', href: 'https://marketplace.visualstudio.com/items?itemName=TDiblik.vscode-number-peeker' },
			github('vscode-number-peeker'),
		],
	},
	{
		name: 'IP Atlas',
		date: '2023',
		line: 'Mapping ownership of IP ranges.',
		links: [
			{ text: 'Live version', href: 'https://ip-atlas.tomasdiblik.cz/' },
			github('ip-atlas'),
			{ text: 'Video', href: 'https://youtu.be/cB_K5goXOBM' },
		],
	},
	{
		name: 'gofiber-swagger',
		date: '2025',
		line: 'Automatically generate swagger files from fiber code.',
		links: [github('gofiber-swagger')],
	},
];

export const SMALLER: Project[] = [
	{
		name: 'go-mirror-github-repos',
		date: '2024',
		line: 'A program to automatically mirror GitHub repositories locally.',
		links: [github('go-mirror-github-repos')],
	},
	{
		name: 'contribution-graph-sync',
		date: '2025',
		line: 'Keeps your contribution graph on GitHub in sync with other platforms (GitLab and Azure DevOps at the moment).',
		links: [github('contribution-graph-sync')],
	},
	{ name: 'git-forge', date: '2026', line: 'Forge git commits like a pro.', links: [github('git-forge')] },
	{
		name: 'curl-sh-wipe-my-pc',
		date: '2024',
		line: 'Example on how <code>curl {URL} | sudo sh</code> can wipe your system (using 2 unique ways).',
		links: [github('curl-sh-wipe-my-pc')],
	},
	{
		name: 'hk-donates',
		date: '2023',
		line: 'Built with Michal Vaniš, Daniel Beneš and Jan Skládal on the UHK hackathon 2023.',
		links: [github('hk-donates')],
	},
	{ name: 'Game of Nim TUI', date: '2023', line: 'The game of Nim in the terminal (Rust, ratatui).', links: [github('game-of-nim-rust')] },
	{ name: 'Tower of Hanoi TUI', date: '2023', line: 'The Tower of Hanoi in the terminal (Rust, ratatui).', links: [github('tower_of_hanoi_rust')] },
	{
		name: 'ActivePCsWatchdog',
		date: '2023',
		line: 'Program for checking active PCs on network periodically using DNS names or IP addresses.',
		links: [github('ActivePCsWatchdog')],
	},
	{
		name: 'Strava.cz bruteforce default login',
		date: '2023',
		line: 'Proof of concept tool that could be used to check how many people did not change default strava.cz username and password.',
		links: [
			github('strava_cz_bruteforce_default_login'),
			{ text: 'Blog post', href: '/pages/blog/technical/27-04-2023/bruteforce-default-strava.cz-login' },
		],
	},
	{
		name: 'Space is awesome website',
		date: '2022',
		line: 'HTML, CSS and JS only project, made in 2 days.',
		links: [{ text: 'Live version', href: 'https://space-is-awesome.tomasdiblik.cz' }, github('space-is-awesome-website')],
	},
];
