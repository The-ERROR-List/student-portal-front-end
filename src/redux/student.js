import { addStudent } from "./type";
import { updateStudent } from "./type";
import { getStudent } from "./type";
import { deleteStudent } from "./type";


import { createStudent } from "./action";
export const initialState = {
  infoStudent: [],
};

export default function studentReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case addStudent:
      let data = [...state.infoStudent];
      data.push(payload);
      createStudent(payload);
      return {
        infoStudent: data,
      };

    case getStudent:

      return {

      };

    case updateStudent:

      return {

      };

    case deleteStudent:

      return {

      };
    default:
      return state;
  }
}

export function selectStudent(payload) {
  return {
    type: addStudent,
    payload: payload,
  };
}