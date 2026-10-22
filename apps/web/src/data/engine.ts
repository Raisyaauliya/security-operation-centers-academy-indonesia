export type Pillar = {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	features: string[];
	cta: string;
	href: string;
	accent: 'cyan' | 'green' | 'blue';
	icon: 'graduation' | 'building' | 'cpu';
};

export const pillars: Pillar[] = [
	{
		id: 'talents',
		title: 'For Talents',
		subtitle: 'Hire-Train-Deploy Engine',
		description:
			'Intensive L1/L2 SOC Analyst incubation with zero-tuition Batch 1 scholarship.',
		features: [
			'L1/L2 SOC Analyst incubation program',
			'Zero-tuition Batch 1 scholarship',
			'Hands-on SIEM/XDR sandbox environments',
			'Career placement support with hiring partners',
		],
		cta: 'Apply for Batch 1',
		href: '#batch-registration',
		accent: 'cyan',
		icon: 'graduation',
	},
	{
		id: 'enterprise',
		title: 'For Enterprise & B2B',
		subtitle: 'Pre-Vetted Talent Pipeline',
		description:
			'Access to pre-vetted, shift-ready SOC Analysts trained on real incident response workflows.',
		features: [
			'Pre-vetted, shift-ready SOC Analysts',
			'Trained on real incident response workflows',
			'Shorter onboarding time',
			'Flexible deployment models',
		],
		cta: 'Hire SOC Talent',
		href: '#inquiry-hub',
		accent: 'green',
		icon: 'building',
	},
	{
		id: 'vendors',
		title: 'For Tech Principals & Vendors',
		subtitle: 'NDR / XDR / SIEM / SOAR',
		description:
			'Direct integration of vendor security tools into our live training curriculum.',
		features: [
			'Vendor tools integrated into live training',
			'Exclusive Vendor Product Demo Days',
			'Broadcast to 2 active communities',
			'Early adoption testing & sandbox feedback',
		],
		cta: 'Become a Partner',
		href: '#inquiry-hub',
		accent: 'blue',
		icon: 'cpu',
	},
];

export type CurriculumPhase = {
	phase: number;
	title: string;
	description: string;
	tags: string[];
	accent: 'cyan' | 'blue' | 'green' | 'amber';
	icon: 'network' | 'server' | 'crosshair' | 'radio';
};

export const curriculumPhases: CurriculumPhase[] = [
	{
		phase: 1,
		title: 'Network Forensics & Log Telemetry',
		description:
			'Master packet analysis, log collection pipelines, and network telemetry. Learn to read the wire and understand what normal looks like — so you can spot what does not.',
		tags: [
			'Wireshark & packet analysis',
			'Syslog / Event log pipelines',
			'NetFlow & traffic baselining',
			'Log parsing & normalization',
		],
		accent: 'cyan',
		icon: 'network',
	},
	{
		phase: 2,
		title: 'SIEM Deployment & Threat Detection',
		description:
			'Deploy and operate Wazuh and Elastic SIEM stacks. Build detection rules, create correlation logic, and tune alerts to separate signal from noise.',
		tags: [
			'Wazuh deployment & configuration',
			'Elastic Stack for security',
			'Detection rule writing',
			'Alert tuning & false-positive reduction',
		],
		accent: 'blue',
		icon: 'server',
	},
	{
		phase: 3,
		title: 'Incident Response & Threat Hunting',
		description:
			'Hunt threats that evade automated detection. Run structured IR playbooks, perform memory forensics, and conduct proactive threat hunting operations.',
		tags: [
			'IR playbooks & runbooks',
			'Memory & endpoint forensics',
			'Threat hunting hypotheses',
			'MITRE ATT&CK mapping',
		],
		accent: 'green',
		icon: 'crosshair',
	},
	{
		phase: 4,
		title: 'Live 24/7 SOC War Room & Shift Simulations',
		description:
			'Enter the war room. Rotate through real shift patterns, handle live injected threats, and operate as part of a 24/7 SOC team under pressure.',
		tags: [
			'Shift rotation simulations',
			'Live threat injection drills',
			'Escalation & handoff procedures',
			'Post-incident reporting',
		],
		accent: 'amber',
		icon: 'radio',
	},
];

export type EventTrack = {
	id: string;
	title: string;
	subtitle: string;
	items: { title: string; detail: string; icon: string }[];
	cta: string;
	href: string;
	accent: 'cyan' | 'green';
};

export const eventTracks: EventTrack[] = [
	{
		id: 'online',
		title: 'Online Arena',
		subtitle: 'Virtual war room experiences',
		items: [
			{ title: 'Hands-on Workshops', detail: 'Live SIEM/XDR and malware analysis labs', icon: 'flask' },
			{ title: 'Vendor Tech Demos', detail: 'Principal product demos broadcast to communities', icon: 'monitor' },
			{ title: 'SOC Shift Simulation Streams', detail: 'Watch cadets handle simulated incidents', icon: 'radio' },
			{ title: 'Cyber War Games', detail: 'CTF competitions and team-based defense drills', icon: 'gamepad' },
		],
		cta: 'Register for Next Event',
		href: '#inquiry-hub',
		accent: 'cyan',
	},
	{
		id: 'offline',
		title: 'Offline Hub',
		subtitle: 'Physical community experiences',
		items: [
			{ title: 'Community Meetups', detail: 'Physical gatherings for SOCID members', icon: 'users' },
			{ title: 'CyberFemme Leadership Summits', detail: 'Women-in-cyber leadership events', icon: 'heart' },
			{ title: 'B2B Security Roundtables', detail: 'Enterprise security leadership discussions', icon: 'building' },
		],
		cta: 'Sponsor / Host a Vendor Demo',
		href: '#inquiry-hub',
		accent: 'green',
	},
];
