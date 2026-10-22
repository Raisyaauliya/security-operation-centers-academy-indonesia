export type Metric = {
	value: string;
	label: string;
	detail: string;
	icon: 'cpu' | 'clock' | 'users' | 'gift';
	accent: 'cyan' | 'green' | 'blue';
};

export const metrics: Metric[] = [
	{
		value: '4 Phases',
		label: 'Curriculum Phases',
		detail: 'From network fundamentals to live war room shifts',
		icon: 'cpu',
		accent: 'cyan',
	},
	{
		value: '12 Weeks',
		label: 'Program Duration',
		detail: 'Full program duration',
		icon: 'clock',
		accent: 'green',
	},
	{
		value: '30 Seats',
		label: 'Batch 1 Quota',
		detail: 'Limited Batch 1 quota',
		icon: 'users',
		accent: 'blue',
	},
	{
		value: '0% Tuition',
		label: 'Batch 1 Scholarship',
		detail: 'Batch 1 is fully subsidized',
		icon: 'gift',
		accent: 'green',
	},
];
