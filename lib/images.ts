/**
 * Every image slot on the site.
 *
 * SWAPPING IN REAL PHOTOGRAPHY: add a `src` to a slot (e.g. `/photos/hero.jpg`,
 * a file placed under `public/`). `SiteImage` then renders `next/image` instead
 * of the SVG placeholder. That is the only edit required, and it happens here.
 */
export type ImageSlot = {
  /** Stable id. Also seeds the placeholder's deterministic geometry. */
  id: string;
  /** Real, descriptive alt text — written now, correct for the real photo too. */
  alt: string;
  aspect: '21/9' | '16/9' | '4/3' | '3/2' | '1/1';
  /**
   * Which structural glyph the placeholder draws. Set explicitly so the drawing
   * matches the alt text and subject — an elevation slot must not render a
   * foundation section. Line angles and the two-tone split still come from a
   * hash of the id.
   */
  glyph: 'elevation' | 'truss' | 'foundation';
  /** Small label rendered in bronze at the placeholder's bottom-left. */
  caption: string;
  /** Subject line rendered in small caps at the placeholder's bottom-left. */
  subject: string;
  /** Undefined today. Set to a real photo path to switch to next/image. */
  src?: string;
};

export const imageSlots = {
  'home-hero': {
    id: 'home-hero',
    glyph: 'elevation',
    alt: 'Structural framing elevation of a timber and steel residence',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Framed elevation — timber and steel',
  },
  'about-hero': {
    id: 'about-hero',
    glyph: 'foundation',
    alt: 'Foundation section drawing showing a stepped footing on sloping ground',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Foundation section — stepped footing',
  },
  'services-hero': {
    id: 'services-hero',
    glyph: 'truss',
    alt: 'Roof truss elevation showing top chord, bottom chord and web members',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Truss elevation — clear span',
  },
  'projects-hero': {
    id: 'projects-hero',
    glyph: 'elevation',
    alt: 'Multi-level structural frame elevation on a sloping site',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Frame elevation — stepped levels',
  },
  'contact-hero': {
    id: 'contact-hero',
    glyph: 'elevation',
    alt: 'Moment frame elevation showing column and beam connections',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Moment frame — connection detail',
  },

  // Project heroes — one per slug in lib/projects.ts
  'project-modern-waterfront-residence-hero': {
    id: 'project-modern-waterfront-residence-hero',
    glyph: 'elevation',
    alt: 'Structural frame elevation of a waterfront residence on pile-supported foundations',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Waterfront residence — structural frame',
  },
  'project-steep-slope-custom-residence-hero': {
    id: 'project-steep-slope-custom-residence-hero',
    glyph: 'foundation',
    alt: 'Section drawing of a custom residence stepping down a steep slope',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Steep-slope residence — stepped section',
  },
  'project-light-commercial-building-hero': {
    id: 'project-light-commercial-building-hero',
    glyph: 'truss',
    alt: 'Steel frame elevation of a light commercial building with clear-span bays',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Light commercial — steel frame',
  },
  'project-multi-level-hillside-residence-hero': {
    id: 'project-multi-level-hillside-residence-hero',
    glyph: 'elevation',
    alt: 'Elevation of a multi-level hillside residence on stepped retaining foundations',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Hillside residence — stepped levels',
  },
  'project-residential-addition-remodel-hero': {
    id: 'project-residential-addition-remodel-hero',
    glyph: 'elevation',
    alt: 'Framing elevation showing a new addition tied into an existing residence',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Addition — new frame at existing wall',
  },
  'project-waterfront-structural-retrofit-hero': {
    id: 'project-waterfront-structural-retrofit-hero',
    glyph: 'elevation',
    alt: 'Section showing retrofit reinforcement added to an existing waterfront structure',
    aspect: '16/9',
    caption: 'Representative image',
    subject: 'Retrofit — reinforced existing frame',
  },

  // Project cards — 3/2, used in the projects grid and the Home preview
  'project-modern-waterfront-residence-card': {
    id: 'project-modern-waterfront-residence-card',
    glyph: 'elevation',
    alt: 'Waterfront residence structural frame over pile-supported foundations',
    aspect: '3/2',
    caption: 'Representative image',
    subject: 'Waterfront residence',
  },
  'project-steep-slope-custom-residence-card': {
    id: 'project-steep-slope-custom-residence-card',
    glyph: 'foundation',
    alt: 'Custom residence framing stepping down a steep slope',
    aspect: '3/2',
    caption: 'Representative image',
    subject: 'Steep-slope residence',
  },
  'project-light-commercial-building-card': {
    id: 'project-light-commercial-building-card',
    glyph: 'truss',
    alt: 'Light commercial steel frame with clear-span bays',
    aspect: '3/2',
    caption: 'Representative image',
    subject: 'Light commercial building',
  },
  'project-multi-level-hillside-residence-card': {
    id: 'project-multi-level-hillside-residence-card',
    glyph: 'elevation',
    alt: 'Multi-level hillside residence on stepped retaining foundations',
    aspect: '3/2',
    caption: 'Representative image',
    subject: 'Hillside residence',
  },
  'project-residential-addition-remodel-card': {
    id: 'project-residential-addition-remodel-card',
    glyph: 'elevation',
    alt: 'Addition framing tied into an existing residence',
    aspect: '3/2',
    caption: 'Representative image',
    subject: 'Addition and remodel',
  },
  'project-waterfront-structural-retrofit-card': {
    id: 'project-waterfront-structural-retrofit-card',
    glyph: 'elevation',
    alt: 'Retrofit reinforcement added to an existing waterfront structure',
    aspect: '3/2',
    caption: 'Representative image',
    subject: 'Waterfront retrofit',
  },

  // Project detail galleries — 4/3, two per project
  'gallery-modern-waterfront-residence-1': {
    id: 'gallery-modern-waterfront-residence-1',
    glyph: 'foundation',
    alt: 'Pile cap and grade beam detail at the waterfront foundation',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Pile cap and grade beam',
  },
  'gallery-modern-waterfront-residence-2': {
    id: 'gallery-modern-waterfront-residence-2',
    glyph: 'elevation',
    alt: 'Steel moment frame at the water-facing glazed elevation',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Moment frame at glazing',
  },
  'gallery-steep-slope-custom-residence-1': {
    id: 'gallery-steep-slope-custom-residence-1',
    glyph: 'foundation',
    alt: 'Stepped footing detail following the slope grade',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Stepped footing on grade',
  },
  'gallery-steep-slope-custom-residence-2': {
    id: 'gallery-steep-slope-custom-residence-2',
    glyph: 'elevation',
    alt: 'Lateral bracing detail at the downhill wall',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Downhill lateral bracing',
  },
  'gallery-light-commercial-building-1': {
    id: 'gallery-light-commercial-building-1',
    glyph: 'foundation',
    alt: 'Steel column base plate and anchor bolt detail',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Column base plate',
  },
  'gallery-light-commercial-building-2': {
    id: 'gallery-light-commercial-building-2',
    glyph: 'truss',
    alt: 'Long-span roof framing over the open floor plate',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Long-span roof framing',
  },
  'gallery-multi-level-hillside-residence-1': {
    id: 'gallery-multi-level-hillside-residence-1',
    glyph: 'foundation',
    alt: 'Retaining wall and floor diaphragm connection detail',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Retaining wall at diaphragm',
  },
  'gallery-multi-level-hillside-residence-2': {
    id: 'gallery-multi-level-hillside-residence-2',
    glyph: 'elevation',
    alt: 'Split-level floor framing across the hillside grade change',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Split-level floor framing',
  },
  'gallery-residential-addition-remodel-1': {
    id: 'gallery-residential-addition-remodel-1',
    glyph: 'elevation',
    alt: 'New beam and post carrying a removed bearing wall',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Beam at removed bearing wall',
  },
  'gallery-residential-addition-remodel-2': {
    id: 'gallery-residential-addition-remodel-2',
    glyph: 'foundation',
    alt: 'Foundation underpinning detail at the existing wall line',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Underpinning at existing wall',
  },
  'gallery-waterfront-structural-retrofit-1': {
    id: 'gallery-waterfront-structural-retrofit-1',
    glyph: 'elevation',
    alt: 'Supplemental steel added to an existing timber frame',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Supplemental steel at timber',
  },
  'gallery-waterfront-structural-retrofit-2': {
    id: 'gallery-waterfront-structural-retrofit-2',
    glyph: 'elevation',
    alt: 'New shear wall and hold-down detail in the existing structure',
    aspect: '4/3',
    caption: 'Representative image',
    subject: 'Shear wall and hold-downs',
  },
} as const satisfies Record<string, ImageSlot>;

export type ImageSlotId = keyof typeof imageSlots;

export function getImageSlot(id: ImageSlotId): ImageSlot {
  return imageSlots[id];
}
