import { FETCH_INITIAL_APP_DATA } from 'actions/data-api-actions';
import { CANVAS_ITEM_DATA_UPDATE, CANVAS_ITEM_SELECTED, CANVAS_ITEM_ADD } from 'actions/canvas-actions';

import find from 'lodash/find';
import assign from 'lodash/assign';

export default function(state = [], action) {

  switch (action.type) {

    case FETCH_INITIAL_APP_DATA :
      if(action.payload.canvasObjects) {
        return action.payload.canvasObjects;
      }
      else {
        return state;
      }


    case CANVAS_ITEM_DATA_UPDATE : 
      return state.map((el) => {
        if(el.id == action.id) return assign({}, el, action.data);
        return el;
      });

    case CANVAS_ITEM_SELECTED :
      return state.map((el) => {
        if(el.id == action.id) return assign({}, el, {isLastSelected : true});
        return assign({}, el, {isLastSelected : false});
      });

    case CANVAS_ITEM_ADD : 
      return state.concat(action.data);

    default :
      return state;
  }

}