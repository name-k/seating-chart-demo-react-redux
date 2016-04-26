export const CANVAS_ITEM_DATA_UPDATE = 'CANVAS_ITEM_DATA_UPDATE';
export const CANVAS_ITEM_SELECTED = 'CANVAS_ITEM_SELECTED';
export const CANVAS_ITEM_ADD = 'CANVAS_ITEM_ADD';

export function canvasItemDataUpdate(id, data) {

  return {
    type : CANVAS_ITEM_DATA_UPDATE,
    id,
    data
  };
}



export function canvasItemSelect(id) {
  return {
    type : CANVAS_ITEM_SELECTED,
    id
  };
}



export function canvasItemAdd(data) {
  return {
    type : CANVAS_ITEM_ADD,
    data
  };
}
