/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self' https://*.vercel.app https://*.vercel.com https://*.vusercontent.net; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel.app https://*.vercel.com https://*.vusercontent.net;"
          }
        ]
      }
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    // Disable source map generation in production
    if (process.env.NODE_ENV === 'production') {
      config.devtool = false;
    }
    
    return config;
  },
  // Add this to handle the 400 errors
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://your-api-url.com/:path*',
      },
    ]
  },
}

module.exports = nextConfig


