import SectionHeading from '@/components/ui/SectionHeading';

/**
 * Short declarative statements in display type, hairline-separated. No numbers,
 * no icons — so it cannot be mistaken for the numbered services index, and it
 * is not a card grid either.
 */
const REASONS = [
  '40+ years of structural and construction experience',
  'Deep expertise in steep-slope, waterfront, and ECA sites',
  'Efficient steel and concrete design that saves time and money',
  'Fast turnaround and responsive communication',
  'Revit-based structural modeling that keeps the trades coordinated',
  'Engineering that aligns with real-world construction methods',
];

export default function WhyClientsChoose({
  background = 'mist',
}: {
  background?: 'paper' | 'mist';
}) {
  return (
    <section className={`section ${background === 'mist' ? 'bg-mist' : 'bg-paper'}`}>
      <div className="shell">
        <SectionHeading>Why clients choose Concept Engineering</SectionHeading>

        <ul className="mt-14 grid border-t border-line md:grid-cols-2">
          {REASONS.map((reason, index) => (
            <li
              key={reason}
              className={[
                'border-b border-line py-7',
                index % 2 === 0 ? 'md:pr-10' : 'md:border-l md:border-line md:pl-10',
              ].join(' ')}
            >
              <p className="font-display text-h3 font-semibold text-ink-900">{reason}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
