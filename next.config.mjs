/**
 * GitHub Pages serves this repo from a subpath:
 *   https://khushthepush.github.io/concept-engineering-website/
 * so the build needs a basePath. It is applied only in CI, which keeps
 * `npm run dev` at plain http://localhost:3000.
 *
 * If a custom domain is added later, drop GITHUB_PAGES from the workflow and
 * the basePath disappears — the site then serves from the root.
 */
const basePath = process.env.GITHUB_PAGES === 'true' ? '/concept-engineering-website' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },  // next/image cannot optimize in a static export
  trailingSlash: true,            // Apache/Hostinger serves /about/ -> /about/index.html
  basePath,
  assetPrefix: basePath || undefined,
  /**
   * next/image does NOT prepend basePath to `src` when images are unoptimized,
   * and files in public/ are not covered by assetPrefix either. Expose the
   * prefix so lib/assetPath.ts can apply it to public/ assets by hand.
   */
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
