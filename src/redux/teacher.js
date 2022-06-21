import { addTeacher } from "./type";
import { updateTeacher } from "./type";
import { getTeacher } from "./type";
import { deleteTeacher } from "./type";
import { getTeacherApi } from "./action";

import { createTeacher } from './action';

export const initialState = {
  infoTeacher: [],
  apiInfoTeacher: [],
};

export default  function teacherReducer(state = initialState, action) {
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
      let  teacherData =  getTeacherApi
      console.log(teacherData,'teacherData')
      return {
        apiInfoTeacher: teacherData,
      }
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
export const getAction = payload => {
  return {
      type: getTeacher,
      payload: payload
  }
}


