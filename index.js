'use strict';

require('trace');
// require('trace');

const
  path                 = require('path'),
  webpack              = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  browserSync          = require('browser-sync').create();
  // browserSync          = require('browser-sync');

const 
  config = require('./build.config'),
  webpackConfig = require('./webpack.config'),
  bundler = webpack(webpackConfig);


browserSync.init({
  server: {
    baseDir   : config.dir.build,
    // directory : true,
    // index     : 'index.html',

    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        // contentBase: path.join(__dirname, '/src/js'),
        stats: {
          colors : true
        },
        // quiet: false,
        // noInfo: false,
        // host: '127.0.0.1',
        // port: 8000,
        // hot: true,
        // filename: 'bundle.js'
      }),
      webpackHotMiddleware(bundler)
    ]
  },
  open      : false,
  notify    : false,
  logLevel  : 'info',
  logPrefix : 'BrowserSync'
  // online    : false, // increases startup time 
});

browserSync.watch(path.join('./build', '**/*.{css,html}'))
  .on('change', browserSync.reload);