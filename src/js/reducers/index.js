import { combineReducers } from 'redux';

import constructorData from 'reducers/constructor-reducer';
import canvas from 'reducers/canvas-reducer';
import canvasActiveItem from 'reducers/canvas-active-item-reducer';
import floors from 'reducers/floor-reducer';

const rootReducer = combineReducers({
  constructorData,
  canvas,
  canvasActiveItem,
  floors,
});

export default rootReducer;