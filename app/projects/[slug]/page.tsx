import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';
import {
  getProject,
  getRelatedProjects,
  projects,
  REPRESENTATIVE_BADGE,
} from '@/lib/projects';
import { getService } from '@/lib/services';
import SiteImage from '@/components/ui/SiteImage';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import ClosingCta from '@/components/sections/ClosingCta';

type Params = { slug: string };

/** Every project route is prerendered from lib/projects.ts at build time. */
export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};

  const title = `${project.title} — representative project`;

  return {
    title,
    description: `${project.type}. ${project.cardDescription} Representative structural engineering work by ${siteConfig.name}.`,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} — ${siteConfig.shortName}`,
      description: project.cardDescription,
      url: `/projects/${project.slug}/`,
    },
  };
}

export default function ProjectDetailPage({ params }: { params: Params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.slug);
  const serviceLinks = project.services
    .map((slug) => getService(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  return (
    <>
      {/* Hero — type, persistent representative badge, title, drawing. */}
      <section className="relative overflow-hidden border-b border-line bg-paper">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-blueprint-light bg-grid-32"
        />
        <div className="relative shell py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-small font-semibold uppercase tracking-[0.14em] text-bronze-700">
              {project.type}
            </p>
            <p className="rounded-control border border-line-strong px-2.5 py-1 text-small font-semibold text-ink-900">
              {REPRESENTATIVE_BADGE}
            </p>
          </div>

          <h1 className="mt-6 font-display text-h2 font-bold text-ink-900">
            {project.title}
          </h1>

          <div className="mt-10">
            <SiteImage
              slot={project.heroImage}
              priority
              sizes="100vw"
              viewTransitionName={`project-${project.slug}`}
            />
          </div>
        </div>
      </section>

      {/* Overview and structural considerations. */}
      <section className="section bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-gutter">
          <div className="lg:col-span-7">
            <SectionHeading>Overview</SectionHeading>
            <p className="measure mt-8 text-graphite">{project.overview}</p>
          </div>

          <div className="lg:col-span-5">
            <h2 className="font-display text-small font-semibold uppercase tracking-[0.14em] text-bronze-700">
              Structural considerations
            </h2>
            <ul className="mt-6 border-t border-line">
              {project.structuralConsiderations.map((item) => (
                <li key={item} className="border-b border-line py-4 text-ink-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach, challenges, solution — a ruled sequence, not three cards. */}
      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading>How it was engineered</SectionHeading>

          <dl className="mt-14 border-t border-line">
            {[
              { label: 'Engineering approach', body: project.engineeringApproach },
              { label: 'Challenges', body: project.challenges },
              { label: 'Solution', body: project.solution },
            ].map((block) => (
              <div
                key={block.label}
                className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-gutter"
              >
                <dt className="font-display text-h3 font-semibold text-ink-900 md:col-span-4">
                  {block.label}
                </dt>
                <dd className="measure text-graphite md:col-span-8">{block.body}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-12">
            <h2 className="font-display text-small font-semibold uppercase tracking-[0.14em] text-bronze-700">
              Services involved
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceLinks.map((service) => (
                <li
                  key={service.slug}
                  className="rounded-control border border-line-strong px-3 py-2 text-small text-ink-900"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery. */}
      <section className="section bg-paper">
        <div className="shell">
          <SectionHeading>Details</SectionHeading>
          <div className="mt-12 grid gap-gutter md:grid-cols-2">
            {project.gallery.map((slot) => (
              <SiteImage key={slot} slot={slot} sizes="(min-width: 768px) 50vw, 100vw" />
            ))}
          </div>
        </div>
      </section>

      {/* Related projects. */}
      <section className="section bg-mist">
        <div className="shell">
          <SectionHeading>Other representative projects</SectionHeading>
          <div className="mt-12 grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProjectCard key={item.slug} project={item} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
