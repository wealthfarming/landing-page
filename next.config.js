module.exports = {
  reactStrictMode: true,
  output: 'export',
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
