export type TerminalLine = {
	level: 'INFO' | 'ACTION' | 'STATUS' | 'ALERT' | 'OK';
	message: string;
};

export const bootLines: TerminalLine[] = [
	{ level: 'INFO', message: 'Initializing SOC monitoring engine...' },
	{ level: 'STATUS', message: 'L1 Analysts: ONLINE | L2 Analysts: READY' },
	{ level: 'INFO', message: 'SIEM correlation engine loaded — 1,247 rules active' },
	{ level: 'ALERT', message: 'Threat Detected: Suspicious lateral movement on endpoint SEC-WIN-042' },
	{ level: 'ACTION', message: 'Automated Mitigation Enabled —' },
];

export const logPool: TerminalLine[] = [
	{ level: 'ALERT', message: 'Threat detected — signature match: APT beacon :: 103.147.8.21' },
	{ level: 'ACTION', message: 'Automated mitigation enabled — host isolated from VLAN-7' },
	{ level: 'STATUS', message: 'L1/L2 analysts ready — mean triage time 00:04:12' },
	{ level: 'INFO', message: 'Ingesting firewall telemetry :: 12,408 events/sec' },
	{ level: 'ALERT', message: 'Anomaly flagged — impossible travel :: finance-ops account' },
	{ level: 'ACTION', message: 'Playbook PB-114 executed — credentials rotated, session revoked' },
	{ level: 'OK', message: 'Incident #4821 closed — postmortem pushed to academy lab' },
	{ level: 'INFO', message: 'CyberFemme mentorship cohort synced — 32 mentees active' },
	{ level: 'STATUS', message: 'Batch 1 scholarship pipeline — employer matching armed' },
	{ level: 'ACTION', message: 'CTF range spun up — blue-team scenario: ransomware containment' },
	{ level: 'INFO', message: 'Malware detonation chamber idle — queue: 3 samples' },
	{ level: 'OK', message: 'Principal SLA check passed — uptime 99.99%' },
];

export const levelColors: Record<TerminalLine['level'], string> = {
	INFO: 'text-cyber-cyan',
	ACTION: 'text-cyber-cyan',
	STATUS: 'text-cyber-green',
	ALERT: 'text-amber-500',
	OK: 'text-cyber-green',
};
