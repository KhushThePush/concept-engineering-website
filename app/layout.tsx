import type { Metadata } from 'next';
import { Barlow_Semi_Condensed, Public_Sans } from 'next/font/google';
import { ViewTransitions } from 'next-view-transitions';
import { siteConfig } from '@/lib/siteConfig';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';
import './globals.css';

/**
 * Display face: a squared, DIN-adjacent condensed grotesque. Title-block and
 * drafting lettering rather than a poster face.
 */
const display = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-display',
});

/**
 * Body face: USWDS, drawn for federal government use. The plain, legible voice
 * of a permit set and a code book.
 */
const body = Public_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.name} — Structural Engineering in ${siteConfig.city}, ${siteConfig.state}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: `Structural engineering for residential and light commercial projects across the ${siteConfig.region}, led by ${siteConfig.principal}.`,
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-paper text-ink-900 antialiased">
        <StructuredData />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
      </html>
    </ViewTransitions>
  );
}
