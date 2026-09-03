import type { ServiceIconKey } from '@/lib/services';

/**
 * Hand-authored line icons — one per service. 24px, 1.5px strokes,
 * `currentColor`, decorative (the service title carries the meaning).
 *
 * Drawn from structural subjects rather than a generic icon set: a gable frame,
 * an I-beam elevation, a pile through a grade line, a stepped retaining wall,
 * a plumb bob, coordinated drawing sheets.
 */
const PATHS: Record<ServiceIconKey, React.ReactNode> = {
  // Gable frame with ridge post
  residential: (
    <>
      <path d="M3 11 L12 4 L21 11" />
      <path d="M5.5 10 V20 H18.5 V10" />
      <path d="M12 20 V11" />
    </>
  ),
  // Two-storey block with a floor line and bays
  commercial: (
    <>
      <path d="M3 20 H21" />
      <path d="M5 20 V7 H13 V20" />
      <path d="M13 11 H19.5 V20" />
      <path d="M5 13.5 H13" />
    </>
  ),
  // I-beam elevation — flanges and web
  framing: (
    <>
      <path d="M5 5 H19" />
      <path d="M5 19 H19" />
      <path d="M12 5 V19" />
      <path d="M8 8.5 H16" />
      <path d="M8 15.5 H16" />
    </>
  ),
  // Pile through a grade line, into a cap
  foundation: (
    <>
      <path d="M3 8 H21" />
      <path d="M12 3 V17" />
      <path d="M8 17 H16" />
      <path d="M5 21 L7 18 M10 21 L12 18 M15 21 L17 18" />
    </>
  ),
  // Stepped retaining wall holding back grade
  retaining: (
    <>
      <path d="M3 20 H21" />
      <path d="M6 20 V13 H12 V8 H18 V4" />
      <path d="M4 17 L6 15 M4 12 L7 9 M9 11 L12 8" opacity="0.55" />
    </>
  ),
  // Load arrow reducing through a beam
  value: (
    <>
      <path d="M4 8 H20" />
      <path d="M4 11 H20" />
      <path d="M12 14 V20" />
      <path d="M9 17 L12 20 L15 17" />
    </>
  ),
  // Plumb bob on a line
  construction: (
    <>
      <path d="M12 3 V12" />
      <path d="M7 3 H17" />
      <path d="M8.5 12 H15.5 L12 21 Z" />
    </>
  ),
  // Isometric wireframe volume
  bim: (
    <>
      <path d="M12 3 L20 7.5 V16.5 L12 21 L4 16.5 V7.5 Z" />
      <path d="M12 12 L20 7.5 M12 12 L4 7.5 M12 12 V21" />
    </>
  ),
  // Bluff meeting the waterline
  waterfront: (
    <>
      <path d="M3 5 L11 14 H21" />
      <path d="M3 18 c2.5 -2 4.5 -2 7 0 s4.5 2 7 0 s3 -1 4 -0.4" />
      <path d="M6 9 L9 12" opacity="0.55" />
    </>
  ),
  // Two coordinated drawing sheets
  coordination: (
    <>
      <path d="M4 4 H14 V14 H4 Z" />
      <path d="M10 10 H20 V20 H10 Z" />
    </>
  ),
};

export default function ServiceIcon({
  name,
  className = '',
}: {
  name: ServiceIconKey;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {PATHS[name]}
    </svg>
  );
}
