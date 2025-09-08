import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  devIndicators: false,
  images: {
    domains: ['https://yzdwpvjuhegcmvcgnooh.supabase.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yzdwpvjuhegcmvcgnooh.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
