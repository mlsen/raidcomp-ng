var webpack = require('webpack');
var prodConfig   = require('./webpack.prod.config');
Object.assign = require('object-assign');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign(prodConfig, {

  devtool: 'inline-source-map',

  entry:  [
    'webpack-dev-server/client?http://0.0.0.0:8080/',
    'webpack/hot/only-dev-server',
    './src/client'
  ],

  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loaders: ['react-hot', 'babel']
    },
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }]
  },

  devServer: {
    hot: true,
    proxy: {
      '*': 'http://0.0.0.0:' + (process.env.PORT || 3000)
    },
    host: '0.0.0.0'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

});
