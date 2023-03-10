// scripts/webpack.base.js
const path = require('path');

module.exports = {
  // 入口文件，这里之后会着重强调
  entry: {
    main: path.resolve(__dirname, '../src/component/Home.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
      },
    ],
  },
};