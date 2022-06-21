import { addTeacher } from "./type";
import { updateTeacher } from "./type";
import { getTeacher } from "./type";
import { deleteTeacher } from "./type";

import { createTeacher } from './action';

export const initialState = {
  infoTeacher: [],
};

export default function teacherReducer(state = initialState, action) {
  let { type,payload } = action;

  switch (type) {
    case addTeacher:
      let data = [...state.infoTeacher];
      data.push(payload);
      createTeacher(payload)
      return {
        infoTeacher: data,
      };
    case getTeacher:

      return {

      };
    case updateTeacher:

      return {

      };
    case deleteTeacher:

      return {

      };
    default:
      return state;
  }
}

export function selectTeacher(payload) {
  return {
    type:addTeacher ,
    payload: payload,
  };
}


