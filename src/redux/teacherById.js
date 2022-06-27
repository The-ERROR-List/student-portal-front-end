import { addCourseToTeacher } from "./type";
import { getTeacherById } from "./type";

import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';
export const initialState = {

    accountInfo: [],
};

export default function infoById(state = initialState, action) {
    let { type, dataTeacher } = action;
    
    switch (type) {

        case getTeacherById:

            return {
                accountInfo: dataTeacher
            }
        default:
            return state;
    }
}

    export function addTeacher(payload) {
        return {
            type: addCourseToTeacher,
            payload: payload,
        }
    }
    export const getAllTeacherInfo = (id) => {
        return async (dispatch) => {
            const res = await axios.get(`${api}/teacher/${id}`, {
                headers: {
                    "Authorization": `Bearer ${cookie.load("token")}`,
                },
            })
            dispatch({ type: getTeacherById, dataTeacher: res.data.teacher })
        }
    }
