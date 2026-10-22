import { Activity, AlertTriangle, Shield, Terminal, Zap } from 'lucide-react';
import { LiveTerminal } from '@/components/home/terminal';

const LOGO_URL =
	'https://horizons-cdn.hostinger.com/abd7e425-71f1-4d41-bed4-e5be95616c55/26e29f3ab5306843bc57248b9c0dccc7.jpg';

const trustChips = [
	{ icon: Activity, label: 'Shift-Ready Analysts', color: 'text-cyber-green' },
	{ icon: AlertTriangle, label: 'Real Incident Response', color: 'text-amber-400' },
	{ icon: Shield, label: 'SIEM/XDR Sandboxes', color: 'text-cyber-cyan' },
];

export function Hero() {
	return (
		<section className="bg-grid relative min-h-[100dvh] overflow-hidden pb-16 pt-24">
			<div aria-hidden className="radial-glow pointer-events-none absolute inset-0" />
			<div
				aria-hidden
				className="animate-float pointer-events-none absolute left-10 top-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl"
			/>
			<div
				aria-hidden
				className="animate-float pointer-events-none absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-cyber-blue/15 blur-3xl"
				style={{ animationDelay: '2s' }}
			/>

			<div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
				<div className="space-y-6">
					<div className="glass-panel inline-flex items-center gap-2 rounded-full border-primary/30 px-3 py-1.5">
						<img src={LOGO_URL} alt="" className="size-5 rounded object-contain" width={20} height={20} />
						<span className="font-mono text-xs tracking-wider text-primary">
							24/7 SOC OPERATIONS — ACTIVE
						</span>
						<span className="animate-pulse-dot size-1.5 rounded-full bg-cyber-green" />
					</div>

					<h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
						<span className="block text-foreground">
							Security Operation Centers Academy Indonesia
						</span>
						<span className="gradient-text-cyan text-glow-cyan mt-2 block text-2xl sm:text-3xl lg:text-4xl">
							Indonesia's SOC Talent Incubator
						</span>
						<span className="mt-1 block text-xl text-muted-foreground sm:text-2xl lg:text-3xl">
							&amp; Threat Ecosystem
						</span>
					</h1>

					<p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
						We bridge top-tier cyber defense talent, enterprise security operations, and
						next-gen security principals into one unified ecosystem.
					</p>

					<div className="flex flex-col gap-4 pt-2 sm:flex-row">
						<a
							href="#batch-registration"
							className="box-glow-cyan clip-corner-sm group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-bold text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
						>
							<Zap className="size-4" strokeWidth={2} />
							Launch Career (Batch 1 Scholarship)
						</a>
						<a
							href="#inquiry-hub"
							className="clip-corner-sm group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border-2 border-cyber-green/60 bg-transparent px-6 py-3.5 font-bold text-cyber-green transition-all duration-300 hover:border-cyber-green hover:bg-cyber-green/10 active:scale-[0.98]"
						>
							<Terminal className="size-4" strokeWidth={2} />
							B2B &amp; Principal Portal
						</a>
					</div>

					<div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs text-muted-foreground">
						{trustChips.map(chip => (
							<span key={chip.label} className="flex items-center gap-1.5">
								<chip.icon className={`size-3 ${chip.color}`} strokeWidth={2} />
								{chip.label}
							</span>
						))}
					</div>
				</div>

				<div className="flex justify-center lg:justify-end">
					<LiveTerminal />
				</div>
			</div>
		</section>
	);
}
