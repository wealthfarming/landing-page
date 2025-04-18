module.exports = {
  reactStrictMode: true,
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],  // This should match the URL you're using
  },
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
