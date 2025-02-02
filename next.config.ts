import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Harici görsel domainleri buraya eklenecek
  },
  webpack: (config, { isServer }) => {
    // Bundle analizi yapılandırması
    if (process.env.ANALYZE === 'true') {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      )
    }
    return config
  },
}

export default nextConfig
