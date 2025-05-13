module.exports = {
    reactStrictMode: true,
    images: {
      domains: ['dev.be.landing.wealthfarming.org'],
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
  