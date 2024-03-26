module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 750 / 10,
      unitPrecision: 3,
      propList: ['*'],
      selectorBlackList: [/^\.html/], //排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 1,
      exclude: /globalsPc/,
    },
  },
};
