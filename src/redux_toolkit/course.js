import { createSlice } from "@reduxjs/toolkit";

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        infoStudent: []
    },

    reducers: {
        add_course(state, action) {

        },
        remove_course(state, action) {


        },
        update_course(state, action) {

        }
        ,
        get_course(state, action) {

        }
    }
})

export const { add_course, remove_course, update_course, get_course } = courseSlice.actions;
export default courseSlice.reducer;