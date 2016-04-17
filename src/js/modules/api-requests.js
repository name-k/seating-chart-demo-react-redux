export default class Api {

  constructor(options) {
    this.cacheName = options.cacheName || 'test';
  }

  getConstructorObjects() {
    const config = require.ensure(['config/constructor.config.sample'], function() {
      return require('config/constructor.config.sample');
    });
    return config;
  }

  saveChartData(data = '') {
    if(data && typeof data == 'object') {
      console.log('Save data -', data);
      data = JSON.stringify(data);
    }
    else if (!data) {
      console.error('Saved empty data');
    }
    localStorage.setItem(this.cacheName, data);
  }

  getChartData() {
    let cached = localStorage.getItem(this.cacheName);
    if(cached) {
      if(JSON.parse(cached)) {
        return JSON.parse(cached);
      }
      else {
        return cached;
      }
    } 
    else {
      return false;
    }
  }

}
