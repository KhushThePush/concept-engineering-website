import type { Metadata } from 'next';
import CtaLink from '@/components/ui/CtaLink';

export const metadata: Metadata = {
  title: 'Page not found',
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint-light bg-grid-32"
      />
      <div className="relative shell section">
        <div aria-hidden="true" className="h-px w-16 bg-bronze-700" />
        <h1 className="mt-6 font-display text-h2 font-bold text-ink-900">
          That page is not here.
        </h1>
        <p className="measure mt-5 text-lead text-graphite">
          The link may be out of date, or the address may have a typo in it.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <CtaLink href="/" withArrow>
            Back to the home page
          </CtaLink>
          <CtaLink href="/projects/" variant="secondary">
            View projects
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
