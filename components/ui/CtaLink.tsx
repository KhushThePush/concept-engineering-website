import Link from 'next/link';
import { ArrowRight } from './Icons';

/**
 * The site's one button component.
 *
 * `tone` is the ground it sits on, not the button's own colour — that is what
 * decides which accent and border values are contrast-safe.
 *
 * The arrow is pinned to the primary CTA (and to project cards). It is
 * deliberately absent everywhere else.
 */
export default function CtaLink({
  href,
  children,
  variant = 'primary',
  tone = 'light',
  withArrow = false,
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  tone?: 'light' | 'dark';
  withArrow?: boolean;
  className?: string;
}) {
  const base =
    'group inline-flex min-h-[44px] items-center gap-2.5 rounded-control px-6 py-3 text-small font-semibold transition-colors';

  const styles =
    variant === 'primary'
      ? tone === 'light'
        ? 'bg-ink-900 text-paper hover:bg-ink-800'
        : 'bg-paper text-ink-900 hover:bg-mist'
      : tone === 'light'
        ? 'border border-line-strong text-ink-900 hover:border-ink-900 hover:bg-mist'
        : 'on-dark border border-line-strong-dark text-paper hover:border-paper hover:bg-ink-800';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      {withArrow ? (
        <ArrowRight
          size={18}
          className="transition-transform group-hover:translate-x-1"
        />
      ) : null}
    </Link>
  );
}
