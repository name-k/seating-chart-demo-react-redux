import { combineReducers } from 'redux';

import appData from 'reducers/app-initial-data-reducer';
import appConfig from 'reducers/app-initial-config-reducer';
import constructorObjects from 'reducers/constructor-objects-reducer';
import canvasObjects from 'reducers/canvas-objects-list-reducer';

const rootReducer = combineReducers({
  appData,
  appConfig,
  constructorObjects,
  canvasObjects,
});

export default rootReducer;