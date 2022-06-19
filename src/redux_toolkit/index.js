import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import teacherSlice from './teacher';
import studentSlice from './student';
const reducers = combineReducers({ teacher: teacherSlice, student: studentSlice });

//The store now has redux-thunk added and the Redux DevTools Extension is turned on
const store = configureStore({ reducer: reducers });

export default store;