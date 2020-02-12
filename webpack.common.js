/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

const contextPath = 'user';

const webpackConfig = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    auth: './auth.js'
  },
  plugins: [
    new CopyPlugin([{ from: './locale', to: 'locale', ignore: ['!*.json'] }]),
    /*
     * The LOCAL_BASE has been added because we are serving our files from the user subdirectory.
     * Assets like js,css and images have already taken care by webpack.
     * Webpack handles rewriting all the URLs to public path.
     * However i18n is handled by angular-translate which does not handle URL rewriting to publicPath.
     * Hence this is handled in code.
     */
    new webpack.DefinePlugin({
      LOCALE_BASE: JSON.stringify(`${contextPath}/`)
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs'
          }
        }
      }
    ]
  }
};

module.exports.webpackConfig = webpackConfig;
module.exports.contextPath = contextPath;
