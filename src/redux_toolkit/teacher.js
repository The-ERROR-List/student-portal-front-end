import { createSlice } from "@reduxjs/toolkit";

const teacherSlice = createSlice({
    name: 'teacher',
    initialState: {
        infoTeacher: []
    },

    reducers: {
        add_teacher(state, action) {

        },
        remove_teacher(state, action) {


        },
        update_teacher(state, action) {

        }
        ,
        get_teacher(state, action) {

        }
    }
})

export const { add_teacher, remove_teacher, update_teacher, get_teacher } = teacherSlice.actions;
export default teacherSlice.reducer;