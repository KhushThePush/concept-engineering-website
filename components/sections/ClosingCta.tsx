import { siteConfig } from '@/lib/siteConfig';
import CtaLink from '@/components/ui/CtaLink';
import { Mail, Phone, Pin } from '@/components/ui/Icons';

/**
 * Closing CTA. The headline is written fresh — the reference's
 * "Have a project in mind? / Let's build it together." is off limits, and this
 * has to be about the specific reason someone calls a structural engineer.
 */
export default function ClosingCta() {
  return (
    <section className="section border-t border-line bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
        <div className="lg:col-span-7">
          <div aria-hidden="true" className="h-px w-16 bg-bronze-700" />
          <h2 className="mt-6 font-display text-h2 font-bold text-ink-900">
            Start with the part that worries you.
          </h2>
          <p className="measure mt-5 text-lead text-graphite">
            Send drawings, a sketch, or a site address to start the conversation.
          </p>
          <div className="mt-9">
            <CtaLink href="/contact/" withArrow>
              Request a proposal
            </CtaLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <ul className="border-t border-line">
            <li className="border-b border-line">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex min-h-[44px] items-center gap-4 py-5 text-ink-900 transition-colors hover:text-bronze-700"
              >
                <Phone size={20} className="text-bronze-700" />
                <span className="font-display text-title font-semibold">
                  {siteConfig.phone}
                </span>
              </a>
            </li>
            <li className="border-b border-line">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex min-h-[44px] items-center gap-4 py-5 text-ink-900 transition-colors hover:text-bronze-700"
              >
                <Mail size={20} className="shrink-0 text-bronze-700" />
                <span className="break-words font-display text-title font-semibold">
                  {siteConfig.email}
                </span>
              </a>
            </li>
            <li className="flex min-h-[44px] items-center gap-4 border-b border-line py-5">
              <Pin size={20} className="text-bronze-700" />
              <span className="font-display text-title font-semibold text-ink-900">
                {siteConfig.city}, {siteConfig.state}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
