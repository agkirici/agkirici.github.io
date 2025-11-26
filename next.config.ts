import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Sanity Studio requires transpilation
  transpilePackages: ['next-sanity'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
