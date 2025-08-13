/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.worldvectorlogo.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
      },
    ],
  },
  experimental: {
    allowedDevOrigins: [
      'https://6000-firebase-studio-1755080472313.cluster-m7dwy2bmizezqukxkuxd55k5ka.cloudworkstations.dev',
      'https://9000-firebase-studio-1755080472313.cluster-m7dwy2bmizezqukxkuxd55k5ka.cloudworkstations.dev',
    ],
  },
};

module.exports = nextConfig;
