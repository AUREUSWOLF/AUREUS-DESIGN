/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/AUREUS-DESIGN',     // ← MUST match your repo name exactly (case-sensitive)
  images: {
    unoptimized: true,
  },
  trailingSlash: true,             // helps with GitHub Pages routing
};

export default nextConfig;
