/**
 * Left-aligned section header: a bronze hairline, the heading, and an optional
 * intro under 40 words.
 *
 * Deliberately no tracked-caps eyebrow. That device is used exactly once on the
 * site, above the home hero — repeating it above every section is the templated
 * default this design is avoiding.
 */
export default function SectionHeading({
  as: Tag = 'h2',
  children,
  intro,
  tone = 'light',
  className = '',
}: {
  as?: 'h2' | 'h3';
  children: React.ReactNode;
  intro?: React.ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        aria-hidden="true"
        className={`h-px w-16 ${tone === 'dark' ? 'bg-bronze-400' : 'bg-bronze-700'}`}
      />
      <Tag
        className={`mt-6 font-display ${Tag === 'h2' ? 'text-h2' : 'text-h3'} font-bold ${
          tone === 'dark' ? 'text-paper' : 'text-ink-900'
        }`}
      >
        {children}
      </Tag>
      {intro ? (
        <p
          className={`measure mt-5 text-lead ${
            tone === 'dark' ? 'text-paper/80' : 'text-graphite'
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
