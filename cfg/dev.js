'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = _.merge({
  entry: [
    `webpack-dev-server/client?http://127.0.0.1:${baseConfig.port}`,
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    './src/index'
  ],
  cache: true,
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css')
  ]
}, baseConfig);

// Add needed loaders
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'react-hot!babel-loader',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
