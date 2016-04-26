import * as types from 'constants/general-types';

export default function(state = 0, action) {

  switch (action.type) {

    case types.FETCH_INITIAL_DATA :
      if(action.payload.canvasObjects) {
        return action.payload.canvasObjects.length;
      }
      else {
        return state;
      }


    case types.FLOOR_ADD : 
      return state + 1;


    case types.FLOOR_REMOVE : 
      if(state > 1) return state - 1;
      return state;


    default :
      return state;
  }

}