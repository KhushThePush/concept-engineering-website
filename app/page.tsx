import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import HomeHero from '@/components/sections/HomeHero';
import WhyConceptEngineering from '@/components/sections/WhyConceptEngineering';
import ServicesIndex from '@/components/sections/ServicesIndex';
import Approach from '@/components/sections/Approach';
import WhyClientsChoose from '@/components/sections/WhyClientsChoose';
import ProjectPreview from '@/components/sections/ProjectPreview';
import ClosingCta from '@/components/sections/ClosingCta';

export const metadata: Metadata = {
  title: `${siteConfig.name} — Structural Engineering in ${siteConfig.city}, ${siteConfig.state}`,
  description: `Structural engineering for residential and light commercial projects across the ${siteConfig.region}. Foundations, framing, steep-slope and waterfront sites. Led by ${siteConfig.principal}.`,
  alternates: { canonical: '/' },
  openGraph: {
    title: `${siteConfig.name} — Structural Engineering in ${siteConfig.city}, ${siteConfig.state}`,
    description: `Practical structural engineering for Puget Sound sites, grounded in ${siteConfig.experienceClaim}.`,
    url: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyConceptEngineering />
      <ServicesIndex
        concise
        heading="What the firm does"
        intro="Ten services across residential and light commercial work, from foundations and framing to construction support."
        footerLink={{ href: '/services/', label: 'What each service involves' }}
      />
      <Approach />
      <WhyClientsChoose />
      <ProjectPreview />
      <ClosingCta />
    </>
  );
}
