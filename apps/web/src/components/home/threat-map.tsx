import { useEffect, useRef, useState } from 'react';
import { Globe2, ShieldAlert } from 'lucide-react';
import { Reveal } from '@/components/reveal';

type Node = {
	id: string;
	x: number;
	y: number;
	label: string;
	severity: 'low' | 'med' | 'high';
};

const BASE_NODES: Node[] = [
	{ id: 'jkt', x: 78, y: 62, label: 'Jakarta', severity: 'med' },
	{ id: 'sg', x: 76, y: 58, label: 'Singapore', severity: 'low' },
	{ id: 'tyo', x: 84, y: 38, label: 'Tokyo', severity: 'med' },
	{ id: 'syd', x: 88, y: 78, label: 'Sydney', severity: 'low' },
	{ id: 'dxb', x: 62, y: 48, label: 'Dubai', severity: 'high' },
	{ id: 'lon', x: 48, y: 32, label: 'London', severity: 'med' },
	{ id: 'nyc', x: 28, y: 40, label: 'New York', severity: 'high' },
	{ id: 'sfo', x: 18, y: 42, label: 'San Francisco', severity: 'med' },
	{ id: 'sao', x: 34, y: 72, label: 'São Paulo', severity: 'low' },
	{ id: 'cpt', x: 54, y: 78, label: 'Cape Town', severity: 'low' },
];

const severityColor = {
	low: 'bg-cyber-green',
	med: 'bg-amber-400',
	high: 'bg-red-500',
};

const feedSeed = [
	'Phishing kit detected — EU cluster',
	'Brute-force attempt blocked — SSH gateway',
	'Suspicious PowerShell execution — endpoint',
	'C2 beacon blocked — APAC edge',
	'Malware hash matched — intel feed',
];

export function ThreatMap() {
	const [active, setActive] = useState(0);
	const [feed, setFeed] = useState(feedSeed);
	const feedIdx = useRef(0);

	useEffect(() => {
		const id = window.setInterval(() => {
			setActive(i => (i + 1) % BASE_NODES.length);
			feedIdx.current = (feedIdx.current + 1) % feedSeed.length;
			const next = feedSeed[feedIdx.current];
			setFeed(prev => [next, ...prev].slice(0, 5));
		}, 2800);
		return () => window.clearInterval(id);
	}, []);

	return (
		<section id="threat-map" className="relative border-t border-border/60 bg-secondary/40 py-20 sm:py-24">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
						<div className="max-w-2xl">
							<p className="font-mono text-xs tracking-[0.2em] text-primary">LIVE THREAT MAP</p>
							<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
								Global signal <span className="gradient-text-cyan">in real time</span>
							</h2>
							<p className="mt-3 text-muted-foreground">
								Simulated multi-region telemetry — the same situational awareness cadets
								practice on during SOC shifts.
							</p>
						</div>
						<div className="glass-panel inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-primary">
							<span className="animate-pulse-dot size-1.5 rounded-full bg-cyber-green" />
							STREAMING · 24/7
						</div>
					</div>
				</Reveal>

				<div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
					<Reveal>
						<div className="glass-panel-strong relative aspect-[16/10] overflow-hidden rounded-2xl p-3 sm:p-4">
							<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(187_92%_52%/0.08),transparent_65%)]" />
							<svg viewBox="0 0 100 70" className="h-full w-full" role="img" aria-label="World threat map">
								<defs>
									<pattern id="map-grid" width="5" height="5" patternUnits="userSpaceOnUse">
										<path d="M 5 0 L 0 0 0 5" fill="none" stroke="hsl(187 92% 52% / 0.12)" strokeWidth="0.15" />
									</pattern>
								</defs>
								<rect width="100" height="70" fill="url(#map-grid)" />
								{/* simplified continents as soft blobs */}
								<path
									d="M12 28 C18 18 28 20 34 28 C38 34 36 42 30 46 C22 50 14 44 12 36 Z"
									fill="hsl(210 40% 22% / 0.9)"
									stroke="hsl(187 92% 52% / 0.25)"
									strokeWidth="0.3"
								/>
								<path
									d="M42 22 C50 16 58 18 62 26 C66 34 60 42 52 44 C46 46 40 38 42 30 Z"
									fill="hsl(210 40% 22% / 0.9)"
									stroke="hsl(187 92% 52% / 0.25)"
									strokeWidth="0.3"
								/>
								<path
									d="M68 30 C76 24 86 28 90 36 C92 44 86 52 78 54 C70 56 64 46 68 38 Z"
									fill="hsl(210 40% 22% / 0.9)"
									stroke="hsl(187 92% 52% / 0.25)"
									strokeWidth="0.3"
								/>
								<path
									d="M72 56 C78 54 86 58 88 64 C86 68 78 70 74 66 Z"
									fill="hsl(210 40% 22% / 0.85)"
									stroke="hsl(187 92% 52% / 0.2)"
									strokeWidth="0.25"
								/>
								{BASE_NODES.map((node, i) => {
									const isActive = i === active;
									return (
										<g key={node.id}>
											{isActive ? (
												<circle
													cx={node.x}
													cy={node.y}
													r="3.2"
													className="animate-threat-pulse"
													fill="none"
													stroke="hsl(187 92% 52% / 0.7)"
													strokeWidth="0.35"
												/>
											) : null}
											<circle
												cx={node.x}
												cy={node.y}
												r={isActive ? 1.4 : 0.9}
												className={severityColor[node.severity]}
												style={{ fill: 'currentColor' }}
											/>
											{isActive ? (
												<text
													x={node.x}
													y={node.y - 3.5}
													textAnchor="middle"
													fill="hsl(195 40% 96%)"
													fontSize="2.2"
													fontFamily="JetBrains Mono, monospace"
												>
													{node.label}
												</text>
											) : null}
										</g>
									);
								})}
								{/* arc from active to Jakarta hub */}
								{(() => {
									const n = BASE_NODES[active];
									const hub = BASE_NODES[0];
									return (
										<path
											d={`M ${n.x} ${n.y} Q ${(n.x + hub.x) / 2} ${Math.min(n.y, hub.y) - 12} ${hub.x} ${hub.y}`}
											fill="none"
											stroke="hsl(187 92% 52% / 0.55)"
											strokeWidth="0.35"
											strokeDasharray="1.2 1"
										/>
									);
								})()}
							</svg>
							<div className="absolute left-3 top-3 flex items-center gap-2 font-mono text-[10px] text-muted-foreground sm:text-xs">
								<Globe2 className="size-3.5 text-primary" />
								HUB · JAKARTA SOC
							</div>
						</div>
					</Reveal>

					<Reveal>
						<div className="glass-panel flex h-full flex-col rounded-2xl p-5">
							<div className="mb-4 flex items-center gap-2">
								<ShieldAlert className="size-4 text-amber-400" />
								<h3 className="font-semibold">Threat feed</h3>
							</div>
							<ul className="flex flex-1 flex-col gap-2.5 font-mono text-xs sm:text-sm">
								{feed.map((line, i) => (
									<li
										key={`${line}-${i}`}
										className="rounded-lg border border-border/70 bg-background/50 px-3 py-2.5 text-muted-foreground"
									>
										<span className="mr-2 text-primary">[{String(i + 1).padStart(2, '0')}]</span>
										{line}
									</li>
								))}
							</ul>
							<p className="mt-4 font-mono text-[10px] tracking-wide text-muted-foreground">
								DEMO TELEMETRY · FOR TRAINING CONTEXT
							</p>
						</div>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
