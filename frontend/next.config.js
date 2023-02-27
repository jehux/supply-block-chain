/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  images: {
    domains: [
      'a0.muscache.com',
      'cdn-icons-png.flaticon.com',
    ],
  },
}

module.exports = nextConfig
