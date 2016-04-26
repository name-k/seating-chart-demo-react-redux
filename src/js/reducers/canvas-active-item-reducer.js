import * as types from 'constants/general-types';

export default function(state = {}, action) {

  switch (action.type) {

    case types.CANVAS_ITEM_SELECTED :
      return {
        id : action.id,
        floorIndex : action.floorIndex
      };


    case types.CANVAS_ITEM_UNSELECTED : 
      return {};
      

    default :
      return state;
  }

}