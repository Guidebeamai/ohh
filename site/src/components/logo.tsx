import { cn } from "@/lib/utils";

// You at the centre, with two layers whose openings don't line up:
// a profile reached one step at a time.
export const LogoMark = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-6 shrink-0", className)}>
    <rect width="32" height="32" rx="8" className="fill-primary" />
    <g className="stroke-primary-foreground" fill="none" strokeWidth="2.6" strokeLinecap="round">
      <path d="M25.64 12.68A10.2 10.2 0 1 1 19.32 6.36" />
      <path d="M10.19 17.02A5.9 5.9 0 1 1 14.98 21.81" />
    </g>
    <circle cx="16" cy="16" r="2.3" className="fill-primary-foreground" />
  </svg>
);
