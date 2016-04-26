import * as types from 'constants/general-types';

export default function(state = {}, action) {

  switch (action.type) {

    case types.FETCH_INITIAL_CONFIG :
      return action.payload.constructor.items;

    default :
      return state;
  }

}