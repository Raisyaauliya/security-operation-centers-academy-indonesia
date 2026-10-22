import { Clock, Cpu, Gift, Users } from 'lucide-react';
import { metrics } from '@/data/metrics';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const icons = {
	cpu: Cpu,
	clock: Clock,
	users: Users,
	gift: Gift,
} as const;

const accentText = {
	cyan: 'text-cyber-cyan',
	green: 'text-cyber-green',
	blue: 'text-cyber-blue',
} as const;

const accentGlow = {
	cyan: 'rgba(0, 196, 214, 0.18)',
	green: 'rgba(0, 201, 122, 0.18)',
	blue: 'rgba(77, 124, 255, 0.18)',
} as const;

export function Metrics() {
	return (
		<section id="metrics" className="relative py-16 sm:py-20">
			<div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-50" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 text-center">
						<div className="glass-panel mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1">
							<span className="animate-pulse-dot size-1.5 rounded-full bg-cyber-green" />
							<span className="font-mono text-xs tracking-wider text-cyber-green">
								PROGRAM HIGHLIGHTS
							</span>
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl">
							The Ecosystem <span className="gradient-text-cyan">by the Numbers</span>
						</h2>
						<p className="mt-2 text-sm text-muted-foreground">
							What Batch 1 cadets get
						</p>
					</div>
				</Reveal>

				<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
					{metrics.map((metric, i) => {
						const Icon = icons[metric.icon];
						return (
							<Reveal key={metric.label} delay={i * 80}>
								<div className="glass-panel hover-lift group relative overflow-hidden rounded-xl p-6">
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
										style={{
											background: `radial-gradient(circle, ${accentGlow[metric.accent]} 0%, transparent 70%)`,
										}}
									/>
									<div className="relative z-10">
										<div className="mb-4 flex items-center justify-between">
											<Icon
												className={cn('size-6', accentText[metric.accent])}
												strokeWidth={1.75}
											/>
											<p
												className={cn(
													'font-mono text-3xl font-bold sm:text-4xl',
													accentText[metric.accent],
												)}
											>
												{metric.value}
											</p>
										</div>
										<p className="mb-1 text-sm font-semibold text-foreground">{metric.label}</p>
										<p className="text-xs text-muted-foreground">{metric.detail}</p>
									</div>
									<div
										aria-hidden
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
									/>
								</div>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
