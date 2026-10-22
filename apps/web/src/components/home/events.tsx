import {
	ArrowRight,
	Building2,
	Calendar,
	FlaskConical,
	Gamepad2,
	Heart,
	MapPin,
	Monitor,
	Radio,
	Users,
} from 'lucide-react';
import { eventTracks } from '@/data/engine';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const itemIcons = {
	flask: FlaskConical,
	monitor: Monitor,
	radio: Radio,
	gamepad: Gamepad2,
	users: Users,
	heart: Heart,
	building: Building2,
} as const;

const accents = {
	cyan: {
		text: 'text-cyber-cyan',
		border: 'border-cyber-cyan/20',
		iconBox: 'border-cyber-cyan/30 text-cyber-cyan',
	},
	green: {
		text: 'text-cyber-green',
		border: 'border-cyber-green/20',
		iconBox: 'border-cyber-green/30 text-cyber-green',
	},
} as const;

export function Events() {
	return (
		<section id="events" className="relative py-16 sm:py-20">
			<div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 text-center">
						<div className="glass-panel mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1">
							<Radio className="size-3.5 text-primary" strokeWidth={2} />
							<span className="font-mono text-xs tracking-wider text-primary">
								EVENTS & WAR ROOM
							</span>
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl">
							Online Arena & <span className="gradient-text-green">Offline Hub</span>
						</h2>
						<p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
							From live-streamed SOC shifts to physical leadership summits — we operate across
							both digital and physical dimensions.
						</p>
					</div>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2">
					{eventTracks.map((track, i) => {
						const accent = accents[track.accent];
						const HeaderIcon = track.id === 'online' ? Monitor : MapPin;
						return (
							<Reveal key={track.id} delay={i * 100}>
								<article
									className={cn(
										'glass-panel hover-lift flex h-full flex-col rounded-2xl border p-6 sm:p-8',
										accent.border,
									)}
								>
									<div className="mb-5 flex items-start gap-3">
										<div
											className={cn(
												'flex size-11 items-center justify-center rounded-xl border bg-secondary',
												accent.iconBox,
											)}
										>
											<HeaderIcon className="size-5" strokeWidth={1.75} />
										</div>
										<div>
											<h3 className="text-lg font-bold text-foreground">{track.title}</h3>
											<p className={cn('text-xs font-mono', accent.text)}>{track.subtitle}</p>
										</div>
									</div>

									<ul className="flex-1 space-y-3">
										{track.items.map(item => {
											const Icon = itemIcons[item.icon as keyof typeof itemIcons];
											return (
												<li
													key={item.title}
													className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 px-3.5 py-3"
												>
													{Icon ? (
														<Icon
															className={cn('mt-0.5 size-4 shrink-0', accent.text)}
															strokeWidth={1.75}
														/>
													) : null}
													<div>
														<p className="text-sm font-semibold text-foreground">{item.title}</p>
														<p className="text-xs text-muted-foreground">{item.detail}</p>
													</div>
												</li>
											);
										})}
									</ul>

									<a
										href={track.href}
										className={cn(
											'mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3',
											accent.text,
										)}
									>
										{track.cta}
										<ArrowRight className="size-4" strokeWidth={2} />
									</a>
								</article>
							</Reveal>
						);
					})}
				</div>

				<p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
					<Calendar className="size-3.5" strokeWidth={1.75} />
					Events run monthly — join the community Discord for real-time schedules
				</p>
			</div>
		</section>
	);
}
