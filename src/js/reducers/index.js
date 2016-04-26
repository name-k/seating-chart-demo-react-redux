import { combineReducers } from 'redux';

import constructorData from 'reducers/constructor-reducer';
import canvas from 'reducers/canvas-reducer';
import canvasActiveItem from 'reducers/canvas-active-item-reducer';
import floor from 'reducers/floor-reducer';
import floorSelected from 'reducers/floor-selected-reducer';

const rootReducer = combineReducers({
  constructorData,
  canvas,
  canvasActiveItem,
  floor,
  floorSelected
});

export default rootReducer;