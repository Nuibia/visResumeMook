const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {
  mode: "development",
  entry: {
    index: path.resolve(__dirname, "../app/renderer/app.tsx"),
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  target: "electron-renderer",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    compress: true,
    host: "127.0.0.1",
    port: 7001,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../app/renderer/index.html"),
      filename: path.resolve(__dirname, "../dist/index.html"),
      chunks: ["index"],
    }),
  ],
};

module.exports = webpackMerge.merge(baseConfig, devConfig);