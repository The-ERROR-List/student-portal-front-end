import { getStudentById } from "./type";

import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';
export const initialState = {

    accountInfo2: [],
};

export default function infoStuById(state = initialState, action) {
    let { type, dataStudent } = action;
    
    switch (type) {
        case getStudentById:
            console.log({dataStudent})
            return {
                accountInfo2: dataStudent
                
            }
        default:
            return state;
    }
}

    export const getStudentInfo = (id) => {
        return async (dispatch) => {
            const res = await axios.get(`${api}/student/${id}`, {
                headers: {

                    "Authorization": `Bearer ${cookie.load("token")}`,
                },
            })
            dispatch({ type: getStudentById, dataStudent: res.data.student })
        }
    }
    