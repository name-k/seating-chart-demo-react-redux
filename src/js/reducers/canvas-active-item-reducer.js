import * as types from 'constants/general-types';

export default function(state = null, action) {

  switch (action.type) {

    case types.CANVAS_ITEM_SELECTED :
      return {
        id : action.id,
        floorIndex : action.floorIndex
      };


    case types.CANVAS_ITEM_UNSELECTED : 
      return null;
      

    default :
      return state;
  }

}