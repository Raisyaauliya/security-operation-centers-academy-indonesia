import {
	ArrowRight,
	Heart,
	Microscope,
	Shield,
	Sparkles,
	Terminal,
	Trophy,
	Users,
} from 'lucide-react';
import { communities } from '@/data/communities';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const featureIcons = {
	socid: [Trophy, Microscope, Terminal, Users],
	cyberfemme: [Sparkles, Trophy, Terminal, Users],
} as const;

const headerIcons = {
	socid: Shield,
	cyberfemme: Heart,
} as const;

const accents = {
	cyan: {
		text: 'text-cyber-cyan',
		border: 'border-cyber-cyan/30 hover:border-cyber-cyan/60',
		iconBorder: 'border-cyber-cyan/30',
		glow: 'rgba(0, 196, 214, 0.12)',
		bar: 'via-cyber-cyan/40',
	},
	green: {
		text: 'text-cyber-green',
		border: 'border-cyber-green/30 hover:border-cyber-green/60',
		iconBorder: 'border-cyber-green/30',
		glow: 'rgba(0, 201, 122, 0.12)',
		bar: 'via-cyber-green/40',
	},
} as const;

export function Communities() {
	return (
		<section id="communities" className="relative py-16 sm:py-20">
			<div aria-hidden className="radial-glow pointer-events-none absolute inset-0" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 text-center">
						<div className="glass-panel mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1">
							<Users className="size-3.5 text-primary" strokeWidth={2} />
							<span className="font-mono text-xs tracking-wider text-primary">
								DUAL-COMMUNITY POWERHOUSE
							</span>
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl">
							Two Communities, <span className="gradient-text-cyan">One Mission</span>
						</h2>
						<p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
							Our ecosystem runs on two active communities — a national technical hub and a
							women-in-cyber initiative — both driving toward elite cyber defense.
						</p>
					</div>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{communities.map((community, i) => {
						const accent = accents[community.accent];
						const HeaderIcon = headerIcons[community.id as keyof typeof headerIcons];
						const icons = featureIcons[community.id as keyof typeof featureIcons];
						return (
							<Reveal key={community.id} delay={i * 100}>
								<article
									className={cn(
										'glass-panel hover-lift group relative overflow-hidden rounded-2xl border p-6 sm:p-8',
										accent.border,
									)}
								>
									<div
										aria-hidden
										className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
										style={{
											background: `radial-gradient(circle at center top, ${accent.glow} 0%, transparent 60%)`,
										}}
									/>
									<div className="relative z-10">
										<div className="mb-5 flex items-start gap-4">
											<div
												className={cn(
													'flex size-14 items-center justify-center rounded-xl border bg-secondary',
													accent.iconBorder,
												)}
											>
												<HeaderIcon className={cn('size-7', accent.text)} strokeWidth={1.75} />
											</div>
											<div>
												<h3 className={cn('text-xl font-bold', accent.text)}>{community.name}</h3>
												<p className="text-sm text-muted-foreground">{community.subtitle}</p>
											</div>
										</div>
										<p className={cn('mb-3 font-mono text-sm', accent.text)}>{community.tagline}</p>
										<p className="mb-5 text-sm leading-relaxed text-muted-foreground">
											{community.description}
										</p>
										<div className="grid grid-cols-2 gap-3">
											{community.features.map((feature, fi) => {
												const Icon = icons[fi];
												return (
													<div
														key={feature}
														className="flex items-center gap-2.5 rounded-lg border border-border bg-secondary/60 px-3 py-2.5 transition-colors group-hover:border-border"
													>
														<Icon className={cn('size-4 shrink-0', accent.text)} strokeWidth={1.75} />
														<span className="text-xs text-foreground/90">{feature}</span>
													</div>
												);
											})}
										</div>
										<a
											href="#inquiry-hub"
											className={cn(
												'mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3',
												accent.text,
											)}
										>
											Join Community
											<ArrowRight className="size-4" strokeWidth={2} />
										</a>
									</div>
									<div
										aria-hidden
										className={cn(
											'absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100',
											accent.bar,
										)}
									/>
								</article>
							</Reveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
