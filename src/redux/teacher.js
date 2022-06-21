import { addTeacher } from "./type";
import { updateTeacher } from "./type";
import { getTeacher } from "./type";
import { deleteTeacher } from "./type";
// import { getTeacherApi } from "./action";
import { createTeacher } from './action';
import axios from 'axios';
import cookie from 'react-cookies';
const api = "https://student-portal-asac.herokuapp.com";


export const initialState = {

  infoTeacher: [],

};

export default function teacherReducer(state = initialState, action) {
  let { type, data, payload } = action;


  switch (type) {
    case addTeacher:

      
      createTeacher(payload)
      return {
        ...state
      };
    case getTeacher:
      return {
        infoTeacher: payload
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
    type: addTeacher,
    payload: payload,
  };
}

export const getTeacherAction = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/allteachers`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("token")}`,
      },
    })
    // console.log("resssssssss", res.data);
    dispatch({ type: getTeacher, payload: res.data.teachers })
  }
}


