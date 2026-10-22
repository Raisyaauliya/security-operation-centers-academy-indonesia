import {
	ArrowRight,
	Building2,
	CheckCircle2,
	Cpu,
	GraduationCap,
	UsersRound,
	Wrench,
} from 'lucide-react';
import { pillars } from '@/data/engine';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const icons = {
	graduation: GraduationCap,
	building: Building2,
	cpu: Cpu,
} as const;

const accents = {
	cyan: {
		text: 'text-cyber-cyan',
		border: 'border-cyber-cyan/30',
		check: 'text-cyber-cyan',
	},
	green: {
		text: 'text-cyber-green',
		border: 'border-cyber-green/30',
		check: 'text-cyber-green',
	},
	blue: {
		text: 'text-cyber-blue',
		border: 'border-cyber-blue/30',
		check: 'text-cyber-blue',
	},
} as const;

const flow = [
	{ label: 'HIRE', color: 'text-cyber-cyan' },
	{ label: 'TRAIN', color: 'text-cyber-green' },
	{ label: 'DEPLOY', color: 'text-cyber-blue' },
	{ label: 'SCALE', color: 'text-cyber-cyan', icon: true },
];

export function Engine() {
	return (
		<section id="ecosystem" className="relative py-16 sm:py-20">
			<div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 text-center">
						<div className="glass-panel mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1">
							<Wrench className="size-3.5 text-cyber-green" strokeWidth={2} />
							<span className="font-mono text-xs tracking-wider text-cyber-green">
								HIRE-TRAIN-DEPLOY ENGINE
							</span>
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl">
							The Principal <span className="gradient-text-green">Ecosystem</span>
						</h2>
						<p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
							Three pillars connecting talent, enterprise, and technology vendors into a
							self-reinforcing security operations engine.
						</p>
					</div>
				</Reveal>

				<div className="grid gap-5 md:grid-cols-3">
					{pillars.map((pillar, i) => {
						const accent = accents[pillar.accent];
						const Icon = icons[pillar.icon];
						return (
							<Reveal key={pillar.id} delay={i * 90}>
								<article className="glass-panel hover-lift group relative flex h-full flex-col overflow-hidden rounded-2xl p-6">
									<div
										aria-hidden
										className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-bl from-primary/10 to-transparent blur-2xl"
									/>
									<div className="relative z-10 flex flex-1 flex-col">
										<div className="mb-4 flex items-center gap-3">
											<div
												className={cn(
													'flex size-12 items-center justify-center rounded-xl border bg-secondary',
													accent.border,
												)}
											>
												<Icon className={cn('size-6', accent.text)} strokeWidth={1.75} />
											</div>
											<div>
												<h3 className="text-lg font-bold text-foreground">{pillar.title}</h3>
												<p className={cn('font-mono text-xs', accent.text)}>{pillar.subtitle}</p>
											</div>
										</div>
										<p className="mb-4 text-sm leading-relaxed text-muted-foreground">
											{pillar.description}
										</p>
										<ul className="mb-5 flex-1 space-y-2.5">
											{pillar.features.map(feature => (
												<li
													key={feature}
													className="flex items-start gap-2.5 text-sm text-foreground/90"
												>
													<CheckCircle2
														className={cn('mt-0.5 size-4 shrink-0', accent.check)}
														strokeWidth={2}
													/>
													{feature}
												</li>
											))}
										</ul>
										<a
											href={pillar.href}
											className={cn(
												'mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3',
												accent.text,
											)}
										>
											{pillar.cta}
											<ArrowRight className="size-4" strokeWidth={2} />
										</a>
									</div>
								</article>
							</Reveal>
						);
					})}
				</div>

				<div className="mt-10 flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-muted-foreground sm:gap-4">
					{flow.map((step, i) => (
						<span key={step.label} className="flex items-center gap-2 sm:gap-4">
							{i > 0 ? <ArrowRight className="size-4 text-muted-foreground/50" /> : null}
							<span
								className={cn(
									'glass-panel inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5',
									step.color,
								)}
							>
								{step.icon ? <UsersRound className="size-3" /> : null}
								{step.label}
							</span>
						</span>
					))}
				</div>
			</div>
		</section>
	);
}
