import axios from 'axios';
import cookie from 'react-cookies';
import { addStudent } from "./type";
import { updateStudent } from "./type";
import { getStudent } from "./type";
import { deleteStudent } from "./type";
import { createStudent } from "./action";
import {api} from './type';
// const api = "http://localhost:3030";

export const initialState = {
  infoStudent: [],
};

export default function studentReducer(state = initialState, action) {
  let { type, payload } = action;

  switch (type) {
    case addStudent:
      
      createStudent(payload);
      return {
        ...state
      };

    case getStudent:

      return {
        infoStudent: payload
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


export const getStudentAction = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/allstudents`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("token")}`,
      },
    })
    // console.log("resssssssss", payload);
    dispatch({ type:  getStudent, payload: res.data.students })
  }
}