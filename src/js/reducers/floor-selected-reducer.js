import * as types from 'constants/general-types';

export default function(state = 0, action) {

  switch (action.type) {


    case types.FLOOR_CHANGE : 
      return action.data || state;


    default :
      return state;
  }

}