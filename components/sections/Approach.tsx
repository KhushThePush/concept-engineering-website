import SectionHeading from '@/components/ui/SectionHeading';

/**
 * Shared approach content, rendered in two tones.
 *
 * `dark` is the Home band that §6 pins to navy — the one dark section in the
 * body of the site, and the second of the two carrying the blueprint grid.
 * It is a material (ink with drafting linework), not an inverted copy of the
 * light sections. `light` is the About rendering, where nothing pins a tone
 * and the page should stay bright.
 */
const PRIORITIES = [
  {
    title: 'Construction-friendly design',
    body: 'Details that a crew can build without an RFI, using methods and materials the local trades already work with.',
  },
  {
    title: 'Value engineering at every stage',
    body: 'Member sizes and connection counts reviewed during design, at permit, and again while the project is out to bid.',
  },
  {
    title: 'Clear communication and responsiveness',
    body: 'Questions answered while they still matter, in terms the person asking can act on.',
  },
  {
    title: 'Practical solutions for challenging sites',
    body: 'Steep slopes, shorelines, and poor soils handled with schemes that suit the access and the ground, not just the loads.',
  },
  {
    title: 'Efficient detailing',
    body: 'Fewer, simpler, repeated details — the reliable way to take cost and complexity out of a structure.',
  },
];

export default function Approach({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  const dark = tone === 'dark';

  return (
    <section
      className={
        dark
          ? 'on-dark relative overflow-hidden bg-ink-900 text-paper'
          : 'relative overflow-hidden bg-paper text-ink-900'
      }
    >
      {dark ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-blueprint bg-grid-32"
        />
      ) : null}
      <div className="section relative">
        <div className="shell">
          <SectionHeading
            tone={tone}
            intro="The firm works with architects, civil and geotechnical engineers, and contractors so projects move from concept through construction without stalling."
          >
            Great engineering is more than calculations
          </SectionHeading>

          <ol className={`mt-14 border-t ${dark ? 'border-line-dark' : 'border-line'}`}>
            {PRIORITIES.map((priority, index) => (
              <li
                key={priority.title}
                className={`grid gap-2 border-b py-7 md:grid-cols-12 md:gap-gutter ${
                  dark ? 'border-line-dark' : 'border-line'
                }`}
              >
                <div className="flex items-baseline gap-4 md:col-span-5">
                  <span
                    aria-hidden="true"
                    className={`font-display text-small font-semibold tabular-nums tracking-[0.1em] ${
                      dark ? 'text-bronze-400' : 'text-bronze-700'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={`font-display text-h3 font-semibold ${
                      dark ? 'text-paper' : 'text-ink-900'
                    }`}
                  >
                    {priority.title}
                  </h3>
                </div>
                <p
                  className={`measure md:col-span-7 ${dark ? 'text-paper/75' : 'text-graphite'}`}
                >
                  {priority.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
