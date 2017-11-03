/**
 * Created by joe on 11/3/17.
 */
var webpack = require('webpack');
var path = require('path');

var DIR_SRC = path.join(__dirname, 'src');
var DIR_DIST = path.join(__dirname, 'dist');

var config = {
  entry: DIR_SRC + '/app/index.js',
  output: {
    path: DIR_DIST + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: DIR_SRC,
        loader: "babel-loader",
        query: {
          presets: ['react', 'es2015', 'stage-2']
        }
      }
    ]
  }
}

module.exports = config;