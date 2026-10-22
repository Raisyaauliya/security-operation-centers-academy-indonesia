import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const LOGO_URL =
	'https://horizons-cdn.hostinger.com/abd7e425-71f1-4d41-bed4-e5be95616c55/26e29f3ab5306843bc57248b9c0dccc7.jpg';

const navLinks = [
	{ href: '#communities', label: 'Communities' },
	{ href: '#ecosystem', label: 'Ecosystem' },
	{ href: '#ops-floor', label: 'Ops Floor' },
	{ href: '#threat-map', label: 'Threat Map' },
	{ href: '#roadmap', label: 'Roadmap' },
	{ href: '#events', label: 'Events' },
	{ href: '#inquiry-hub', label: 'Inquiry' },
];

export function SiteHeader() {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 16);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'fixed inset-x-0 top-0 z-50 border-b transition-all duration-300',
				scrolled
					? 'border-border/80 bg-background/90 shadow-lg shadow-black/30 backdrop-blur-md'
					: 'border-transparent bg-background/55 backdrop-blur-sm',
			)}
		>
			<div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<a href="#top" className="group flex items-center gap-2.5">
					<img
						src={LOGO_URL}
						alt="Security Operation Centers Academy Indonesia"
						className="size-10 rounded-lg object-contain"
						width={40}
						height={40}
					/>
					<span className="leading-tight">
						<span className="block text-sm font-bold text-foreground">
							SOC Academy
						</span>
						<span className="block font-mono text-[10px] tracking-[0.18em] text-primary">
							INDONESIA
						</span>
					</span>
				</a>

				<nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
					{navLinks.map(link => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-muted-foreground transition-colors hover:text-primary"
						>
							{link.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<a
						href="#batch-registration"
						className="clip-corner-sm hidden items-center rounded-lg border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground sm:inline-flex"
					>
						Batch 1 Scholarship
					</a>
					<button
						type="button"
						className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
						aria-label={open ? 'Close menu' : 'Open menu'}
						aria-expanded={open}
						onClick={() => setOpen(v => !v)}
					>
						{open ? <X className="size-5" /> : <Menu className="size-5" />}
					</button>
				</div>
			</div>

			{open ? (
				<div className="border-t border-border bg-card lg:hidden">
					<nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
						{navLinks.map(link => (
							<a
								key={link.href}
								href={link.href}
								className="rounded-lg px-3 py-3 text-sm font-medium text-foreground hover:bg-secondary"
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
						<a
							href="#batch-registration"
							className="mt-2 rounded-lg bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground"
							onClick={() => setOpen(false)}
						>
							Batch 1 Scholarship
						</a>
					</nav>
				</div>
			) : null}
		</header>
	);
}
