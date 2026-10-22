import { Headphones, Monitor, Radar, Users } from 'lucide-react';
import { Reveal } from '@/components/reveal';

const SOC_ROOM_URL =
	'https://horizons-cdn.hostinger.com/abd7e425-71f1-4d41-bed4-e5be95616c55/f9e89dba86451511d462955715587561.jpg';

const highlights = [
	{ icon: Monitor, label: 'Multi-screen SIEM wall' },
	{ icon: Headphones, label: '24/7 analyst shifts' },
	{ icon: Radar, label: 'Global threat feeds' },
	{ icon: Users, label: 'Live mentor floor' },
];

export function OpsFloor() {
	return (
		<section id="ops-floor" className="relative border-t border-border/60 py-20 sm:py-24">
			<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 max-w-2xl">
						<p className="font-mono text-xs tracking-[0.2em] text-primary">OPS FLOOR</p>
						<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
							Inside the <span className="gradient-text-cyan">SOC war room</span>
						</h2>
						<p className="mt-3 text-muted-foreground">
							Train where real operations run — panoramic dashboards, coordinated response
							cells, and shift-ready discipline mirrored from enterprise SOCs.
						</p>
					</div>
				</Reveal>

				<Reveal>
					<div className="glass-panel-strong relative overflow-hidden rounded-2xl">
						<img
							src={SOC_ROOM_URL}
							alt="Security operations center floor with analysts monitoring global threat dashboards"
							className="h-auto w-full object-cover"
							loading="lazy"
						/>
						<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
						<div className="absolute inset-x-0 bottom-0 grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
							{highlights.map(item => (
								<div
									key={item.label}
									className="glass-panel flex items-center gap-2.5 rounded-xl px-3 py-2.5"
								>
									<item.icon className="size-4 shrink-0 text-primary" strokeWidth={2} />
									<span className="font-mono text-xs text-foreground sm:text-sm">
										{item.label}
									</span>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
