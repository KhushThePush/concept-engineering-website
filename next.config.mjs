/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },  // next/image cannot optimize in a static export
  trailingSlash: true,            // Apache/Hostinger serves /about/ -> /about/index.html
};

export default nextConfig;
