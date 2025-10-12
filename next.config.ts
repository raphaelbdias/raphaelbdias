/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // leave basePath empty since you'll use a custom domain (raphaelbdias.com)
};
export default nextConfig;
