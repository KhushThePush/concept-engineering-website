import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import PageHero from '@/components/sections/PageHero';
import ServicesIndex from '@/components/sections/ServicesIndex';
import ClosingCta from '@/components/sections/ClosingCta';

export const metadata: Metadata = {
  title: 'Structural engineering services',
  description: `Residential and light commercial structural engineering in ${siteConfig.city}, ${siteConfig.state}: foundations and deep piles, steel, concrete and wood framing, retaining walls, value engineering, BIM, and construction support.`,
  alternates: { canonical: '/services/' },
  openGraph: {
    title: `Structural engineering services — ${siteConfig.shortName}`,
    description: `Ten services across residential and light commercial work in the ${siteConfig.region}.`,
    url: '/services/',
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        intro="Ten services covering the structure from the soil up, for residential and light commercial work across the Puget Sound."
        image="services-hero"
      />
      <ServicesIndex heading="Every service, in detail" />
      <ClosingCta />
    </>
  );
}
