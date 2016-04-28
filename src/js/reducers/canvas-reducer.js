import * as types from 'constants/general-types';

import findIndex from 'lodash/findIndex';

export default function(layers = [[]], action) {


  switch (action.type) {

    case types.FETCH_INITIAL_DATA :
      if(action.payload.canvas) {
        return action.payload.canvas;
      }
      else {
        return layers;
      }



    case types.CANVAS_ITEM_ADD : {
      console.log(action.data);
      let currentLayer = layers[action.floorIndex];
      let newLayer = [...currentLayer, action.data];
      return [
        ...layers.slice(0, action.floorIndex),
        newLayer,
        ...layers.slice(action.floorIndex + 1)
      ];
    }


    case types.CANVAS_ITEM_REMOVE : {
      let currentLayer = layers[action.floorIndex];
      let targetIndex = findIndex(currentLayer, {id : action.id});
      let newLayer = [
        ...currentLayer.slice(0, targetIndex),
        ...currentLayer.slice(targetIndex + 1)
      ];

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

    case types.CANVAS_ITEM_DESELECTED : {
      let currentLayer = layers[action.floorIndex];
      let updatedLayer = currentLayer.map((el) => {
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