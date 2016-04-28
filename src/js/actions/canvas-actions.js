import * as types from 'constants/general-types';


export function canvasItemAdd(data, floorIndex) {
  return {
    type : types.CANVAS_ITEM_ADD,
    data,
    floorIndex
  };
}

export function canvasItemRemove(id, floorIndex) {
  return {
    type : types.CANVAS_ITEM_REMOVE,
    id,
    floorIndex
  };
}


export function canvasItemUpdate(id, data, floorIndex) {

  return {
    type : types.CANVAS_ITEM_UPDATE,
    id,
    data,
    floorIndex
  };
}


export function canvasItemSelect(id, floorIndex) {
  return {
    type : types.CANVAS_ITEM_SELECTED,
    id,
    floorIndex
  };
}

export function canvasItemDeselect(id, floorIndex) {
  return {
    type : types.CANVAS_ITEM_DESELECTED,
    id, floorIndex
  };
}



