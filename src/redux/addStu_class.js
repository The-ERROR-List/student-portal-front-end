import { addStudentInClass } from "./type";
import { addStudentToClass } from "./action";

export const initialState = {
  infoStudentsInClass: [],
};

export default function addStudentInClassReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case addStudentInClass:

      addStudentToClass(payload)
      return {
        ...state,
      };

    default:
      return state;
  }
}

export function selectStudentsToClass(payload) {
  return {
    type: addStudentInClass,
    payload: payload,

  };
}

