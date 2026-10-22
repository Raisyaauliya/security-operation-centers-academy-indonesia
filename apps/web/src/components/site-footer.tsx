import {
	FileText,
	Instagram,
	Linkedin,
	MessageCircle,
	Music2,
	Facebook,
} from 'lucide-react';

const socials = [
	{ label: 'Discord', detail: 'Dual-channel access', icon: MessageCircle, href: '#' },
	{ label: 'LinkedIn', detail: 'socacademy-id', icon: Linkedin, href: '#' },
	{ label: 'Instagram', detail: '@socacademy.id', icon: Instagram, href: '#' },
	{ label: 'TikTok', detail: '@socacademy.id', icon: Music2, href: '#' },
	{ label: 'Threads', detail: '@socacademy.id', icon: MessageCircle, href: '#' },
	{ label: 'Facebook', detail: '/socacademy', icon: Facebook, href: '#' },
];

const LOGO_URL =
	'https://horizons-cdn.hostinger.com/abd7e425-71f1-4d41-bed4-e5be95616c55/26e29f3ab5306843bc57248b9c0dccc7.jpg';

export function SiteFooter() {
	return (
		<footer className="border-t border-border bg-card/40">
			<div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
				<div className="grid gap-10 md:grid-cols-[1.4fr_1.2fr_1fr]">
					<div>
						<div className="flex items-center gap-2.5">
							<img
								src={LOGO_URL}
								alt="Security Operation Centers Academy Indonesia"
								className="size-10 rounded-lg object-contain"
								width={40}
								height={40}
							/>
							<div>
								<p className="text-sm font-bold text-foreground">
									Security Operation Centers Academy Indonesia
								</p>
								<p className="text-xs text-primary">Elite SOC Talent Incubator</p>
							</div>
						</div>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
							Bridging top-tier cyber defense talent, enterprise security operations, and
							next-gen security principals into one unified 24/7 ecosystem.
						</p>
					</div>

					<div>
						<h3 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
							CONNECT WITH US
						</h3>
						<div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
							{socials.map(item => (
								<a
									key={item.label}
									href={item.href}
									className="glass-panel rounded-xl p-3 transition-colors hover:border-primary/40"
								>
									<item.icon className="size-4 text-primary" strokeWidth={1.75} />
									<p className="mt-2 text-xs font-semibold text-foreground">{item.label}</p>
									<p className="mt-0.5 truncate text-[10px] text-muted-foreground">{item.detail}</p>
								</a>
							))}
						</div>
					</div>

					<div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1">
						<div>
							<h3 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
								LEGAL & COMPLIANCE
							</h3>
							<ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
								<li>
									<a href="#" className="inline-flex items-center gap-2 hover:text-foreground">
										<FileText className="size-3.5" /> Terms of Service
									</a>
								</li>
								<li>
									<a href="#" className="inline-flex items-center gap-2 hover:text-foreground">
										<FileText className="size-3.5" /> Privacy Policy
									</a>
								</li>
								<li>

								</li>
							</ul>
						</div>
						<div>
							<h3 className="font-mono text-[11px] tracking-[0.2em] text-muted-foreground">
								QUICK NAVIGATION
							</h3>
							<p className="mt-4 text-sm text-muted-foreground">
								<a href="#top" className="hover:text-primary">
									Hero
								</a>
								{' / '}
								<a href="#batch-registration" className="hover:text-primary">
									Batch 1
								</a>
								{' / '}
								<a href="#inquiry-hub" className="hover:text-primary">
									Inquiry
								</a>
							</p>
						</div>
					</div>
				</div>

				<div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<span>© 2026 Security Operation Centers Academy Indonesia. All rights reserved.</span>
					<span>SOC Academy Indonesia</span>
				</div>
			</div>
		</footer>
	);
}
