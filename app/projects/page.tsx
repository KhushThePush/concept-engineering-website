import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { projects, REPRESENTATIVE_NOTICE } from '@/lib/projects';
import PageHero from '@/components/sections/PageHero';
import ProjectCard from '@/components/ui/ProjectCard';
import ClosingCta from '@/components/sections/ClosingCta';

export const metadata: Metadata = {
  title: 'Representative projects',
  description: `Representative structural engineering work across the ${siteConfig.region}: waterfront and steep-slope residences, hillside homes, light commercial buildings, additions, and retrofits.`,
  alternates: { canonical: '/projects/' },
  openGraph: {
    title: `Representative projects — ${siteConfig.shortName}`,
    description: 'Six representative examples of the structures and site conditions the firm handles.',
    url: '/projects/',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        title="Representative projects"
        intro="Six examples of the structures and site conditions this firm is built for, from shoreline foundations to clear-span commercial framing."
        image="projects-hero"
      />

      <section className="section bg-paper">
        <div className="shell">
          <p className="measure border-l-2 border-bronze-700 pl-4 text-small text-graphite">
            {REPRESENTATIVE_NOTICE}
          </p>

          <div className="mt-12 grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} headingLevel="h2" />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
