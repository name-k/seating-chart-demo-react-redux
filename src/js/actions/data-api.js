import * as APP from 'constants/app-constants';


export function fetchInitialAppData() {

  let initialData = require.ensure('config/saved.data.sample', function() {
    return require('config/saved.data.sample');
  });

  return {
    type : APP.FETCH_INITIAL_APP_DATA,
    data : initialData,
  };
}


export function fetchInitialAppConfig() {

  return {
    type : APP.FETCH_INITIAL_APP_CONFIG,
  };
}