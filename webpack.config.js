const path = require('path')

module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: path.resolve(__dirname, 'assets/js/build'),
    filename: 'main.js',
  }
}
