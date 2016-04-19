import { FETCH_INITIAL_APP_CONFIG } from 'actions/data-api-actions';
import assign from 'lodash/assign';

export default function(state = [], action) {

  switch (action.type) {

    case FETCH_INITIAL_APP_CONFIG :
      return action.payload.constructor.items;

    default :
      return state;
  }

}