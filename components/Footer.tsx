import Link from 'next/link';
import { siteConfig } from '@/lib/siteConfig';
import { services } from '@/lib/services';
import Logo from './Logo';
import { Mail, Phone, Pin } from './ui/Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark bg-ink-950 text-paper">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-gutter lg:py-20">
        <div className="lg:col-span-4">
          <Logo variant="light" />
          <p className="measure mt-5 text-small text-paper/70">
            Structural engineering for residential and light commercial projects
            across the {siteConfig.region}, led by {siteConfig.principal}.
          </p>
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="font-display text-small font-semibold uppercase tracking-[0.14em] text-paper">
            Site
          </h2>
          <ul className="mt-4 flex flex-col gap-1">
            <li>
              <Link
                href="/"
                className="inline-flex min-h-[44px] items-center text-small text-paper/70 transition-colors hover:text-paper"
              >
                Home
              </Link>
            </li>
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[44px] items-center text-small text-paper/70 transition-colors hover:text-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-small font-semibold uppercase tracking-[0.14em] text-paper">
            Services
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug} className="text-small text-paper/70">
                {service.title}
              </li>
            ))}
            <li>
              <Link
                href="/services/"
                className="inline-flex min-h-[44px] items-center text-small text-bronze-400 transition-colors hover:text-paper"
              >
                All services
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="font-display text-small font-semibold uppercase tracking-[0.14em] text-paper">
            Contact
          </h2>
          <ul className="mt-4 flex flex-col gap-1">
            <li>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="inline-flex min-h-[44px] items-center gap-2.5 text-small text-paper/70 transition-colors hover:text-paper"
              >
                <Phone size={16} />
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-[44px] items-center gap-2.5 break-words text-small text-paper/70 transition-colors hover:text-paper"
              >
                <Mail size={16} />
                {siteConfig.email}
              </a>
            </li>
            <li className="flex min-h-[44px] items-center gap-2.5 text-small text-paper/70">
              <Pin size={16} />
              {siteConfig.city}, {siteConfig.state}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line-dark">
        <div className="shell flex flex-col gap-2 py-6 text-small text-paper/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}
          </p>
          <p>
            {siteConfig.principal} · {siteConfig.city}, {siteConfig.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
