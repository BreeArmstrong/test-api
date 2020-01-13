const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'), //creates a new directory for my entry point.
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'index.bundle.js'
  },
  mode: 'development'
};