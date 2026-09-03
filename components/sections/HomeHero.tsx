import { siteConfig } from '@/lib/siteConfig';
import SiteImage from '@/components/ui/SiteImage';
import CtaLink from '@/components/ui/CtaLink';

/**
 * A light, bright hero on the paper ground, with the drafting grid in ink at 5%.
 *
 * The hero still leads with linework rather than a photograph of a finished
 * building — a structural engineer's deliverable is the drawing set, and the
 * finished building is the architect's. On a light ground the ink placeholder
 * becomes the one dark mass on the page, so it carries the focus without the
 * whole section going dark.
 *
 * The experience strip is the sheet's title block: four hairline-divided
 * fields, left-aligned, no icons.
 */

const TITLE_BLOCK = [
  { label: 'Experience', value: '40+ years combined' },
  { label: 'Service area', value: `${siteConfig.city} & ${siteConfig.region}` },
  { label: 'Approach', value: 'Construction-friendly design' },
  { label: 'Priority', value: 'Cost-conscious solutions' },
];

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-paper text-ink-900">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint-light bg-grid-32"
      />

      <div className="relative">
        <div className="shell">
          <div className="grid items-center gap-10 pb-14 pt-16 lg:grid-cols-12 lg:gap-gutter lg:pb-24 lg:pt-28">
            <div className="lg:col-span-6">
              <p className="text-eyebrow font-semibold uppercase text-bronze-700">
                {siteConfig.name}
              </p>
              <div aria-hidden="true" className="mt-5 h-px w-16 bg-bronze-700" />

              <h1 className="mt-6 font-display text-display font-bold text-ink-900">
                Engineering that builds better.
              </h1>

              <p className="measure mt-6 text-lead text-graphite">
                Practical structural engineering for Puget Sound sites, grounded
                in {siteConfig.experienceClaim}.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CtaLink href="/contact/" withArrow>
                  Request a proposal
                </CtaLink>
                <CtaLink href="/projects/" variant="secondary">
                  View projects
                </CtaLink>
              </div>
            </div>

            <div className="lg:col-span-6">
              <SiteImage
                slot="home-hero"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>

        {/* Title block — the experience strip, in the form of a drawing sheet's. */}
        <div className="border-y border-line bg-mist">
          <div className="shell">
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {TITLE_BLOCK.map((field, index) => (
                <div
                  key={field.label}
                  className={[
                    'py-6 lg:py-7 lg:pr-6',
                    index % 2 === 0 ? 'pr-5' : 'border-l border-line pl-5',
                    index >= 2 ? 'border-t border-line' : '',
                    'lg:border-t-0',
                    index > 0 ? 'lg:border-l lg:border-line lg:pl-6' : 'lg:border-l-0',
                  ].join(' ')}
                >
                  <dt className="text-small font-semibold uppercase tracking-[0.14em] text-bronze-700">
                    {field.label}
                  </dt>
                  <dd className="mt-2 font-display text-title font-semibold text-ink-900">
                    {field.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
