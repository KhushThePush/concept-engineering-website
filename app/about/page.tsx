import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/sections/PageHero';
import Approach from '@/components/sections/Approach';
import WhyClientsChoose from '@/components/sections/WhyClientsChoose';
import ClosingCta from '@/components/sections/ClosingCta';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: `About ${siteConfig.shortName}`,
  description: `${siteConfig.principal} founded ${siteConfig.name} in ${siteConfig.city}, ${siteConfig.state}. A structural engineer and builder with ${siteConfig.experienceClaim} across the ${siteConfig.region}.`,
  alternates: { canonical: '/about/' },
  openGraph: {
    title: `About ${siteConfig.shortName}`,
    description: `A structural engineer and builder with ${siteConfig.experienceClaim} across the ${siteConfig.region}.`,
    url: '/about/',
  },
};

/**
 * Goal, pledge and commitment as a hairline-ruled definition list — label left,
 * substance right. Deliberately not three matching cards.
 */
type Principle = { label: string; body?: string; items?: string[] };

const PRINCIPLES: Principle[] = [
  {
    label: 'Goal',
    body: 'To be the preferred structural engineering partner for architects, builders, and developers seeking practical, efficient design solutions.',
  },
  {
    label: 'Pledge',
    items: [
      'Prompt, reliable service',
      'Thoughtful, buildable engineering',
      'Solutions that reduce cost, risk, and complexity',
    ],
  },
  {
    label: 'Commitment',
    items: [
      'The highest level of technical expertise',
      'Professionalism and integrity',
      'A collaborative mindset',
      'A relentless focus on constructability and value engineering',
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A structural engineer who has also built"
        intro={`${siteConfig.principal} founded ${siteConfig.name} to close the distance between what a drawing shows and what a crew can build.`}
        image="about-hero"
      />

      <section className="section bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <SectionHeading>The firm</SectionHeading>
            <div className="measure mt-8 flex flex-col gap-5 text-graphite">
              <p>
                {siteConfig.name} delivers structural engineering that is
                practical, buildable, and grounded in real-world construction
                experience. The firm bridges the gap between design and
                construction, producing engineering that is efficient in the
                office and efficient on site.
              </p>
              <p>
                It specializes in residential and light commercial structures,
                steep-slope and waterfront sites, complex foundation systems,
                and value-engineered steel and concrete framing.
              </p>
              <p>
                Architects, developers, and contractors work with the firm for
                clear communication, fast turnaround, and engineering that
                minimizes surprises in the field.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <SectionHeading as="h3">{siteConfig.principal}</SectionHeading>
            <div className="measure mt-8 flex flex-col gap-5 text-graphite">
              <p>
                Ali is both a structural engineer and a builder, with{' '}
                {siteConfig.experienceClaim} in the {siteConfig.region} region.
              </p>
              <p>
                Having run work in the field changes how a drawing set gets put
                together. Details get simpler, member sizes get chosen against
                what is actually available, and the questions a contractor would
                have asked are answered on the sheet.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Approach tone="light" />

      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading>What the firm holds itself to</SectionHeading>

          <dl className="mt-14 border-t border-line">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.label}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-gutter"
              >
                <dt className="font-display text-small font-semibold uppercase tracking-[0.14em] text-bronze-700 md:col-span-4">
                  {principle.label}
                </dt>
                <dd className="md:col-span-8">
                  {principle.body ? (
                    <p className="measure font-display text-h3 font-semibold text-ink-900">
                      {principle.body}
                    </p>
                  ) : (
                    <ul className="flex flex-col gap-2">
                      {principle.items?.map((item) => (
                        <li
                          key={item}
                          className="font-display text-title font-semibold text-ink-900"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <WhyClientsChoose background="paper" />
      <ClosingCta />
    </>
  );
}
