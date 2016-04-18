export const CANVAS_ITEM_DRAG_START = 'CANVAS_ITEM_DRAG_START';
export const CANVAS_ITEM_DRAG_END = 'CANVAS_ITEM_DRAG_END';
export const CANVAS_ITEM_SELECTED = 'CANVAS_ITEM_SELECTED';

export function canvasItemDragStart(id) {

  return {
    type : CANVAS_ITEM_DRAG_START,
    id
  };
}

export function canvasItemDragEnd(id, data) {
  return {
    type : CANVAS_ITEM_DRAG_END,
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
