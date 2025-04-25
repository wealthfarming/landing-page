// next.config.js
module.exports = {
  reactStrictMode: true,
  output: 'export',

  // 1) when building for GitHub Pages, emit everything under /landing-page
  basePath: '/landing-page',
  assetPrefix: '/landing-page/',

  // 2) disable Next.js’s built-in Image Optimization so <Image> falls back to <img src="…">
  images: {
    unoptimized: true,
  },

  // optional, but nicer URLs with trailing slash
  trailingSlash: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react'] },
      },
    });
    return config;
  },
};
