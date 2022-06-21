import { addCourse } from "./type";
import { updateCourse } from "./type";
import { getCourse } from "./type";
import { deleteCourse } from "./type";

export const initialState = {
  infoCourse: [],
};

export default function courseReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case addCourse:
      let data = [...state.infoCourse];
      data.push(payload);

      return {
        infoCourse: data,
      };

    case getCourse:


      return {

      };

    case updateCourse:

      return {

      };

    case deleteCourse:

      return {

      };
    default:
      return state;
  }
}

export function selectCourse(payload) {
  return {
    type: addCourse,
    payload: payload,
  };
}