import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Consider removing this once all ESLint issues are fixed
    ignoreDuringBuilds: true,
  },
  // Add output: 'standalone' for better Vercel deployments
  output: 'standalone',
  // Add image optimization settings
  images: {
    domains: ['lung-auscultation-demo.vercel.app'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
