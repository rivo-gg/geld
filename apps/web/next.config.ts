import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ['@rivo-gg/ui'],
  reactStrictMode: true,
};

export default nextConfig;
