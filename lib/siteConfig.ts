/**
 * The single source of truth for every company fact on this site.
 *
 * No contact detail is written literally anywhere else. To change the phone
 * number, email address or domain, change it here and nowhere else.
 */
export const siteConfig = {
  name: 'Concept Engineering LLC',
  shortName: 'Concept Engineering',
  principal: 'Ali Amin, PE',
  phone: '425-463-7961',
  /** E.164 form, for the tel: href. */
  phoneHref: '+14254637961',
  email: 'conceptenginnering33@gmail.com',
  city: 'Kirkland',
  state: 'WA',
  region: 'Puget Sound',
  /**
   * PLACEHOLDER — update to the real domain before launch.
   * Read by `metadataBase` in the root layout and by sitemap/robots.
   */
  siteUrl: 'https://khushthepush.github.io/concept-engineering-website',
  /** Subject line for the mailto contact form. */
  contactSubject: 'Concept Engineering project inquiry',
  nav: [
    { label: 'About', href: '/about/' },
    { label: 'Services', href: '/services/' },
    { label: 'Projects', href: '/projects/' },
    { label: 'Contact', href: '/contact/' },
  ],
  /** The one quantitative claim available. Never multiplied into others. */
  experienceClaim: '40+ years of combined structural and construction experience',
} as const;

export type SiteConfig = typeof siteConfig;
