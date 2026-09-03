import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { assetPath } from '@/lib/assetPath';

/**
 * The firm's own logo.
 *
 * Supplied as a JPEG on a white background, which would have shown as a white
 * box on both the off-white navbar and the dark footer. It is shipped here as
 * two transparent PNGs cropped to the artwork:
 *
 *   /logo.png           the colour lockup, for light grounds
 *   /logo-reversed.png  the same artwork as a paper-white silhouette, for dark
 *
 * Both are 421x186 (2.26:1). Height is set per usage and the width follows.
 */
const LOGO_RATIO = 421 / 186;

export default function Logo({
  variant = 'dark',
  height = 40,
  className = '',
}: {
  /** The ground it sits on: `dark` = ink art on a light ground. */
  variant?: 'dark' | 'light';
  height?: number;
  className?: string;
}) {
  const isLight = variant === 'light';

  return (
    <Image
      src={assetPath(isLight ? '/logo-reversed.png' : '/logo.png')}
      alt={siteConfig.name}
      width={Math.round(height * LOGO_RATIO)}
      height={height}
      priority
      className={`h-auto w-auto ${className}`}
      style={{ height, width: 'auto' }}
    />
  );
}
