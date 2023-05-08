/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    hygraph_url: process.env.HYGRAPH_API_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    domains: ['media.graphassets.com']
  }
}

module.exports = nextConfig
