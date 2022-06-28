import {getContentId} from './type';
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';
export const initialState = {

    contentById: [],
};

export default function contentReducer(state = initialState, action) {
    let { type, dataContentId } = action;
    // console.log(111111111111,dataContentId);
    switch (type) {

        case getContentId:

            return {
                contentById: dataContentId
            }
        default:
            return state;
    }
}


    // getAllCourseToTeacher 
    export const classContentId = (id) => {
        return async (dispatch) => {
            const res = await axios.get(`${api}/content/${id}`, {
                headers: {

                    "Authorization": `Bearer ${cookie.load("token")}`,
                },
            })
            dispatch({ type: getContentId, dataContentId: res.data.content })
        }
    }
