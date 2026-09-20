/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ⚠️ Build sırasında ESLint hatalarını yok say
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ⚠️ Build sırasında TypeScript tip hatalarını yok say
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;