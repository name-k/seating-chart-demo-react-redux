import * as APP from 'constants/app-constants';


export function fetchInitialAppData() {

  return {
    type : APP.FETCH_INITIAL_APP_DATA,
    payload : require('config/saved-data.sample')
  };
}



export function fetchInitialAppConfig() {

  return {
    type : APP.FETCH_INITIAL_APP_CONFIG,
    payload : require('config/constructor.config.sample')
  };

}