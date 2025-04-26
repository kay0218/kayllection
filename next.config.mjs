/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/kayllection",
  assetPrefix: "/kayllection",
};

export default nextConfig;
