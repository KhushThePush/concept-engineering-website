/**
 * Prefix a public/ asset path with the deployment's basePath.
 *
 * Needed because next/image leaves `src` untouched when images are
 * unoptimized (which a static export forces), and assetPrefix only covers
 * Next's own _next output — not files served from public/. Without this,
 * every photo and the logo 404 on a GitHub Pages project site.
 *
 * Local builds have an empty basePath, so paths are returned unchanged.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${path}`;
}
