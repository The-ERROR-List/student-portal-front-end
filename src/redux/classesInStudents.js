import { getClassesForStudents } from "./type";
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';


export const initialState = {

  classesStudent: [],

};

export default function classesInStudentsReducer(state = initialState, action) {
  let { type, payload} = action;


  switch (type) {
    
    case getClassesForStudents:
      return {
        classesStudent: payload
      }

    default:
      return state;
  }
}

export const getClassesInStudentsAction = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/get-classes-for-student/${cookie.load("id")}
    `, {
      headers: {

        "Authorization": `Bearer ${cookie.load("token")}`,
      },
    })
    
    dispatch({ type: getClassesForStudents, payload: res.data })
    
  }
}


