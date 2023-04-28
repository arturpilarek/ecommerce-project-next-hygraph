/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    hygraph_url: process.env.HYGRAPH_API_URL,
  },
  images: {
    domains: ['media.graphassets.com']
  }
}

module.exports = nextConfig
