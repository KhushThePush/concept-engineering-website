import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import { projects } from '@/lib/projects';

/**
 * Static sitemap. No `revalidate`, no runtime data — emitted to
 * out/sitemap.xml at build time, which a static export can serve.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.siteUrl.replace(/\/$/, '');

  const pages = ['', '/about', '/services', '/projects', '/contact'].map((path) => ({
    url: `${base}${path}/`,
    changeFrequency: 'yearly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const projectPages = projects.map((project) => ({
    url: `${base}/projects/${project.slug}/`,
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }));

  return [...pages, ...projectPages];
}
