import { cn } from "@repo/ui";

/**
 * Znak Nauči Dizajn — tri kosa poteza u zelenom prelivu, kao na postojećem
 * sajtu. Čist SVG, bez slike, pa ostaje oštar na svakoj rezoluciji.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={cn("size-7", className)}>
      <title>Nauči Dizajn</title>
      <defs>
        <linearGradient id="nd-mark" x1="0" y1="32" x2="32" y2="0">
          <stop offset="0%" stopColor="#2E9E4F" />
          <stop offset="55%" stopColor="#7BD62B" />
          <stop offset="100%" stopColor="#DDFF00" />
        </linearGradient>
      </defs>
      <g fill="url(#nd-mark)">
        <path d="M11.2 4h7.4L9.4 15.2H2z" />
        <path d="M20.6 10.4H28l-9.2 11.2h-7.4z" />
        <path d="M13.4 18.8h7.4L11.6 30H4.2z" />
      </g>
    </svg>
  );
}
