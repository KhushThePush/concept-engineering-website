import Link from 'next/link';
import { services } from '@/lib/services';
import ServiceIcon from '@/components/ui/ServiceIcon';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/Icons';

/**
 * Services are an INDEX, not cards.
 *
 * Two rule-separated columns, each row numbered like a drawing index. No box,
 * no shadow, no radius. Cards are reserved for projects, where an image does
 * real work — the two must not read as one component recoloured twice.
 *
 * `concise` drops the descriptions, which is how Home lists all ten without
 * duplicating the Services page.
 */
export default function ServicesIndex({
  concise = false,
  heading = 'What the firm does',
  intro,
  footerLink,
  background = 'paper',
}: {
  concise?: boolean;
  heading?: string;
  intro?: React.ReactNode;
  footerLink?: { href: string; label: string };
  background?: 'paper' | 'mist';
}) {
  return (
    <section className={`section ${background === 'mist' ? 'bg-mist' : 'bg-paper'}`}>
      <div className="shell">
        <SectionHeading intro={intro}>{heading}</SectionHeading>

        <ol className="mt-14 grid border-t border-line md:grid-cols-2">
          {services.map((service, index) => (
            <li
              key={service.slug}
              className={[
                'border-b border-line',
                concise ? 'py-5' : 'py-8',
                index % 2 === 0 ? 'md:pr-10' : 'md:border-l md:border-line md:pl-10',
              ].join(' ')}
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden="true"
                  className="mt-1 font-display text-small font-semibold tabular-nums tracking-[0.1em] text-bronze-700"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <ServiceIcon name={service.icon} className="mt-0.5 text-ink-900" />
                <div className="min-w-0">
                  <h3 className="font-display text-title font-semibold text-ink-900">
                    {service.title}
                  </h3>
                  {!concise ? (
                    <>
                      <p className="measure mt-2 text-graphite">{service.description}</p>
                      {service.relatedProject ? (
                        <Link
                          href={`/projects/${service.relatedProject}/`}
                          className="mt-3 inline-flex min-h-[44px] items-center text-small font-semibold text-bronze-700 underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-bronze-700"
                        >
                          Related project
                        </Link>
                      ) : null}
                    </>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>

        {footerLink ? (
          <Link
            href={footerLink.href}
            className="group mt-10 inline-flex min-h-[44px] items-center gap-2.5 text-small font-semibold text-bronze-700 transition-colors hover:text-ink-900"
          >
            {footerLink.label}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
