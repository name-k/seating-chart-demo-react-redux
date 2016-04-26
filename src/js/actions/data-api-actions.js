import * as types from 'constants/general-types';

import assign from 'lodash/assign';


export function fetchInitialData() {

  let DataTransfer = require('modules/data-transfer');
  let data = new DataTransfer({cacheName : 'seatingChart'}).getInitialAppData();

  return {
    type : types.FETCH_INITIAL_DATA,
    payload : data
  };
}


export function saveAppData(appRootState, canvasObjects) {
  let savedData = assign({}, appRootState, {canvasObjects});

  let DataTransfer = require('modules/data-transfer');
  new DataTransfer({cacheName : 'seatingChart'}).saveAppData(savedData);
  
  return {
    type : types.SAVE_DATA,
    state : savedData
  };
}



export function fetchInitialConfig() {
  return {
    type : types.FETCH_INITIAL_CONFIG,
    payload : require('config/constructor.config.sample')
  };

}