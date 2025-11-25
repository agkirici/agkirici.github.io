import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Sanity Studio requires transpilation
  transpilePackages: ['next-sanity'],
};

export default nextConfig;
