module.exports = {
  entry: './assets/js/src/main.js',
  output: {
    path: __dirname + '/assets/js/build',
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
