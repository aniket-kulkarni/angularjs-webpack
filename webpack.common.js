/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    auth: './auth.js'
  },
  plugins: [
    new CopyPlugin([{ from: './locale', to: 'locale', ignore: ['!*.json'] }])
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
