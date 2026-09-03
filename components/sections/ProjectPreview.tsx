import Link from 'next/link';
import { projects, REPRESENTATIVE_NOTICE } from '@/lib/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionHeading from '@/components/ui/SectionHeading';
import { ArrowRight } from '@/components/ui/Icons';

export default function ProjectPreview() {
  return (
    <section className="section bg-paper">
      <div className="shell">
        <SectionHeading>The kind of work this involves</SectionHeading>

        {/* The representative-content notice. Also carried on /projects, and as
            a persistent badge on every card and detail hero. */}
        <p className="measure mt-6 border-l-2 border-bronze-700 pl-4 text-small text-graphite">
          {REPRESENTATIVE_NOTICE}
        </p>

        <div className="mt-12 grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <Link
          href="/projects/"
          className="group mt-12 inline-flex min-h-[44px] items-center gap-2.5 text-small font-semibold text-bronze-700 transition-colors hover:text-ink-900"
        >
          All six projects
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
