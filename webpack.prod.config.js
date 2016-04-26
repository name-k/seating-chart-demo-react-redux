'use strict';


const 
  path    = require('path'),
  webpack = require('webpack');

const config = require('./build.config.js');


let webpackConfig = {
  debug: true,

  context: path.join(__dirname, 'src', 'js'),

  // entry : {
  //   bundle : './src/js/app'
  // },
  entry: [
    './index'
  ],

  output : {
    path       : path.join(__dirname, 'build', 'js'),
    filename   : 'bundle.js',
    publicPath : '/js/',
    // library    : '[name]',
  },

  devtool : null, 

  resolve : {
    root : path.join(__dirname),
    modulesDirectories : ['node_modules', 'src/js'],
    extensions         : ['', '.js']
  },

  resolveLoader : {
    modulesDirectories : ['node_modules'],
    moduleTemplates    : ['*-loader'],
    extensions         : ['', '.js'] 
  },

  module : {
    loaders : [{
      test    : /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'] 
    }],
  },

  plugins : [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV : JSON.stringify(config.flags.mode),
      DEBUG    : JSON.stringify(config.flags.debug)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings     : false,
        drop_console : true,
        unsafe       : true,
      }
    }),
    new webpack.ProvidePlugin({
      React : 'react'
    })

  ],

};

module.exports = webpackConfig;