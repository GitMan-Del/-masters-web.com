import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Enable modern image formats for better compression
    formats: ['image/webp', 'image/avif'],
    
    // Define responsive breakpoints for better image sizing
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Allow optimization of images from external domains if needed
    remotePatterns: [
      // Add patterns for external image domains if needed
    ],
    
    // Optimize for performance
    minimumCacheTTL: 31536000, // 1 year cache
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
};

export default nextConfig;
