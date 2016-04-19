export const CANVAS_ITEM_DATA_UPDATE = 'CANVAS_ITEM_DATA_UPDATE';
export const CANVAS_ITEM_SELECTED = 'CANVAS_ITEM_SELECTED';

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
