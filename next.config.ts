import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@relume_io/relume-ui'],
  output: 'standalone',
}

export default nextConfig
