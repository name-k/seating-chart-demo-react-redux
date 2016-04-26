import assign from 'lodash/assign';


export const FETCH_INITIAL_APP_DATA = 'FETCH_INITIAL_APP_DATA';
export const FETCH_INITIAL_APP_CONFIG = 'FETCH_INITIAL_APP_CONFIG';
export const SAVE_APP_DATA = 'SAVE_APP_DATA';


export function fetchInitialAppData() {

  let DataTransfer = require('modules/data-transfer');
  let data = new DataTransfer({cacheName : 'seatingChart'}).getInitialAppData();

  console.log(data);

  return {
    type : FETCH_INITIAL_APP_DATA,
    payload : data
  };
}


export function saveAppData(appRootState, canvasObjects) {
  let savedData = assign({}, appRootState, {canvasObjects});

  let DataTransfer = require('modules/data-transfer');
  new DataTransfer({cacheName : 'seatingChart'}).saveAppData(savedData);
  
  return {
    type : SAVE_APP_DATA,
    state : savedData
  };
}



export function fetchInitialAppConfig() {
  return {
    type : FETCH_INITIAL_APP_CONFIG,
    payload : require('config/constructor.config.sample')
  };

}