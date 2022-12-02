module.exports = {
  //babel
  presets: [
    // 支持react+ts
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ],
  plugins: [
    // 减少冗余代码
    "@babel/plugin-transform-runtime",
    // 将es转换成commonjs
    [
      "@babel/plugin-transform-modules-commonjs",
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
  ],
};
