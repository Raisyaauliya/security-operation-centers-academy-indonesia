import type { ReactNode } from 'react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

export function Reveal({
	children,
	className,
	delay = 0,
}: {
	children: ReactNode;
	className?: string;
	delay?: number;
}) {
	const { ref, inView } = useInView<HTMLDivElement>(0.15);

	return (
		<div
			ref={ref}
			style={{ transitionDelay: `${delay}ms` }}
			className={cn('reveal', inView && 'reveal-visible', className)}
		>
			{children}
		</div>
	);
}
