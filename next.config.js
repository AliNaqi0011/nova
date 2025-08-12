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
  allowedDevOrigins: [
    '3000-firebase-studio-1754995737095.cluster-htdgsbmflbdmov5xrjithceibm.cloudworkstations.dev',
    '6000-firebase-studio-1754995737095.cluster-htdgsbmflbdmov5xrjithceibm.cloudworkstations.dev',
  ],
};

module.exports = nextConfig;
