import * as APP from 'constants/app-constants';
import assign from 'lodash/assign';

export default function(state = [], action) {

  switch (action.type) {

    case APP.FETCH_INITIAL_APP_CONFIG :
      return state.concat(action.payload.constructor.items);

    default :
      return state;
  }

}