const webpackMerge = require('webpack-merge');
const mainBaseConfig = require('./webpack.main.base');
const devConfig = {
  mode: 'development',
};
module.exports = webpackMerge.merge(mainBaseConfig, devConfig);
