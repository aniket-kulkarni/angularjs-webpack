/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  output: {
    publicPath: 'user',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'user'),
    port: 8445,
    openPage: 'user',
    open: true
  },
  devtool: 'eval-source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      chunks: ['vendors', 'main']
    }),
    new HtmlWebpackPlugin({
      filename: 'auth.html',
      template: './auth.html',
      chunks: ['vendors', 'auth']
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // 3. Inject styles into DOM
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  }
});
