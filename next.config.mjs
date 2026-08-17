/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-6d08c79af1b441ba9ae8499c407fd9d0.r2.dev',
      },
    ],
  },
};

export default nextConfig;
