const path = require('path');

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: path.resolve(__dirname, 'assets/js/build'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }]
      }
    ]
  }
};
