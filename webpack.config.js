const path = require('path');

module.exports = {
  entry: ['regenerator-runtime/runtime.js', './client/src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
  devServer: {
    static: './dist',
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }

        }
      }
    ]
  }

};

