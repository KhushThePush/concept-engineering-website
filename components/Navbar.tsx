'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { siteConfig } from '@/lib/siteConfig';
import Logo from './Logo';
import CtaLink from './ui/CtaLink';
import { Close, Menu } from './ui/Icons';

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const isActive = useCallback(
    (href: string) => pathname === href || pathname.startsWith(href),
    [pathname],
  );

  // Close on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape to close, Tab trapped inside the panel, focus returned to the toggle.
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    if (!panel) return;

    const first = panel.querySelectorAll<HTMLElement>(FOCUSABLE)[0];
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab') return;

      const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;

      const firstItem = items[0];
      const lastItem = items[items.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="shell flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label={`${siteConfig.name} — home`} className="py-2">
          <Logo variant="dark" />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`relative inline-flex min-h-[44px] items-center text-small font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-ink-900'
                      : 'text-graphite hover:text-ink-900'
                  }`}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-3 h-[2px] bg-bronze-700"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <CtaLink href="/contact/">Request a proposal</CtaLink>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-control text-ink-900 lg:hidden"
        >
          <Menu size={22} />
          <span className="sr-only">Open menu</span>
        </button>
      </div>

      {open ? (
        <div
          ref={panelRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="on-dark fixed inset-0 z-50 flex flex-col bg-ink-900 lg:hidden"
        >
          <div className="shell flex h-[72px] shrink-0 items-center justify-between border-b border-line-dark">
            <Logo variant="light" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-control text-paper"
            >
              <Close size={22} />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          <nav aria-label="Site" className="shell flex-1 overflow-y-auto py-8">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) => (
                <li key={item.href} className="border-b border-line-dark">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={`flex min-h-[56px] items-center font-display text-h3 font-semibold ${
                      isActive(item.href) ? 'text-bronze-400' : 'text-paper'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <CtaLink href="/contact/" tone="dark" withArrow>
                Request a proposal
              </CtaLink>
            </div>

            <div className="mt-10 flex flex-col gap-2 text-small text-paper/75">
              <a href={`tel:${siteConfig.phoneHref}`} className="min-h-[44px] py-2">
                {siteConfig.phone}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="min-h-[44px] break-words py-2">
                {siteConfig.email}
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
