'use strict';

require('trace');
// require('trace');

const
  path                 = require('path'),
  webpack              = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  browserSync          = require('browser-sync').create(),
  gulplog              = require('gulplog'),
  notifier             = require('node-notifier');
  // browserSync          = require('browser-sync');

const 
  config = require('../build.config');

let webpackConfig;
if(config.flags.isDev) {
  console.log('dev webpack');
  webpackConfig = require('../webpack.config');
}
else {
  console.log('prod webpack');
  webpackConfig = require('../webpack.prod.config'); 
}

const bundler = webpack(webpackConfig, function(err, stats) {
      if(!err) {
        // soft error catch
        err = stats.toJson().errors[0];
      }

      if(err) {
        notifier.notify({
          title : 'Webpack',
          message : err
        });
        gulplog.error(err);
      }
      else {
        gulplog.info(stats.toString({
          colors       : true,
          hash         : config.flags.debug,
          cached       : config.flags.debug,
          cachedAssets : config.flags.debug,
          chunkOrigins : config.flags.debug,
          chunkModules : config.flags.debug,
          // chunks       : false,
          // assets       : false,
          // version      : false,
          // timings      : false,
        }));
      }

    });

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
      // online : false,
      open      : false,
      notify    : false,
      logLevel  : 'info',
      logPrefix : 'BrowserSync'
    });

    browserSync.watch(path.join(config.dir.build, '**/*.{css,html}'))
      .on('change', browserSync.reload);  
  };
  
};