import { addClass } from "./type";
import { updateClass } from "./type";
import { getClass } from "./type";
import { deleteClass } from "./type";
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';
import { createClass } from './action';
import {deleteClassesById} from './action';


export const initialState = {
  infoClass: [],
};

export default function classReducer(state = initialState, action) {
  let { type, data ,payload ,payloadDelete} = action;

  switch (type) {
    case addClass:
    
      createClass(payload)
      return {
        ...state,
      };
    case getClass:

      return {
        infoClass:data
      };
    case updateClass:

      return {

      };
    case deleteClass:

 deleteClassesById(payloadDelete)
      return {
...state
      };
    default:
      return state;
  }
}

export function selectClass(payload) {
  return {
    type: addClass,
    payload: payload,
    
  };
}

export const getClassAction = () => {
  return async (dispatch) => {
    const res = await axios.get(`${api}/classes`, {
      headers: {

        "Authorization": `Bearer ${cookie.load("token")}`,
      },
    })
    dispatch({ type: getClass, data: res.data })
  }
}