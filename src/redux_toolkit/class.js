import { createSlice } from "@reduxjs/toolkit";

const classSlice = createSlice({
    name: 'class',
    initialState: {
        infoStudent: []
    },

    reducers: {
        add_class(state, action) {

        },
        remove_class(state, action) {


        },
        update_class(state, action) {

        }
        ,
        get_class(state, action) {

        }
    }
})

export const { add_class,
    remove_class,
    update_class,
    get_class } = classSlice.actions;
export default classSlice.reducer;