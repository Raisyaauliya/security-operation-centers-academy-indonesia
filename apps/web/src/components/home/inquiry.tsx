import { useState, type FormEvent } from 'react';
import {
	Building2,
	Heart,
	Mail,
	MessageSquare,
	Send,
	User,
	Users,
	Cpu,
} from 'lucide-react';
import { Reveal } from '@/components/reveal';
import { cn } from '@/lib/utils';

const inquiryTypes = [
	{ id: 'hire', label: 'Hire SOC Talent', icon: Building2 },
	{ id: 'vendor', label: 'Become a Vendor Partner / Demo Product', icon: Cpu },
	{ id: 'sponsor', label: 'Sponsor CyberFemme', icon: Heart },
	{ id: 'community', label: 'Join Community', icon: Users },
] as const;

export function Inquiry() {
	const [type, setType] = useState<string>('hire');
	const [submitted, setSubmitted] = useState(false);

	function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const form = e.currentTarget;
		const data = new FormData(form);
		const name = String(data.get('name') || '').trim();
		const email = String(data.get('email') || '').trim();
		if (!name || !email || !type) return;
		setSubmitted(true);
		form.reset();
	}

	return (
		<section id="inquiry-hub" className="relative py-16 sm:py-20">
			<div aria-hidden className="radial-glow pointer-events-none absolute inset-0" />
			<div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
				<Reveal>
					<div className="mb-10 text-center">
						<div className="glass-panel mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1">
							<Send className="size-3.5 text-primary" strokeWidth={2} />
							<span className="font-mono text-xs tracking-wider text-primary">
								ENTERPRISE & PRINCIPAL INQUIRY HUB
							</span>
						</div>
						<h2 className="text-2xl font-bold sm:text-3xl">
							Let&apos;s <span className="gradient-text-cyan">Connect</span>
						</h2>
						<p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
							Whether you are hiring talent, partnering as a vendor, sponsoring CyberFemme, or
							joining the community — select your path below.
						</p>
					</div>
				</Reveal>

				<Reveal delay={80}>
					<div className="glass-panel rounded-2xl border border-primary/20 p-6 sm:p-8">
						{submitted ? (
							<div className="rounded-xl border border-cyber-green/30 bg-cyber-green/5 p-8 text-center">
								<p className="text-base font-semibold text-cyber-green">Inquiry submitted</p>
								<p className="mt-2 text-sm text-muted-foreground">
									Our team will follow up shortly.
								</p>
								<button
									type="button"
									className="mt-4 text-sm font-semibold text-primary hover:underline"
									onClick={() => setSubmitted(false)}
								>
									Send another inquiry
								</button>
							</div>
						) : (
							<form className="space-y-5" onSubmit={onSubmit}>
								<div>
									<p className="mb-2 font-mono text-[10px] tracking-wider text-muted-foreground">
										SELECT INQUIRY TYPE *
									</p>
									<div className="grid gap-2 sm:grid-cols-2">
										{inquiryTypes.map(item => (
											<button
												key={item.id}
												type="button"
												onClick={() => setType(item.id)}
												className={cn(
													'flex items-center gap-2.5 rounded-xl border px-3.5 py-3 text-left text-sm transition-all',
													type === item.id
														? 'border-primary bg-primary/10 text-primary'
														: 'border-border bg-secondary/40 text-foreground hover:border-primary/40',
												)}
											>
												<item.icon className="size-4 shrink-0" strokeWidth={1.75} />
												{item.label}
											</button>
										))}
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<label className="block space-y-1.5">
										<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
											FULL NAME *
										</span>
										<span className="relative block">
											<User className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
											<input
												name="name"
												required
												placeholder="John Doe"
												className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
											/>
										</span>
									</label>
									<label className="block space-y-1.5">
										<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
											EMAIL *
										</span>
										<span className="relative block">
											<Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
											<input
												name="email"
												type="email"
												required
												placeholder="you@company.com"
												className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
											/>
										</span>
									</label>
								</div>

								<label className="block space-y-1.5">
									<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
										ORGANIZATION (OPTIONAL)
									</span>
									<span className="relative block">
										<Building2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
										<input
											name="organization"
											placeholder="Company / Institution"
											className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
										/>
									</span>
								</label>

								<label className="block space-y-1.5">
									<span className="font-mono text-[10px] tracking-wider text-muted-foreground">
										MESSAGE (OPTIONAL)
									</span>
									<span className="relative block">
										<MessageSquare className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
										<textarea
											name="message"
											rows={4}
											placeholder="Tell us about your needs..."
											className="w-full resize-none rounded-lg border border-border bg-background py-2.5 pl-10 pr-3 text-sm outline-none ring-primary/30 transition focus:border-primary focus:ring-2"
										/>
									</span>
								</label>

								<button
									type="submit"
									className="box-glow-cyan clip-corner-sm inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-all hover:scale-[1.01] active:scale-[0.98]"
								>
									<Send className="size-4" strokeWidth={2} />
									Submit Inquiry
								</button>
							</form>
						)}
					</div>
				</Reveal>
			</div>
		</section>
	);
}
