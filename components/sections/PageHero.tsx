import SiteImage from '@/components/ui/SiteImage';
import type { ImageSlotId } from '@/lib/images';

/**
 * Interior page hero. Light ground with the drafting grid, an h1, a lead, and
 * the page's drawing.
 *
 * No tracked-caps eyebrow: that device belongs to the home hero and appears
 * exactly once on the site. Hierarchy here comes from the bronze hairline and
 * the type scale.
 */
export default function PageHero({
  title,
  intro,
  image,
  eyebrow,
}: {
  title: string;
  intro: string;
  image: ImageSlotId;
  /** A short category label — used on project detail for the project type. */
  eyebrow?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint-light bg-grid-32"
      />
      <div className="relative shell">
        <div className="grid items-center gap-10 pb-14 pt-14 lg:grid-cols-12 lg:gap-gutter lg:pb-20 lg:pt-20">
          <div className="lg:col-span-6">
            {eyebrow ? <div className="mb-5">{eyebrow}</div> : null}
            <div aria-hidden="true" className="h-px w-16 bg-bronze-700" />
            <h1 className="mt-6 font-display text-h2 font-bold text-ink-900">{title}</h1>
            <p className="measure mt-5 text-lead text-graphite">{intro}</p>
          </div>

          <div className="lg:col-span-6">
            <SiteImage slot={image} priority sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  );
}
