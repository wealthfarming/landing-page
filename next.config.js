// next.config.js

module.exports = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/landing-page',
  assetPrefix: '/landing-page/',
  trailingSlash: true,

  // ← disable the optimizer so <Image> falls back to plain <img src="…">
  images: {
    unoptimized: true,
  },

  webpack(config) {
    // …your existing babel-loader tweak…
    return config
  },
}
