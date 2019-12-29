const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({template: './src/index.html'})
  ],
  devServer: {
    // what behaves as a public directory is defined by contentBase
    contentBase: path.resolve(__dirname, './public'),
    compress: true,
    port: 9000
  },
  mode: 'development'
};
