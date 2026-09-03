import { siteConfig } from '@/lib/siteConfig';

/**
 * Original wordmark: CONCEPT over ENGINEERING LLC, with a mark derived from a
 * stepped foundation section — a stem carrying two widening footing courses.
 * Three filled bars, so it stays legible at 24px.
 *
 * `dark`  — ink mark and wordmark, for light grounds.
 * `light` — reversed: paper mark and wordmark with a bronze footing course.
 */
export default function Logo({
  variant = 'dark',
  className = '',
}: {
  variant?: 'dark' | 'light';
  className?: string;
}) {
  const isLight = variant === 'light';
  const markBody = isLight ? 'var(--paper)' : 'var(--ink-900)';
  const markFooting = isLight ? 'var(--bronze-400)' : 'var(--bronze-700)';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="13" y="4" width="6" height="11" fill={markBody} />
        <rect x="7.5" y="16" width="17" height="5" fill={markBody} />
        <rect x="2" y="22" width="28" height="5" fill={markFooting} />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] font-bold uppercase leading-none tracking-[0.06em] ${
            isLight ? 'text-paper' : 'text-ink-900'
          }`}
        >
          Concept
        </span>
        <span
          className={`mt-[3px] font-display text-[0.6875rem] font-semibold uppercase leading-none tracking-[0.2em] ${
            isLight ? 'text-paper/70' : 'text-graphite'
          }`}
        >
          Engineering LLC
        </span>
      </span>
      <span className="sr-only">{siteConfig.name}</span>
    </span>
  );
}
