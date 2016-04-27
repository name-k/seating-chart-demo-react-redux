import * as types from 'constants/general-types';

import find from 'lodash/find';
import assign from 'lodash/assign';

export default function(layers = [[]], action) {


  switch (action.type) {

    case types.FETCH_INITIAL_DATA :
      if(action.payload.canvasLayers) {
        return action.payload.canvasLayers;
      }
      else {
        return layers;
      }



    case types.CANVAS_ITEM_ADD : {
      let currentLayer = layers[action.floorIndex];
      let newLayer = [...currentLayer, action.data];
      return [
        ...layers.slice(0, action.floorIndex),
        newLayer,
        ...layers.slice(action.floorIndex + 1)
      ];
    }
    


    case types.CANVAS_ITEM_UPDATE : {
      let currentLayer = layers[action.floorIndex];
      let updatedLayer = currentLayer.map((el) => {
        if(el.id == action.id) return {...el, ...action.data};
        return el;
      });

      return [
        ...layers.slice(0, action.floorIndex),
        updatedLayer,
        ...layers.slice(action.floorIndex + 1)
      ];
    }



    case types.CANVAS_ITEM_SELECTED : {
      let currentLayer = layers[action.floorIndex];
      let updatedLayer = currentLayer.map((el) => {
        if(el.id == action.id) return { ...el, isLastSelected : true };
        return { ...el, isLastSelected : false };
      });

      return [
        ...layers.slice(0, action.floorIndex),
        updatedLayer,
        ...layers.slice(action.floorIndex + 1)
      ];
    }

      

    case types.FLOOR_ADD :
      return layers.concat([[]]);



    case types.FLOOR_REMOVE :
      return [
        ...layers.slice(0, action.floorIndex),
        ...layers.slice(action.floorIndex + 1)
      ];



    default :
      return layers;
  }

}