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
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index'
  ],

  output : {
    path       : path.join(__dirname, 'build', 'js'),
    filename   : 'bundle.js',
    publicPath : '/js/',
    // library    : '[name]',
  },

  // watch : config.flags.shouldWatch, 

  // watchOptions : {
  //   aggregateTimeout : 100, 
  // },

  devtool : config.flags.isDev ? 'cheap-module-inline-source-map' : null, 
  // devtool: config.flags.isDev ? '#eval-source-map' : null,

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
      // include : path.join(process.cwd(), config.dir.js),
      exclude: /node_modules/,
      // loader  : 'babel?presets[]=es2015',
      // loaders: ['react-hot', 'babel?presets[]=es2015'] 
      loaders: ['react-hot', 'babel'] 
    }],
  },

  plugins : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV : JSON.stringify(config.flags.mode),
      DEBUG    : JSON.stringify(config.flags.debug)
    }),
    new webpack.ProvidePlugin({
      React : 'react'
    })

  ],

};

if(config.flags.isProd) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress : {
        warnings     : false,
        drop_console : true,
        unsafe       : true,
      }
    })
  );
}

module.exports = webpackConfig;