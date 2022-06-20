import { combineReducers } from "redux";
import teacherReducer from "./teacher";

import studentReducer from './student';
import classReducer from './class';
import courseReducer from './course';


export const rootReducer = combineReducers({
    student: studentReducer,
    class: classReducer,
    course: courseReducer,
    teacher: teacherReducer
})