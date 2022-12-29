/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // async rewrites() {
  //   return [
  //       {
  //         source: '/api/:path*',
  //         destination: `https://acecare.vercel.app/api/:path*`,
  //       }
  //     ]
  // }
}

module.exports = nextConfig
