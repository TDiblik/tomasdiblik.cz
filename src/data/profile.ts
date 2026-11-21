export interface Period {
	from: string;
	to: string;
	durationOverride?: string;
	label?: string;
}

export interface Job {
	role: string;
	company: string;
	companyHref: string;
	employment: string;
	location: string;
	period: Period;
	summary: string;
	description: string;
}

export const CONTACT = {
	email: 'dibla.tomas@post.cz',
	github: 'https://github.com/TDiblik',
	linkedin: 'https://www.linkedin.com/in/tdiblik/',
	youtube: 'https://www.youtube.com/@tdiblikdev',
};

export const TAGLINE =
	"Developer at MONETA Money Bank, working on C++ and Linux performance on the side. I've been shipping production software since 2020.";

export const JOBS: Job[] = [
	{
		role: 'Developer',
		company: 'MONETA Money Bank',
		companyHref: 'https://www.moneta.cz/',
		employment: 'Part time while studying, mostly in office',
		location: 'Prague',
		period: { from: '2024-07', to: 'present' },
		summary: 'Mortgage Loans team. Mostly frontend in TypeScript and React, plus backend changes in Java.',
		description: `I work in the Mortgage Loans team, both on <a href="https://hypoteka.moneta.cz/" rel="nofollow noreferrer noopener">applications used by the public</a> and on internal tools for bankers (e.g. for managing those mortgages). Most of the time I'm on the frontend in TypeScript and React, but I also make changes on the backend in Java when it's needed.`,
	},
	{
		role: 'Software Developer',
		company: 'Východočeské plynárenské strojírny, a.s.',
		companyHref: 'https://vpsr.cz',
		employment: 'Contractor, hybrid',
		location: 'Rosice',
		period: { from: '2020-07', to: '2024-07' },
		summary: 'Basically a universal programmer. Made most of the custom software the company runs on (15+ apps).',
		description: `I was basically a universal programmer there, from microcontrollers, to desktop apps, to web apps, plus managing the servers they run on (cloud and on-premises). Over 4 years, I made 15+ apps that the company still runs on (a few of them are on the <a href="/pages/projects">projects page</a>). Mostly C#, Rust/Python when needed. Pick the right tool for the job.`,
	},
	{
		role: 'Software Developer Intern',
		company: 'PwC Slovakia',
		companyHref: 'https://www.pwc.com/sk/en.html',
		employment: 'Internship, in person, full time',
		location: 'Bratislava',
		period: { from: '2022-06', to: '2022-07' },
		summary: 'Whole projects in small teams: React, Express + MongoDB, Django, Docker, Azure.',
		description: `I was an intern in the Risk Assurance team, where I helped plan out and build the technical/analytical foundation which the project stood upon, in a small team, on both the frontend and the backend.`,
	},
];

export interface Entry {
	title: string;
	place: string;
	placeHref?: string;
	detail?: string;
	period: Period;
	description: string;
}

export const EDUCATION: Entry[] = [
	{
		title: 'Bc., Applied Informatics',
		place: 'Prague University of Economics and Business (VŠE)',
		placeHref: 'https://www.vse.cz/',
		detail: 'Faculty of Informatics and Statistics (FIS)',
		period: { from: '2025-09', to: '2028-06', label: '09/2025 - expected 06/2028' },
		description: `Bachelor's degree in Applied Informatics.`,
	},
	{
		title: 'Programming',
		place: 'DELTA - Střední škola informatiky a ekonomie',
		placeHref: 'https://www.delta-skola.cz/',
		detail: 'Pardubice',
		period: { from: '2020-09', to: '2024-06', label: '09/2020 - 06/2024' },
		description: `High school focused on programming. During my studies, I also went through <a href="/pages/blog/pr/30-04-2023/completing-microsoft-stc">Microsoft Student Trainee Center</a> and passed <a href="/assets/img/certificate-c1-cae-censored.pdf">Cambridge C1 Advanced</a>.`,
	},
];

export const ALSO: Entry[] = [
	{
		title: 'Teacher of a programming course',
		place: 'DELTA, Pardubice',
		period: { from: '2022-11', to: '2023-05', label: '11/2022 - 05/2023' },
		description: `I led my high school's intermediate/advanced programming course for middle schoolers. We went from algorithms and a Discord bot in Python, through web development, APIs and managing real servers, all the way to Arduinos. It was really hard, but I learned a lot about teaching. More in the <a href="/pages/blog/personal/25-06-2023/my-experience-teaching-middle-schoolers-programming">blog post</a>.`,
	},
	{
		title: 'RouteMapper - 1st place',
		place: 'UHK Hackathon 2022, Hradec Králové',
		period: { from: '2022-10', to: '2022-10', label: '10/2022' },
		description: `A prototype of an app for rating the quality of roads, built in about 5 hours with Michal Vaniš, Daniel Beneš and Jan Skládal. More in the <a href="/pages/blog/pr/23-04-2023/winning-uhk-hackathon-2022">blog post</a> (<a href="https://github.com/TDiblik/RouteMapper">source code</a>).`,
	},
	{
		title: 'Medifinder - 2nd place',
		place: 'Funovation Hackathon 22, Pardubice',
		period: { from: '2022-09', to: '2022-09', label: '09/2022' },
		description: `My first hackathon, a mobile app that finds the right doctor for your symptoms, built in 24 hours. More in the <a href="/pages/blog/pr/20-04-2023/attending-funovation-hackathon-22">blog post</a> (<a href="https://github.com/TDiblik/Medifinder">source code</a>).`,
	},
];

export const SKILLS = 'C++, Linux, Rust, C#, Java, TypeScript, React, Python, Go, SQL (MSSQL, PostgreSQL), Docker, git';

function month_year(value: string) {
	const [year, month] = value.split('-');
	return `${month}/${year}`;
}

function duration(from: string, to: string) {
	const [fy, fm] = from.split('-').map(Number);
	const [ty, tm] = to.split('-').map(Number);
	const months = (ty - fy) * 12 + (tm - fm) + 1;
	const years = Math.floor(months / 12);
	const rest = months % 12;
	const parts: string[] = [];
	if (years > 0) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
	if (rest > 0) parts.push(`${rest} ${rest === 1 ? 'month' : 'months'}`);
	return parts.join(' ');
}

export function formatPeriod(period: Period): { dates: string; duration?: string; datetime: string } {
	if (period.label) return { dates: period.label, duration: period.durationOverride, datetime: period.from };
	if (period.durationOverride) return { dates: period.from.slice(0, 4), duration: period.durationOverride, datetime: period.from };
	return {
		dates: `${month_year(period.from)} - ${period.to === 'present' ? 'present' : month_year(period.to)}`,
		duration: period.to === 'present' ? undefined : duration(period.from, period.to),
		datetime: period.from,
	};
}
