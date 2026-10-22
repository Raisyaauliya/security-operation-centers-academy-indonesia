import { useState, type FormEvent } from 'react';
import {
	ArrowRight,
	Crosshair,
	GraduationCap,
	Network,
	Radio,
	Server,
} from 'lucide-react';
import { curriculumPhases } from '@/data/engine';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const icons = {
	network: Network,
	server: Server,
	crosshair: Crosshair,
	radio: Radio,
} as const;

const accents = {
	cyan: 'text-cyber-cyan border-cyber-cyan/30',
	blue: 'text-cyber-blue border-cyber-blue/30',
	green: 'text-cyber-green border-cyber-green/30',
	amber: 'text-amber-500 border-amber-500/30',
} as const;

const phaseLabel = {
	cyan: 'text-cyber-cyan',
	blue: 'text-cyber-blue',
	green: 'text-cyber-green',
	amber: 'text-amber-500',
} as const;

export function Roadmap() {
	const [submitted, setSubmitted] = useState(false);

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get('name') || '').trim();
		const email = String(data.get('email') || '').trim();
		if (!name || !email) return;
		setSubmitted(true);
		form.reset();
	}

	return (
		<section id="roadmap" className="relative py-16 sm:py-20">
			<div aria-hidden className="radial-glow pointer-events-none absolute inset-0" />
			<div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 text-center">
						<div className="glass-panel mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1">
							<GraduationCap className="size-3.5 text-primary" strokeWidth={2} />
							<span className="font-mono text-xs tracking-wider text-primary">
								ACADEMY ROADMAP
							</span>
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl">
							Batch 1 <span className="gradient-text-cyan">Curriculum Preview</span>
						</h2>
						<p className="mx-auto mt-2 max-w-2xl text-sm text-muted-foreground">
							Four progressive phases that take you from network fundamentals to live war room
							operations.
						</p>
					</div>
				</Reveal>

				<div className="grid gap-8 lg:grid-cols-3">
					<div className="space-y-4 lg:col-span-2">
						{curriculumPhases.map((phase, i) => {
							const Icon = icons[phase.icon];
							const isLast = i === curriculumPhases.length - 1;
							return (
								<Reveal key={phase.phase} delay={i * 70}>
									<article className="glass-panel hover-lift group relative overflow-hidden rounded-xl p-5">
										<div className="flex items-start gap-4">
											<div className="flex shrink-0 flex-col items-center">
												<div
													className={cn(
														'flex size-12 items-center justify-center rounded-xl border bg-secondary transition-colors',
														accents[phase.accent],
													)}
												>
													<Icon className="size-6" strokeWidth={1.75} />
												</div>
												{!isLast ? (
													<div className="mt-2 h-8 w-px bg-gradient-to-b from-primary/30 to-transparent" />
												) : null}
											</div>
											<div className="min-w-0 flex-1">
												<span
													className={cn(
														'font-mono text-xs',
														phaseLabel[phase.accent],
													)}
												>
													Phase {phase.phase}
												</span>
												<h3 className="mb-2 text-base font-bold text-foreground">{phase.title}</h3>
												<p className="mb-3 text-sm leading-relaxed text-muted-foreground">
													{phase.description}
												</p>
												<div className="flex flex-wrap gap-2">
													{phase.tags.map(tag => (
														<span
															key={tag}
															className="rounded-md border border-border bg-secondary/80 px-2.5 py-1 font-mono text-xs text-muted-foreground"
														>
															{tag}
														</span>
													))}
												</div>
											</div>
										</div>
									</article>
								</Reveal>
							);
						})}
					</div>

					<div id="batch-registration">
						<Reveal delay={120}>
							<div className="glass-panel sticky top-24 rounded-2xl border border-primary/20 p-6">
								<div className="mb-5 flex items-center gap-2 font-mono text-xs tracking-wider text-primary">
									<GraduationCap className="size-4" strokeWidth={2} />
									BATCH 1 — SCHOLARSHIP APPLICATION
								</div>

								{submitted ? (
									<div className="rounded-xl border border-cyber-green/30 bg-cyber-green/5 p-6 text-center">
										<p className="text-sm font-semibold text-cyber-green">Application received</p>
										<p className="mt-2 text-sm text-muted-foreground">
											We will contact you with next steps for Batch 1.
										</p>
										<button
											type="button"
											className="mt-4 text-sm font-semibold text-primary hover:underline"
											onClick={() => setSubmitted(false)}
										>
											Submit another
										</button>
									</div>
								) : (
									<form className="space-y-4" onSubmit={onSubmit}>
										<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
											<label className="block space-y-1.5">
												<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
													FULL NAME *
												</span>
												<input
													name="name"
													required
													placeholder="John Doe"
													className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
												/>
											</label>
											<label className="block space-y-1.5">
												<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
													EMAIL *
												</span>
												<input
													name="email"
													type="email"
													required
													placeholder="you@email.com"
													className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
												/>
											</label>
										</div>
										<label className="block space-y-1.5">
											<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
												PHONE (OPTIONAL)
											</span>
											<input
												name="phone"
												placeholder="+62 ..."
												className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
											/>
										</label>
										<label className="block space-y-1.5">
											<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
												BACKGROUND (OPTIONAL)
											</span>
											<input
												name="background"
												placeholder="Current role, experience, certifications..."
												className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
											/>
										</label>
										<label className="block space-y-1.5">
											<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
												WHY DO YOU WANT TO JOIN? (OPTIONAL)
											</span>
											<textarea
												name="why"
												rows={3}
												placeholder="Tell us what drives you to cyber defense..."
												className="w-full resize-none rounded-lg border border-border bg-background px-3 py-2.5 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
											/>
										</label>
										<button
											type="submit"
											className="box-glow-cyan clip-corner-sm inline-flex w-full min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-all hover:scale-[1.01] active:scale-[0.98]"
										>
											Submit Application
											<ArrowRight className="size-4" strokeWidth={2} />
										</button>
										<p className="text-center font-mono text-[10px] tracking-wider text-muted-foreground">
											0% TUITION — BATCH 1 IS FULLY SUBSIDIZED
										</p>
									</form>
								)}
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
