import { addTeacher } from "./type";
import { updateTeacher } from "./type";
import { getTeacher } from "./type";
import { deleteTeacher } from "./type";
import { createTeacher } from './action';
import {deleteTeacherById} from './action';
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';


export const initialState = {

  infoTeacher: [],

};

export default function teacherReducer(state = initialState, action) {
  let { type, payload, payloadDelete } = action;


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
      deleteTeacherById(payloadDelete)
      return {
        ...state
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


