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
  config = require('../build.config'),
  webpackConfig = require('../webpack.config'),
  bundler = webpack(webpackConfig);

module.exports = function(options) {
  return function() {
    browserSync.init({
      server: {
        baseDir   : config.dir.build,
        directory : true,
        middleware: [
          webpackDevMiddleware(bundler, {
            publicPath: webpackConfig.output.publicPath,
            stats: {
              colors       : true,
              hash         : false,
              cached       : false,
              cachedAssets : false,
              chunkOrigins : false,
              chunkModules : false,
            },
          }),
          webpackHotMiddleware(bundler)
        ]
      },
      open      : false,
      notify    : false,
      logLevel  : 'info',
      logPrefix : 'BrowserSync'
    });

    browserSync.watch(path.join(config.dir.build, '**/*.{css,html}'))
      .on('change', browserSync.reload);  
  };
  
};