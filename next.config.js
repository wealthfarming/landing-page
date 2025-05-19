module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  webpack(config) {
    return config
  },
}
