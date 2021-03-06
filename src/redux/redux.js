import { combineReducers } from "redux";
import teacherReducer from "./teacher";
import studentReducer from './student';
import classReducer from './class';
import courseReducer from './course';
import courseToCourseReducer from './teacherToCourse';
import classesInStudentsReducer from './classesInStudents';
import addStudentInClassReducer from './addStu_class';
import classesInCourseReducer from './classesInCourse';
import contentReducer from './content';

import infoStuById from './studentById';

import infoById from './teacherById';
export const rootReducer = combineReducers({
    student: studentReducer,
    class: classReducer,
    course: courseReducer,
    teacher: teacherReducer,
    teacherTocourse: courseToCourseReducer,
    classesInStudents: classesInStudentsReducer,
    addStudentInClass: addStudentInClassReducer,
    classesInCourse:classesInCourseReducer,
    contentId:contentReducer,
    infoById: infoById,
    infoStuById: infoStuById,
})
