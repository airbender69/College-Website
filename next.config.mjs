/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://softwarica.edu.np/',
        port: '',
        pathname: '/file-manager/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
