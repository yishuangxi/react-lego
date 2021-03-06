/* eslint-disable no-console, import/no-extraneous-dependencies */
const config = require('./config/environment');

const path = require('path');
const Webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./config/webpack.config.dev.js');

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, '..', 'compiled'),
  publicPath: '/dist/',
  hot: true,
  quiet: false,
  noInfo: false,
  stats: {
    colors: true
  }
});

server.listen(config.PORT, '127.0.0.1', () => {
  console.log(`Starting server on http://localhost:${config.PORT}`);
});
