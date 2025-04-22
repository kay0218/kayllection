/** @type {import('next').NextConfig} */
const isGithubPages = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isGithubPages ? '/kayllection/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
