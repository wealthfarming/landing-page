// next.config.js
module.exports = {
  reactStrictMode: true,
  output: 'export',
  // ↓ tells Next to emit all pages under /landing-page/…
  basePath: '/landing-page',
  // ↓ …and to prefix every JS/CSS/image URL with /landing-page/
  assetPrefix: '/landing-page/',
  // optional, but keeps nice trailing slash URLs
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx$/,
      use: {
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-react'] },
      },
    });
    return config;
  },
}
