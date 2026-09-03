import { Link } from 'next-view-transitions';
import type { Project } from '@/lib/projects';
import { REPRESENTATIVE_BADGE } from '@/lib/projects';
import { getService } from '@/lib/services';
import SiteImage from './SiteImage';
import { ArrowRight } from './Icons';

/**
 * The one place on the site that uses a card.
 *
 * Services are an index list; projects are cards, because here the image does
 * real work. Elevation, a 4px radius and the persistent representative badge
 * belong to this component alone.
 *
 * Hover: image to 1.03, an ink overlay, arrow shifts 4px. Nothing more.
 */
export default function ProjectCard({
  project,
  /**
   * The card title's heading level. Cards sit under a section h2 on Home and
   * on project detail, so h3 is right there. On /projects/ the grid follows the
   * page h1 directly, so the card titles are the h2s and this must be set —
   * otherwise the page skips h1 -> h3.
   */
  headingLevel = 'h3',
}: {
  project: Project;
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  const serviceTitles = project.services
    .map((slug) => getService(slug)?.title)
    .filter((title): title is string => Boolean(title))
    .slice(0, 2);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-card bg-white shadow-elevation">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-200 ease-out group-hover:scale-[1.03]">
          {/* Labels off: the badge, type and title below already name this
              image, and printing the subject twice is noise. Heroes and
              gallery slots keep their labels. */}
          <SiteImage
            slot={project.cardImage}
            hideLabels
            viewTransitionName={`project-${project.slug}`}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-ink-900 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-20"
        />
        <p className="absolute left-0 top-0 m-3 rounded-control bg-paper px-2.5 py-1.5 text-small font-semibold text-ink-900">
          {REPRESENTATIVE_BADGE}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-small font-semibold uppercase tracking-[0.14em] text-bronze-700">
          {project.type}
        </p>
        <Heading className="mt-3 font-display text-h3 font-semibold text-ink-900">
          {/* The whole card is the target; the link stretches over it. */}
          <Link href={`/projects/${project.slug}/`} className="before:absolute before:inset-0">
            {project.title}
          </Link>
        </Heading>
        <p className="mt-3 text-graphite">{project.cardDescription}</p>

        <div className="mt-6 flex items-end justify-between gap-4 border-t border-line pt-5">
          <p className="text-small text-graphite">{serviceTitles.join(' · ')}</p>
          <ArrowRight
            size={20}
            className="shrink-0 text-bronze-700 transition-transform duration-200 ease-out group-hover:translate-x-1"
          />
        </div>
      </div>
    </article>
  );
}
