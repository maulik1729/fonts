/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  webpack(config){
    config.optimization.minimize = false;
    return config;
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  optimizeFonts: false
}

module.exports = nextConfig
