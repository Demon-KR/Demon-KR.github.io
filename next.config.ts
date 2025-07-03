import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Demon-KR.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Demon-KR.github.io' : '',
};

export default nextConfig;
