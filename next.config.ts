import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // devIndicators: false,
  serverExternalPackages: ['websocket'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
      },
    ],
  },
};

export default nextConfig;
