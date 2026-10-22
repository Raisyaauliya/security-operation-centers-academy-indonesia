export type Community = {
	id: string;
	name: string;
	subtitle: string;
	tagline: string;
	description: string;
	features: string[];
	accent: 'cyan' | 'green';
};

export const communities: Community[] = [
	{
		id: 'socid',
		name: 'SOCID',
		subtitle: 'Security Operation Center Indonesia',
		tagline: 'The central national hub for technical threat intelligence',
		description:
			'Blue Team CTFs, malware analysis, active shift simulations, and real-time threat intelligence sharing across the Indonesian SOC community.',
		features: [
			'Blue Team CTF Competitions',
			'Malware Analysis Workshops',
			'Live Shift Simulations',
			'Threat Intelligence Sharing',
		],
		accent: 'cyan',
	},
	{
		id: 'cyberfemme',
		name: 'CyberFemme',
		subtitle: 'Women in Cyber Initiative',
		tagline: 'Empowering female defenders through dedicated mentorship',
		description:
			'The flagship women-in-cyber program — leadership tracks, safe-space tech labs, mentorship, and targeted hiring pipelines for women in cybersecurity.',
		features: [
			'Dedicated Mentorship Program',
			'Leadership Track for Women',
			'Safe-Space Tech Labs',
			'Targeted Hiring Pipelines',
		],
		accent: 'green',
	},
];
