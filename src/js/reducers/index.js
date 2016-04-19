import { combineReducers } from 'redux';

import appData from 'reducers/app-data-reducer';
import appConfig from 'reducers/app-config-reducer';
import constructorObjects from 'reducers/constructor-reducer';
import canvasObjects from 'reducers/canvas-reducer';

const rootReducer = combineReducers({
  appData,
  appConfig,
  constructorObjects,
  canvasObjects,
});

export default rootReducer;