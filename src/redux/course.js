import { addCourse } from "./type";
import { updateCourse } from "./type";
import { getCourse } from "./type";
import { deleteCourse } from "./type";
import { createCourse } from './action';
import { addCourseToTeacher } from "./type";
import { getAllCourseToTeacher } from "./type";
import {addCourse2Teacher} from './action'
import {deleteCourseById} from './action'
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';

export const initialState = {
  infoCourse: [],
};

export default function courseReducer(state = initialState, action) {
  let { type, data, payload ,courseId} = action;
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
        addCourse2Teacher(payload)
      
        return {
          ...state
        };
     
    case updateCourse:

      return {
      };

    case deleteCourse:
      deleteCourseById(courseId)
      return {
...state
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
// export function addTeacher(payload) {
//   return { 
//     type:addCourseToTeacher,
//     payload: payload,
//   }
// }

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
// export const getAllCourse2Teacher = (id) => {
//   return async (dispatch) => {
//     const res = await axios.get(`${api}/all-teachers-for-course/${id}`, {
//       headers: {

//         "Authorization": `Bearer ${cookie.load("token")}`,
//       },
//     })
//     dispatch({ type: getAllCourseToTeacher, dataTeacherIntoCourse: res.data })
//   }
// }