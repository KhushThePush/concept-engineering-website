import Image from 'next/image';
import { getImageSlot, type ImageSlot, type ImageSlotId } from '@/lib/images';
import { assetPath } from '@/lib/assetPath';

/**
 * Renders an image slot.
 *
 * If the slot has a `src`, this is `next/image`. If it does not — which is the
 * case for every slot today — it is a hand-drawn SVG placeholder: a flat
 * two-tone ink field, a blueprint grid, two or three bronze construction lines,
 * and the structural glyph named by the slot. The geometry that is free to
 * vary comes from a hash of the id.
 *
 * Deterministic is the important word. The geometry comes from a hash of the
 * id, never from Math.random, so the server and client render identical markup
 * and hydration does not warn. The wrapper carries the slot's aspect ratio, so
 * nothing shifts on load.
 */

/** FNV-1a, 32-bit. Same id in, same drawing out. */
function hashId(id: string): number {
  let h = 2166136261;
  for (let i = 0; i < id.length; i += 1) {
    h ^= id.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Pull a non-negative value out of the seed. `>>>` matters: a plain `>>` is a
 * signed shift, so any hash above 2^31 comes back negative and the geometry
 * lands off-canvas.
 */
function pick(seed: number, offset: number, range: number): number {
  return (seed >>> offset) % range;
}

const ASPECT_VIEWBOX: Record<string, { w: number; h: number }> = {
  '21/9': { w: 2100, h: 900 },
  '16/9': { w: 1600, h: 900 },
  '4/3': { w: 1200, h: 900 },
  '3/2': { w: 1200, h: 800 },
  '1/1': { w: 1000, h: 1000 },
};

/**
 * The three structural glyphs, drawn in a 100 x 60 space and scaled uniformly
 * into the field. 1.5px strokes that stay 1.5px at any render size.
 */
function Glyph({ variant }: { variant: ImageSlot['glyph'] }) {
  const stroke = {
    fill: 'none',
    stroke: 'var(--paper)',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    vectorEffect: 'non-scaling-stroke' as const,
  };

  if (variant === 'elevation') {
    // Framed elevation — posts, beams, braced end bays.
    return (
      <g {...stroke}>
        <path d="M4 56 H96" />
        <path d="M8 56 V8 M35 56 V8 M65 56 V8 M92 56 V8" />
        <path d="M8 8 H92 M8 32 H92" />
        <path d="M8 32 L35 8 M92 32 L65 8" />
        <path d="M8 56 L35 32 M92 56 L65 32" />
      </g>
    );
  }

  if (variant === 'truss') {
    // Truss — top chord, bottom chord, vertical and diagonal webs.
    return (
      <g {...stroke}>
        <path d="M4 48 H96" />
        <path d="M4 48 L50 10 L96 48" />
        <path d="M27 29 V48 M50 10 V48 M73 29 V48" />
        <path d="M4 48 L27 29 M27 48 L50 29 M73 48 L50 29 M96 48 L73 29" />
        <path d="M27 29 H73" />
      </g>
    );
  }

  // Foundation section — grade line, stem wall, stepped footing, hatch.
  return (
    <g {...stroke}>
      <path d="M4 22 H38 M62 22 H96" />
      <path d="M38 22 V40 M62 22 V40" />
      <path d="M30 40 H70 M30 40 V50 M70 40 V50" />
      <path d="M22 50 H78 M22 50 V58 M78 50 V58" />
      <path d="M14 58 H86" />
      <g opacity="0.5">
        <path d="M18 58 L12 64 M32 58 L26 64 M46 58 L40 64 M60 58 L54 64 M74 58 L68 64 M88 58 L82 64" />
      </g>
    </g>
  );
}

type SiteImageProps = {
  slot: ImageSlotId;
  /** Extra classes on the wrapper. */
  className?: string;
  /** Rendered when the slot has a real `src`. Ignored by the placeholder. */
  sizes?: string;
  /** Set on the single largest above-the-fold image only. */
  priority?: boolean;
  /** Hide the subject/caption labels — used where a badge already labels it. */
  hideLabels?: boolean;
  /** Shared name for the card-to-detail view transition (§8). */
  viewTransitionName?: string;
};

export default function SiteImage({
  slot,
  className = '',
  sizes = '100vw',
  priority = false,
  hideLabels = false,
  viewTransitionName,
}: SiteImageProps) {
  const image = getImageSlot(slot);
  const box = ASPECT_VIEWBOX[image.aspect] ?? ASPECT_VIEWBOX['16/9'];

  // Real photography path. Adding a `src` in lib/images.ts switches to this.
  if (image.src) {
    return (
      <div
        className={`relative overflow-hidden bg-ink-900 ${className}`}
        style={{ aspectRatio: image.aspect.replace('/', ' / '), viewTransitionName }}
      >
        <Image
          src={assetPath(image.src)}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  // The glyph comes from the slot, so the drawing agrees with the alt text.
  // The hash drives only the geometry that is free to vary: the two-tone split
  // and the construction lines.
  const seed = hashId(image.id);

  // Two-tone split: a hard-edged diagonal, never a gradient wash.
  const splitTop = 34 + pick(seed, 3, 22); // 34–55% across the top edge
  const splitBottom = 52 + pick(seed, 8, 26); // 52–77% across the bottom edge

  // Two or three construction lines. Each gets its own hash rather than a
  // shifted slice of one, so later lines keep full entropy.
  const lineCount = 2 + pick(seed, 13, 2);
  const lines = Array.from({ length: lineCount }, (_, i) => {
    const s = hashId(`${image.id}:line:${i}`);
    const startY = 8 + pick(s, 0, 78); // 8–85% down the left edge
    const rise = -30 + pick(s, 7, 60); // -30–29% of height gained across
    return { startY, endY: startY + rise };
  });

  // Glyph box: centred, uniformly scaled, comfortable margins.
  const glyphScale = Math.min((box.w * 0.52) / 100, (box.h * 0.55) / 60);
  const glyphX = (box.w - 100 * glyphScale) / 2;
  // Lifted off centre so the subject/caption labels always have clear field.
  const glyphY = (box.h - 60 * glyphScale) / 2 - box.h * 0.08;

  return (
    <figure
      className={`relative overflow-hidden bg-ink-900 ${className}`}
      style={{ aspectRatio: image.aspect.replace('/', ' / '), viewTransitionName }}
    >
      <svg
        viewBox={`0 0 ${box.w} ${box.h}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={image.alt}
      >
        <rect width={box.w} height={box.h} fill="var(--ink-900)" />
        <polygon
          points={`${(splitTop / 100) * box.w},0 ${box.w},0 ${box.w},${box.h} ${
            (splitBottom / 100) * box.w
          },${box.h}`}
          fill="var(--ink-800)"
        />
        {lines.map((line, i) => (
          <line
            key={i}
            x1={0}
            y1={(line.startY / 100) * box.h}
            x2={box.w}
            y2={(line.endY / 100) * box.h}
            stroke="var(--bronze-400)"
            strokeWidth={1}
            opacity={0.55}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <g transform={`translate(${glyphX} ${glyphY}) scale(${glyphScale})`} opacity={0.62}>
          <Glyph variant={image.glyph} />
        </g>
      </svg>

      {/* Blueprint grid — exact 1px lines at 32px, independent of render size. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-blueprint-strong bg-grid-32"
      />

      {/* Labels as real HTML, so they stay legible at every container size. */}
      {!hideLabels ? (
        <figcaption className="pointer-events-none absolute bottom-0 left-0 p-4 sm:p-5">
          <span className="block font-display text-small font-medium uppercase tracking-[0.14em] text-paper/85">
            {image.subject}
          </span>
          <span className="mt-1 block text-small text-bronze-400">{image.caption}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
