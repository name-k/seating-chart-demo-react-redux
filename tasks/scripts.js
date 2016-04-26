'use strict';

const 
  gulplog       = require('gulplog'),
  path          = require('path'),
  webpack       = require('webpack'),
  webpackConfig = require('../webpack.prod.config.js'),
  notifier      = require('node-notifier');


module.exports = function(config) {

  return function(callback) {
    webpack(webpackConfig, function(err, stats) {
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

      if(!config.flags.shouldWatch && err) {
        callback(err);
      }
      else {
        callback();
      }

    });
  };
};