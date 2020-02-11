/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
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
    },
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        chunks: ['vendors', 'main'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'auth.html',
        template: './auth.html',
        chunks: ['vendors', 'auth'],
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: '[name].[contentHash].css' }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // 3. Extract css into files
          'css-loader', // 2. Turns css into commonjs
          'sass-loader' // 1. Turns sass into css
        ]
      }
    ]
  }
});
