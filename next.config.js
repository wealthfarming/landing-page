// next.config.js
module.exports = {
  reactStrictMode: true,
  output: 'export',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.jsx/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react']
        }
      }
    });
    return config;
  },
};
