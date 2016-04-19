import { FETCH_INITIAL_APP_DATA } from 'actions/data-api-actions';
import { SAVE_APP_DATA } from 'actions/data-api-actions';

export default function(state = {}, action) {

  switch (action.type) {

    case FETCH_INITIAL_APP_DATA :
      return action.payload;

    case SAVE_APP_DATA :
      return action.state;


    default :
      return state;
  }

}