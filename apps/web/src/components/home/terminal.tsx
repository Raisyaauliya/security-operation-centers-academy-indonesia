import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Radio } from 'lucide-react';
import { bootLines, levelColors, logPool, type TerminalLine } from '@/data/terminal';
import { cn } from '@/lib/utils';

type StampedLine = TerminalLine & { id: number };

export function LiveTerminal() {
	const [lines, setLines] = useState<StampedLine[]>(
		bootLines.map((line, i) => ({ ...line, id: i })),
	);
	const bodyRef = useRef<HTMLDivElement>(null);
	const counter = useRef(bootLines.length);

	useEffect(() => {
		let i = 0;
		const id = window.setInterval(() => {
			const next = logPool[i % logPool.length];
			i += 1;
			counter.current += 1;
			setLines(prev => [...prev.slice(-7), { ...next, id: counter.current }]);
		}, 2000);
		return () => window.clearInterval(id);
	}, []);

	useEffect(() => {
		const el = bodyRef.current;
		if (el) el.scrollTop = el.scrollHeight;
	}, [lines]);

	return (
		<div className="glass-panel-strong clip-corner w-full max-w-xl overflow-hidden rounded-xl">
			<div className="flex items-center gap-2 border-b border-border bg-secondary/80 px-4 py-2.5">
				<div className="flex gap-1.5">
					<span className="size-2.5 rounded-full bg-red-400/80" />
					<span className="size-2.5 rounded-full bg-amber-400/80" />
					<span className="size-2.5 rounded-full bg-cyber-green/80" />
				</div>
				<span className="ml-2 font-mono text-xs text-muted-foreground">
					soc-lab-terminal — training simulation
				</span>
				<span className="ml-auto flex items-center gap-1.5 font-mono text-xs text-cyber-green">
					<Radio className="size-3 animate-pulse" strokeWidth={2} />
					SIMULATION
				</span>
			</div>

			<div
				ref={bodyRef}
				className="terminal-scroll relative h-64 overflow-y-auto bg-slate-950 p-4 font-mono text-xs leading-relaxed sm:h-72 sm:text-sm"
				aria-live="polite"
			>
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					<div
						className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent"
						style={{ animation: 'scanLine 4s linear infinite' }}
					/>
				</div>
				{lines.map(line => (
					<p key={line.id} className="mb-1.5 flex items-start gap-2">
						<span className={cn('shrink-0 font-bold', levelColors[line.level])}>
							[{line.level}]
						</span>
						<span className="text-slate-300">
							{line.message}
							{line.level === 'ACTION' && line.message.endsWith('—') ? (
								<span className="ml-1 inline-block h-4 w-2 animate-blink bg-cyber-cyan align-middle" />
							) : null}
						</span>
					</p>
				))}
			</div>

			<div className="flex items-center justify-between border-t border-border bg-secondary/80 px-4 py-2 font-mono text-xs">
				<div className="flex items-center gap-3">
					<span className="flex items-center gap-1 text-cyber-green">
						<CheckCircle2 className="size-3" strokeWidth={2} />
						TRAINING LAB PREVIEW
					</span>
				</div>
				<span className="text-muted-foreground">CPU: 12% | MEM: 34%</span>
			</div>
		</div>
	);
}
