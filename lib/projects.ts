import type { ImageSlotId } from './images';

/**
 * Six REPRESENTATIVE projects.
 *
 * These illustrate the kind of work the firm does. They are not a record of
 * commissions: no dates, no client names, no completion claims, and no
 * statement that Concept Engineering designed them. Every card and detail hero
 * carries a persistent "Representative project" badge, and /projects plus the
 * Home preview each carry a notice line.
 *
 * The project detail page is a single data-driven template. Adding a project is
 * an entry here plus its image slots in lib/images.ts — no new page files.
 */
export type Project = {
  slug: string;
  title: string;
  /** Short category label shown above the title. */
  type: string;
  /** Copy budget: 22 words maximum. */
  cardDescription: string;
  /** Copy budget: 120 words maximum. */
  overview: string;
  structuralConsiderations: string[];
  /** Copy budget: 65 words maximum. */
  engineeringApproach: string;
  /** Copy budget: 65 words maximum. */
  challenges: string;
  /** Copy budget: 65 words maximum. */
  solution: string;
  /** Service slugs from lib/services.ts. */
  services: string[];
  heroImage: ImageSlotId;
  cardImage: ImageSlotId;
  gallery: ImageSlotId[];
};

export const projects = [
  {
    slug: 'modern-waterfront-residence',
    title: 'Modern Waterfront Residence',
    type: 'Waterfront residence',
    cardDescription:
      'Pile-supported foundations and a steel moment frame carrying long glazed spans on a shoreline site with weak bearing soils.',
    overview:
      'A single-family residence on a Puget Sound shoreline, where the architecture wants an open water-facing elevation and the ground will not carry a conventional footing. The structure is a hybrid: driven piles and grade beams below, steel moment frames at the glazed wall, and conventional wood framing everywhere the loads allow it. Shoreline setbacks and Environmentally Critical Area rules constrain where structure can land, so the foundation layout is worked out with the geotechnical engineer before the framing plan is drawn.',
    structuralConsiderations: [
      'Low bearing capacity and a high water table at the shoreline',
      'Shoreline setback and Environmentally Critical Area limits on foundation placement',
      'Long glazed spans on the water elevation with little room for shear wall',
      'Lateral load resistance without a continuous braced line on the water side',
    ],
    engineeringApproach:
      'Carry vertical load on driven piles and grade beams, resist lateral load with steel moment frames at the open elevation, and use conventional wood framing everywhere else. Each material does the job it is cheapest at, rather than one system carrying the whole building.',
    challenges:
      'The water-facing wall is almost entirely glass, so the usual shear walls are unavailable. The setback lines also restrict where piles can be driven, which limits how the foundation can be laid out beneath that same elevation.',
    solution:
      'Two steel moment frames take the lateral load at the glazed wall and transfer it into pile caps set inside the setback line. Frame sizes were tuned against connection cost, so fabrication stayed simple and the wood framing behind it stayed conventional.',
    services: [
      'foundations-and-deep-pile-systems',
      'steel-concrete-and-wood-framing',
      'waterfront-and-steep-slope-solutions',
      'civil-and-geotechnical-coordination',
    ],
    heroImage: 'project-modern-waterfront-residence-hero',
    cardImage: 'project-modern-waterfront-residence-card',
    gallery: [
      'gallery-modern-waterfront-residence-1',
      'gallery-modern-waterfront-residence-2',
    ],
  },
  {
    slug: 'steep-slope-custom-residence',
    title: 'Steep-Slope Custom Residence',
    type: 'Steep-slope residence',
    cardDescription:
      'A custom home stepping down a steep lot on tiered footings, with lateral load carried into the uphill retaining structure.',
    overview:
      'A custom residence on a steep Kirkland-area lot, where the grade drops far enough across the footprint that a single floor level is not practical. The house steps down the slope in three levels, each on its own footing tier, with a restrained retaining wall along the uphill side doing double duty as part of the lateral system. Slope stability governs more of the design than gravity load does, so the geotechnical report drives the foundation layout from the first sketch.',
    structuralConsiderations: [
      'Grade change across the footprint large enough to require stepped levels',
      'Slope stability and surcharge from the uphill grade',
      'Drainage behind the uphill retaining wall',
      'Access for excavation equipment on a constrained lot',
    ],
    engineeringApproach:
      'Step the foundation with the grade rather than cutting a single flat pad, which reduces excavation and the volume of retained soil. Tie each floor diaphragm into the uphill wall so the retaining structure and the lateral system are the same concrete rather than two separate elements.',
    challenges:
      'Stepped floor levels break the continuity a lateral system usually relies on: no single diaphragm runs the full footprint, and the uphill wall carries both soil pressure and building load at the same time.',
    solution:
      'Each level gets its own diaphragm, collected into the uphill wall at every step. The wall is designed as restrained rather than cantilever, which cut its thickness and reinforcement, and drainage was detailed with the civil engineer before the wall sizes were fixed.',
    services: [
      'residential-structural-engineering',
      'retaining-walls-and-shoring-coordination',
      'waterfront-and-steep-slope-solutions',
      'civil-and-geotechnical-coordination',
    ],
    heroImage: 'project-steep-slope-custom-residence-hero',
    cardImage: 'project-steep-slope-custom-residence-card',
    gallery: [
      'gallery-steep-slope-custom-residence-1',
      'gallery-steep-slope-custom-residence-2',
    ],
  },
  {
    slug: 'light-commercial-building',
    title: 'Light Commercial Building',
    type: 'Light commercial',
    cardDescription:
      'A two-storey steel-framed commercial building with clear-span bays, value engineered to cut connection count and fabrication cost.',
    overview:
      'A two-storey light commercial building with ground-floor retail and offices above. The tenant plan needs an open floor plate, so the framing is steel with clear-span bays and a braced core rather than interior bearing walls. The structure was reviewed twice for cost: once at design development against member sizes, and again before bidding against connection detailing, which is where fabrication money is usually spent rather than on the tonnage itself.',
    structuralConsiderations: [
      'Open floor plate with no interior bearing walls available',
      'Lateral system confined to the core and end walls',
      'Fabrication and erection cost driven by connection count, not tonnage',
      'Floor vibration under office occupancy at long spans',
    ],
    engineeringApproach:
      'Use clear-span steel framing with a braced core, then optimise for fabrication rather than weight. Fewer, simpler, repeated connections cost less to detail, fabricate, and erect than a lighter frame with more variety in it.',
    challenges:
      'The first framing scheme met every code requirement and still bid high. The cost was in the connections: too many distinct beam-to-column conditions, each needing its own shop drawing and its own setup.',
    solution:
      'Beam sizes were consolidated into a smaller set of repeated members and the connection types were reduced to three. Steel weight rose slightly; detailing and fabrication hours fell further, and the floor was checked for vibration at the revised spans.',
    services: [
      'light-commercial-structural-engineering',
      'steel-concrete-and-wood-framing',
      'value-engineering-and-cost-optimization',
    ],
    heroImage: 'project-light-commercial-building-hero',
    cardImage: 'project-light-commercial-building-card',
    gallery: [
      'gallery-light-commercial-building-1',
      'gallery-light-commercial-building-2',
    ],
  },
  {
    slug: 'multi-level-hillside-residence',
    title: 'Multi-Level Hillside Residence',
    type: 'Hillside residence',
    cardDescription:
      'Split-level framing across a hillside grade change, modeled in Revit so the structure and architecture resolved before permit.',
    overview:
      'A hillside residence on four half-levels, where every floor meets the grade at a different elevation and no two framing plans repeat. The building was modeled in Revit alongside the architectural model, which is what made the split levels tractable: the connections between diaphragms, retaining walls, and stepped foundations are easier to resolve in three dimensions than on stacked plan sheets. Coordination with the architect ran continuously rather than in review cycles.',
    structuralConsiderations: [
      'Four half-levels with no repeating framing plan',
      'Retaining walls acting as both soil retention and building support',
      'Diaphragm continuity across vertical offsets between levels',
      'Coordination between architectural, structural, and mechanical models',
    ],
    engineeringApproach:
      'Model the structure in Revit against the architect’s model from the start, so every level change is resolved in three dimensions. Treat the retaining walls as part of the building frame rather than as site work drawn on a separate sheet.',
    challenges:
      'Half-level offsets mean floor diaphragms never line up. Each vertical offset is a place where lateral load has to transfer through a wall rather than across a floor, and each one is a different height.',
    solution:
      'The retaining and interior concrete walls were designed as the continuous element that ties the offset diaphragms together. Modeling them alongside the architecture caught the clashes with mechanical routing while both were still on screen.',
    services: [
      'residential-structural-engineering',
      'retaining-walls-and-shoring-coordination',
      'bim-revit-structural-modeling',
      'waterfront-and-steep-slope-solutions',
    ],
    heroImage: 'project-multi-level-hillside-residence-hero',
    cardImage: 'project-multi-level-hillside-residence-card',
    gallery: [
      'gallery-multi-level-hillside-residence-1',
      'gallery-multi-level-hillside-residence-2',
    ],
  },
  {
    slug: 'residential-addition-remodel',
    title: 'Residential Addition & Remodel',
    type: 'Addition and remodel',
    cardDescription:
      'A rear addition and opened main floor in an older home, with new beams and underpinning tied into existing framing.',
    overview:
      'An addition at the rear of an older Puget Sound house, combined with removing two bearing walls on the main floor. Work on an existing building is mostly investigation: what is actually in the walls rarely matches what the original drawings show, and the framing found on site was a mix of original construction and undocumented earlier alterations. The design was developed to tolerate what would be uncovered during demolition rather than to assume the best case.',
    structuralConsiderations: [
      'Existing framing that differs from the original drawings',
      'New foundation meeting an older one at a different depth',
      'Load path from the removed bearing walls down through existing floors',
      'Keeping the house standing and weathertight through the work',
    ],
    engineeringApproach:
      'Design for what demolition is likely to expose, not for the best case. Specify beams and posts with capacity to absorb the usual surprises, and detail the new-to-existing connections so the contractor has an answer on site instead of a phone call.',
    challenges:
      'The load path below the removed bearing walls ran through framing that had already been altered once. The existing foundation also sat shallower than the new addition needed, so the two could not simply be joined.',
    solution:
      'New beams carry the opened main floor into posts landing on new pad footings placed clear of the existing work. The addition foundation was underpinned in sections at the existing wall line so the older structure stayed supported throughout.',
    services: [
      'residential-structural-engineering',
      'foundations-and-deep-pile-systems',
      'construction-support-and-site-review',
    ],
    heroImage: 'project-residential-addition-remodel-hero',
    cardImage: 'project-residential-addition-remodel-card',
    gallery: [
      'gallery-residential-addition-remodel-1',
      'gallery-residential-addition-remodel-2',
    ],
  },
  {
    slug: 'waterfront-structural-retrofit',
    title: 'Waterfront Structural Retrofit',
    type: 'Retrofit',
    cardDescription:
      'Strengthening an existing shoreline structure with supplemental steel and new shear walls, installed with limited site access.',
    overview:
      'An existing waterfront structure needing capacity it was never built for, with the further constraint that a shoreline site leaves almost nowhere to stage material or bring in equipment. Retrofit work is shaped as much by access and sequencing as by the numbers: a member that cannot be carried to where it is needed is not a solution. Existing conditions were surveyed before design so the strengthening scheme suited what was actually there.',
    structuralConsiderations: [
      'Existing capacity below current code demand',
      'Very limited site access and staging area on a shoreline lot',
      'Corrosion and moisture exposure at the existing structure',
      'Sequencing so the structure stays stable during the work',
    ],
    engineeringApproach:
      'Survey the existing structure first, then design the strengthening around what can physically be delivered and installed on the site. Prefer pieces that can be carried in and assembled in place over single large members that need equipment the site cannot take.',
    challenges:
      'The most efficient strengthening scheme on paper needed members longer than could reach the work area. Access, not capacity, set the limit on what the retrofit could use.',
    solution:
      'Supplemental steel was broken into bolted segments sized to be carried in by hand and assembled in place. New shear walls with hold-downs pick up the lateral demand, and the sequence keeps the existing structure stable at every stage.',
    services: [
      'waterfront-and-steep-slope-solutions',
      'steel-concrete-and-wood-framing',
      'construction-support-and-site-review',
    ],
    heroImage: 'project-waterfront-structural-retrofit-hero',
    cardImage: 'project-waterfront-structural-retrofit-card',
    gallery: [
      'gallery-waterfront-structural-retrofit-1',
      'gallery-waterfront-structural-retrofit-2',
    ],
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]['slug'];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** Up to `count` other projects, for the related-projects rail. */
export function getRelatedProjects(slug: string, count = 3): Project[] {
  return projects.filter((project) => project.slug !== slug).slice(0, count);
}

/** The persistent label carried by every card and detail hero. */
export const REPRESENTATIVE_BADGE = 'Representative project';

/** The notice line shown on /projects and in the Home preview. */
export const REPRESENTATIVE_NOTICE =
  'The projects below are representative examples of the firm’s work, shown to illustrate the types of structures and site conditions it handles. They are not a record of specific commissions.';
