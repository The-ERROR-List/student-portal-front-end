import { addCourse } from "./type";
import { updateCourse } from "./type";
import { getCourse } from "./type";
import { deleteCourse } from "./type";
import { createCourse } from './action';
import { addCourseToTeacher } from "./type";
import { getAllCourseToTeacher } from "./type";

import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';

export const initialState = {
  infoCourse: [],
  idCourse:[],
};

export default function courseReducer(state = initialState, action) {
  let { type, data, payload } = action;
  // console.log("ppppppppp", payload);
  switch (type) {
    case addCourse:

      createCourse(payload)
      return {
        ...state
      };

    case getCourse:


      return {
        infoCourse: data

      };
      
//getAllCourseToTeacher 
      case addCourseToTeacher:

      
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

export const getCourseAction = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/courses`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("token")}`,
      },
    })
    dispatch({ type: getCourse, data: res.data })
  }
}
//=====
// getAllCourseToTeacher 
// export const getAllCourseToTeacher = () => {
//   return async (dispatch) => {
//     const res = await axios.get(`${api}/?/${id}`, {
//       headers: {

//         "Authorization": `Bearer ${cookie.load("token")}`,
//       },
//     })
//     dispatch({ type: getCourse, data: res.data })
//   }
// }