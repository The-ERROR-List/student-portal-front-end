import { addStudentInClass } from "./type";

import { addStudentToClass } from "./action";

// import axios from 'axios';
// import cookie from 'react-cookies';
// import { api } from './type';



export const initialState = {
  infoStudentsInClass: [],
};

export default function addStudentInClassReducer(state = initialState, action) {
  let { type, payload } = action;
console.log("+++++++++",payload);
  switch (type) {
    case addStudentInClass:
    
      addStudentToClass(payload)
      return {
        ...state,
      };

    default:
      return state;
  }
}

export function selectStudentsToClass(payload) {
  return {
    type: addStudentInClass,
    payload: payload,
    
  };
}

// export const getStudentsInClassAction = () => {
//     return async (dispatch) => {
//       const res = await axios.get(`${api}/classes`, {
//         headers: {
  
//           "Authorization": `Bearer ${cookie.load("token")}`,
//         },
//       })
//       dispatch({ type: getClass, data: res.data })
//     }
//   }