import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
    name: 'student',
    initialState: {
        infoStudent: []
    },

    reducers: {
        add_student(state, action) {

        },
        remove_student(state, action) {


        },
        update_student(state, action) {

        }
        ,
        get_student(state, action) {

        }
    }
})

export const { add_student,remove_student,update_student,get_student } = studentSlice.actions;
export default studentSlice.reducer;