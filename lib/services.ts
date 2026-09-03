import type { ProjectSlug } from './projects';

/** Keys into the hand-authored icon set in components/ui/ServiceIcon.tsx. */
export type ServiceIconKey =
  | 'residential'
  | 'commercial'
  | 'framing'
  | 'foundation'
  | 'retaining'
  | 'value'
  | 'construction'
  | 'bim'
  | 'waterfront'
  | 'coordination';

export type Service = {
  slug: string;
  title: string;
  /** Copy budget: 35 words maximum. */
  description: string;
  icon: ServiceIconKey;
  /** A project where this service did real work, when one fits. */
  relatedProject?: ProjectSlug;
};

export const services: Service[] = [
  {
    slug: 'residential-structural-engineering',
    title: 'Residential structural engineering',
    description:
      'Framing, foundations, and lateral systems for new homes, custom residences, and additions. Drawings and calculations a framer can build from without stopping to call with questions.',
    icon: 'residential',
    relatedProject: 'steep-slope-custom-residence',
  },
  {
    slug: 'light-commercial-structural-engineering',
    title: 'Light commercial structural engineering',
    description:
      'Structural design for small commercial, mixed-use, and tenant improvement work. Steel and concrete framing sized for the loads, the budget, and the schedule the project actually has.',
    icon: 'commercial',
    relatedProject: 'light-commercial-building',
  },
  {
    slug: 'steel-concrete-and-wood-framing',
    title: 'Steel, concrete, and wood framing',
    description:
      'Design in all three materials, chosen by what the span, the site, and the cost model call for. Often the answer is a mix rather than one system.',
    icon: 'framing',
    relatedProject: 'modern-waterfront-residence',
  },
  {
    slug: 'foundations-and-deep-pile-systems',
    title: 'Foundations and deep pile systems',
    description:
      'Spread footings, mat slabs, pin piles, and driven pile systems for poor soils, high water tables, and the shoreline ground conditions common around the Puget Sound.',
    icon: 'foundation',
    relatedProject: 'modern-waterfront-residence',
  },
  {
    slug: 'retaining-walls-and-shoring-coordination',
    title: 'Retaining walls and shoring coordination',
    description:
      'Cantilever, restrained, and tiered retaining walls, plus shoring coordination with the contractor and geotechnical engineer before excavation starts rather than after.',
    icon: 'retaining',
    relatedProject: 'multi-level-hillside-residence',
  },
  {
    slug: 'value-engineering-and-cost-optimization',
    title: 'Value engineering and cost optimization',
    description:
      'A second look at member sizes, connection counts, and material choices to cut cost without cutting capacity. Applied during design, at permit, and again while bidding.',
    icon: 'value',
    relatedProject: 'light-commercial-building',
  },
  {
    slug: 'construction-support-and-site-review',
    title: 'Construction support and site review',
    description:
      'Site visits, RFI responses, and field fixes during construction. Ali has built as well as designed, so questions from the field get answered in the field crew’s terms.',
    icon: 'construction',
    relatedProject: 'residential-addition-remodel',
  },
  {
    slug: 'bim-revit-structural-modeling',
    title: 'BIM and Revit structural modeling',
    description:
      'Revit structural models coordinated against the architectural and mechanical models, so clashes surface on screen during design instead of in the field during framing.',
    icon: 'bim',
    relatedProject: 'multi-level-hillside-residence',
  },
  {
    slug: 'waterfront-and-steep-slope-solutions',
    title: 'Waterfront and steep-slope solutions',
    description:
      'Structures on shorelines, bluffs, and Environmentally Critical Areas, where setbacks, slope stability, and site access shape the structural system as much as the loads do.',
    icon: 'waterfront',
    relatedProject: 'waterfront-structural-retrofit',
  },
  {
    slug: 'civil-and-geotechnical-coordination',
    title: 'Civil and geotechnical coordination',
    description:
      'Working directly with civil and geotechnical engineers so bearing recommendations, drainage, and site grading agree with the structure before the permit set goes out the door.',
    icon: 'coordination',
    relatedProject: 'steep-slope-custom-residence',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
