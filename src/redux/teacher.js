// import add_teacherOn from "./action";
// import axios from "axios";
// const baseURL = "https://student-portal-asac.herokuapp.com/signup/std-teacher";
// import {createTeacher} from './action';

export const initialState = {
  infoTeacher: [],
};

export default function teacherReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case "add_teacher":
      let data = [...state.infoTeacher];
      data.push(payload);
      return {
        infoTeacher: data,
      };
    default:
      return state;
  }
}

export function selectTeacher(payload) {
  return {
    type: "add_teacher",
    payload: payload,
  };
}


