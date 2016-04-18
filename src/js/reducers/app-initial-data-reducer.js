import * as APP from 'constants/app-constants';

export default function(state = {}, action) {

  switch (action.type) {

    case APP.FETCH_INITIAL_APP_DATA :
      return action.payload;

    default :
      return state;
  }

}