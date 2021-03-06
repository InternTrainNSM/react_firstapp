'use strict';

let path = require('path');
let webpack = require('webpack');
let _ = require('lodash');

let baseConfig = require('./base');

let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = _.merge({
  entry: [
    'bootstrap-loader',
    path.join(__dirname, '../src/index')
  ],
  cache: false,
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css')
  ]
}, baseConfig);

config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

module.exports = config;
