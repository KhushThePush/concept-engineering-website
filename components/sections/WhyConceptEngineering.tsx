import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/lib/siteConfig';

const SPECIALTIES = [
  'Residential and light commercial structures',
  'Steep-slope, waterfront, and ECA sites',
  'Complex foundation and deep pile systems',
  'Value-engineered steel and concrete framing',
];

export default function WhyConceptEngineering() {
  return (
    <section className="section bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-7">
          <SectionHeading>The gap between design and construction</SectionHeading>

          <div className="measure mt-8 flex flex-col gap-5 text-graphite">
            <p>
              {siteConfig.principal} is a structural engineer and a builder. That
              combination — {siteConfig.experienceClaim}, in the{' '}
              {siteConfig.region} region — is why the drawings leaving this
              office are efficient, buildable, and priced for how work actually
              gets done in the field.
            </p>
            <p>
              Architects, developers, and contractors work with the firm for
              clear communication, fast turnaround, and engineering that
              minimizes surprises once the framing starts.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5">
          <h3 className="font-display text-small font-semibold uppercase tracking-[0.14em] text-bronze-700">
            Where the firm concentrates
          </h3>
          <ul className="mt-6 border-t border-line">
            {SPECIALTIES.map((item) => (
              <li
                key={item}
                className="border-b border-line py-4 font-display text-title font-semibold text-ink-900"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
