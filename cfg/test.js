'use strict';

let path = require('path');
let srcPath = path.join(__dirname, '/../src');
let webpack = require('webpack');
let baseConfig = require('./base');

module.exports = {
  devtool: 'eval',
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'isparta-instrumenter-loader',
        include: [
          path.join(__dirname, '/../src')
        ]
      }
    ],
    loaders: baseConfig.module.loaders.concat([
      {
        test: /\.(png|jpg|gif|woff|woff2|sass|scss|less|styl)$/,
        loader: 'null-loader'
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [].concat(
          baseConfig.additionalPaths,
          [
            path.join(__dirname, '/../src'),
            path.join(__dirname, '/../test')
          ]
        )
      }
    ])
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      actions: srcPath + '/actions/',
      helpers: path.join(__dirname, '/../test/helpers'),
      'components/LoanInfo/SectionInfo/mappings': path.join(__dirname, '/../test/components/LoanInfo/SectionInfo/mappings'),
      components: srcPath + '/components/',
      containers: srcPath + '/containers/',
      selectors: srcPath + '/selectors/',
      sources: srcPath + '/sources/',
      stores: path.join(__dirname, '/../test/stores'),
      styles: srcPath + '/styles/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV,
      utils: srcPath + '/utils/',
      reducers: srcPath + '/reducers/'
    }
  },
  plugins: [
    new webpack.IgnorePlugin(/ReactContext/)
  ]
};
