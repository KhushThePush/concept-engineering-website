import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/sections/PageHero';
import SectionHeading from '@/components/ui/SectionHeading';
import { Mail, Phone, Pin } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Talk to ${siteConfig.principal} about a structural project in ${siteConfig.city} or the wider ${siteConfig.region}. Call ${siteConfig.phone} or send drawings by email.`,
  alternates: { canonical: '/contact/' },
  openGraph: {
    title: `Contact — ${siteConfig.shortName}`,
    description: `Talk to ${siteConfig.principal} about a structural project in the ${siteConfig.region}.`,
    url: '/contact/',
  },
};

/** Useful to have in hand before the first call. Advice, not a claim. */
const WHAT_HELPS = [
  'The site address, or the parcel number',
  'Architectural drawings or a sketch, at whatever stage they are',
  'Any geotechnical report, if one exists yet',
  'The part of the structure you are least sure about',
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start with the part that worries you"
        intro="Send drawings, a sketch, or a site address. The harder the site, the more useful an early conversation is."
        image="contact-hero"
      />

      <section className="section bg-paper">
        <div className="shell grid gap-14 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-6">
            <SectionHeading as="h2">Get in touch</SectionHeading>

            <ul className="mt-8 border-t border-line">
              <li className="border-b border-line">
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex min-h-[44px] items-center gap-4 py-6 text-ink-900 transition-colors hover:text-bronze-700"
                >
                  <Phone size={22} className="shrink-0 text-bronze-700" />
                  <span className="font-display text-h3 font-semibold">
                    {siteConfig.phone}
                  </span>
                </a>
              </li>
              <li className="border-b border-line">
                <a
                  href={`mailto:${siteConfig.email}?subject=${encodeURIComponent(siteConfig.contactSubject)}`}
                  className="flex min-h-[44px] items-center gap-4 py-6 text-ink-900 transition-colors hover:text-bronze-700"
                >
                  <Mail size={22} className="shrink-0 text-bronze-700" />
                  <span className="break-words font-display text-h3 font-semibold">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
              <li className="flex min-h-[44px] items-center gap-4 border-b border-line py-6">
                <Pin size={22} className="shrink-0 text-bronze-700" />
                <span className="font-display text-h3 font-semibold text-ink-900">
                  {siteConfig.city}, {siteConfig.state}
                </span>
              </li>
            </ul>

            <p className="measure mt-8 text-graphite">
              {siteConfig.principal} answers directly. For anything on a
              steep-slope, shoreline, or Environmentally Critical Area site, a
              call before the drawings are far along usually saves the most
              time.
            </p>
          </div>

          <div className="lg:col-span-6">
            <SectionHeading as="h2">What helps a first conversation</SectionHeading>
            <ul className="mt-8 border-t border-line">
              {WHAT_HELPS.map((item) => (
                <li
                  key={item}
                  className="border-b border-line py-5 font-display text-title font-semibold text-ink-900"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="measure mt-8 text-graphite">
              None of it is required to start. A phone call about a site you are
              considering is a reasonable first step on its own.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
