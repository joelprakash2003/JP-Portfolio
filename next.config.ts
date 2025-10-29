import type { NextConfig } from "next";

const basePath = process.env.NODE_ENV === "production" ? "/Resume-Nextjs" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  allowedDevOrigins: ["localhost", "127.0.0.1", "192.168.1.159"],
  devIndicators: false,
};

export default nextConfig;
