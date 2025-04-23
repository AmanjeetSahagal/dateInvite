import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  eslint: {
    // Warning: this will allow ALL lint errors through at build time
    ignoreDuringBuilds: true,
  },
};
