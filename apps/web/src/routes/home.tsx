import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { Hero } from '@/components/home/hero';
import { Metrics } from '@/components/home/metrics';
import { Communities } from '@/components/home/communities';
import { OpsFloor } from '@/components/home/ops-floor';
import { ThreatMap } from '@/components/home/threat-map';
import { Engine } from '@/components/home/engine';
import { Roadmap } from '@/components/home/roadmap';
import { Events } from '@/components/home/events';
import { Inquiry } from '@/components/home/inquiry';

export function meta({ matches, location }: Route.MetaArgs) {
	return seo(
		{ matches, location },
		{
			title: "Security Operation Centers Academy Indonesia — Indonesia's SOC Talent Incubator",
			description:
				'The elite 24/7 SOC talent incubator bridging cyber defense talent, enterprise security operations, and next-gen principals. Batch 1 scholarship: zero tuition.',
			jsonLd: {
				'@context': 'https://schema.org',
				'@type': 'Organization',
				name: 'Security Operation Centers Academy Indonesia',
				description:
					'Elite 24/7 SOC talent incubator and threat ecosystem — home of SOCID and CyberFemme, with a Hire-Train-Deploy engine for enterprises and principals.',
				address: { '@type': 'PostalAddress', addressCountry: 'ID', addressLocality: 'Jakarta' },
			},
		},
	);
}

export default function HomePage() {
	return (
		<div id="top" className="min-h-screen bg-background text-foreground">
			<SiteHeader />
			<main>
				<Hero />
				<Metrics />
				<OpsFloor />
				<ThreatMap />
				<Communities />
				<Engine />
				<Roadmap />
				<Events />
				<Inquiry />
			</main>
			<SiteFooter />
		</div>
	);
}
