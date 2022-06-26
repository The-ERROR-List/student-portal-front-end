import { getClassesIntoCourse } from "./type";
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';


export const initialState = {

  infoClassesIntoCourse: [],

};

export default function classesInCourseReducer(state = initialState, action) {
  let { type, data} = action;


  switch (type) {
    
    case getClassesIntoCourse:
      return {
        infoClassesIntoCourse: data
      }

    default:
      return state;
  }
}

export const getAllClassesToCourse = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/allcourses-and-their-classes}
    `, {
      headers: {

        "Authorization": `Bearer ${cookie.load("token")}`,
      },
    })
    
    dispatch({ type: getClassesIntoCourse, data: res.data.courses })
    
  }
}


