import { siteConfig } from '@/lib/siteConfig';

/**
 * One ProfessionalService block, rendered once per page from the root layout.
 *
 * Strictly limited to the facts in the brief: name, principal, city, phone,
 * email, url, areaServed. No founding date, employee count, review score,
 * award, or affiliation — none of those exist, so none are claimed.
 */
export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'City', name: siteConfig.city },
      { '@type': 'Place', name: `${siteConfig.region} region` },
    ],
    founder: {
      '@type': 'Person',
      name: siteConfig.principal,
    },
    knowsAbout: [
      'Structural engineering',
      'Residential structural engineering',
      'Light commercial structural engineering',
      'Foundations and deep pile systems',
      'Retaining walls and shoring',
      'Steep-slope and waterfront sites',
    ],
  };

  return (
    <script
      type="application/ld+json"
      // Serialized server-side from a static object; no user input reaches this.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
