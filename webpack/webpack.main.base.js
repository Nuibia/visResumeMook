const path = require('path');
const webpack = require('webpack');
module.exports = {
  entry: path.resolve(__dirname, '../app/main/electron.ts'),
  output: {
    filename: 'electron.js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'electron-main',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __dirname: '__dirname',
    }),
  ],
};
