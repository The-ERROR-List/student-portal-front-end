import { addCourseToTeacher } from "./type";
import { getAllCourseToTeacher } from "./type";
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from './type';
export const initialState = {

    teacherIntoCourse: [],
};

export default function courseToCourseReducer(state = initialState, action) {
    let { type,payload, dataTeacherIntoCourse } = action;
    
    switch (type) {

        case getAllCourseToTeacher:

            return {
                teacherIntoCourse: dataTeacherIntoCourse
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

    //=====
    // getAllCourseToTeacher 
    export const getAllCourse2Teacher = (id) => {
        return async (dispatch) => {
            const res = await axios.get(`${api}/all-teachers-for-course/${id}`, {
                headers: {

                    "Authorization": `Bearer ${cookie.load("token")}`,
                },
            })
            dispatch({ type: getAllCourseToTeacher, dataTeacherIntoCourse: res.data.TeacherName })
        }
    }