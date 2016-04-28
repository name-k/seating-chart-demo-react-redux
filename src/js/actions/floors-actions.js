import * as types from 'constants/general-types';

export function floorAdd() {
  return {
    type : types.FLOOR_ADD
  };
}

export function floorRemove(floorIndex) {
  return {
    type : types.FLOOR_REMOVE,
    floorIndex
  };
}

export function floorChange(floorIndex) {
  return {
    type : types.FLOOR_CHANGE,
    floorIndex
  };
}