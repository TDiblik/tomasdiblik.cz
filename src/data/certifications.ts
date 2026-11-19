export interface Certification {
	name: string;
	date: string;
	href: string;
	image: string;
}

export interface CertificationGroup {
	name: string;
	items: Certification[];
}

const badge = (file: string) => `/assets/img/${file}`;
const credly = (id: string) => `https://www.credly.com/badges/${id}`;

export const CERTIFICATION_GROUPS: CertificationGroup[] = [
	{
		name: 'Fundamentals / Essentials',
		items: [
			{
				name: 'Microsoft 365 Fundamentals',
				date: '2021-09',
				href: credly('849e5db3-eea8-41c4-ac33-76cbd4b8d194'),
				image: badge('certification-badge-microsoft-ms-900.webp'),
			},
			{
				name: 'Azure Fundamentals',
				date: '2021-04',
				href: credly('0eb8cb18-fba4-4b3a-9bc4-562c3bd6e39d'),
				image: badge('certification-badge-microsoft-az-900.webp'),
			},
			{
				name: 'Security, Compliance, and Identity Fundamentals',
				date: '2021-09',
				href: credly('db61924e-4fa2-48ee-a227-21d55530d26e'),
				image: badge('certification-badge-microsoft-sc-900.webp'),
			},
			{
				name: 'Azure Data Fundamentals',
				date: '2021-05',
				href: credly('c821da98-a4e8-4974-94ce-a9d418265235'),
				image: badge('certification-badge-microsoft-dp-900.webp'),
			},
			{
				name: 'Azure AI Fundamentals',
				date: '2021-04',
				href: credly('038a3b04-6579-40fa-8e4f-3f8060e797d6'),
				image: badge('certification-badge-microsoft-ai-900.webp'),
			},
			{
				name: 'CCNA: Switching, Routing, and Wireless Essentials',
				date: '2024-03',
				href: credly('290a63de-ad38-4b2a-8ba4-5a3138fd58eb'),
				image: badge('certification-badge-cisco-ccna-switching-routing-wireless-essentials.webp'),
			},
			{
				name: 'CCNA: Introduction to Networks',
				date: '2023-06',
				href: credly('8fac96e0-ab08-438a-97d3-c359edacf074'),
				image: badge('certification-badge-cisco-ccna-introduction-to-networks.webp'),
			},
			{
				name: 'Cisco Networking Essentials',
				date: '2021-08',
				href: credly('a7f4d44c-ddda-4b4f-ba75-fb654c16806a'),
				image: badge('certification-badge-cisco-networking-essentials.webp'),
			},
			{
				name: 'Cisco IT Essentials',
				date: '2022-06',
				href: credly('795c91ec-2d1f-40a5-8c93-eead53112c81'),
				image: badge('certification-badge-cisco-it-essentials.webp'),
			},
			{
				name: 'Cisco Cybersecurity Essentials',
				date: '2021-11',
				href: credly('dcc1b603-187f-4945-970d-c33cf1ab5677'),
				image: badge('certification-badge-cisco-cybersecurity-essentials.webp'),
			},
			{
				name: 'Cisco Introduction to Cybersecurity',
				date: '2021-08',
				href: credly('336fbff6-7f1e-40f8-999f-ee6ad85256f6'),
				image: badge('certification-badge-cisco-introdution-to-cybersecurity.webp'),
			},
		],
	},
	{
		name: 'Not programming related',
		items: [
			{
				name: 'Cambridge C1 Advanced (grade B)',
				date: '2023-11',
				href: '/assets/img/certificate-c1-cae-censored.pdf',
				image: badge('certificate-c1-cae-censored.webp'),
			},
			{
				name: 'Microsoft Student Trainee Center',
				date: '2022',
				href: '/pages/blog/pr/30-04-2023/completing-microsoft-stc',
				image: badge('certificate-stc-successfull-completion-preview-heavily-compressed.webp'),
			},
			{
				name: 'Office Specialist: Access Expert',
				date: '2023-06',
				href: credly('90a5db8b-72ab-442b-ae89-0fff7a3ad4d8'),
				image: badge('certification-badge-microsoft-mos-expert-access.webp'),
			},
			{
				name: 'Office Specialist: Associate',
				date: '2023-07',
				href: credly('b95233e4-f16b-49db-b0bb-d7623b4b6595'),
				image: badge('certification-badge-microsoft-mos-associate.webp'),
			},
			{
				name: 'Office Specialist: Excel',
				date: '2023-07',
				href: credly('6f60850a-729f-4b4b-ae92-4f21161b1641'),
				image: badge('certification-badge-microsoft-mos-excel.webp'),
			},
			{
				name: 'Office Specialist: PowerPoint',
				date: '2023-06',
				href: credly('e7fdf4ab-98f3-4ac9-88f9-2e119774603c'),
				image: badge('certification-badge-microsoft-mos-powerpoint.webp'),
			},
			{
				name: 'Office Specialist: Word',
				date: '2021-06',
				href: credly('c00eb373-ae8c-4882-a8d5-5f8b5567bdcf'),
				image: badge('certification-badge-microsoft-mos-word.webp'),
			},
		],
	},
];
