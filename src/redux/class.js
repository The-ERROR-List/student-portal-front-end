import { addClass } from "./type";
import { updateClass } from "./type";
import { getClass } from "./type";
import { deleteClass } from "./type";



export const initialState = {
  infoClass: [],
};

export default function classReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case addClass:
      let data = [...state.infoClass];
      data.push(payload);

      return {
        infoClass: data,
      };
    case getClass:

      return {

      };
    case updateClass:

      return {

      };
    case deleteClass:

      return {

      };
    default:
      return state;
  }
}

export function selectClass(payload) {
  return {
    type: addClass,
    payload: payload,
  };
}