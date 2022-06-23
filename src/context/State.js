
import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
export const StateContext = React.createContext();
const api = "http://localhost:3001";

export default function State(props) {
    const [selectComponent, setSelectCategory] = useState("");
    const [show, setShow] = useState(false);
    const [courses,setCourses]=useState([]);
    const selectCategory = (component) => {
        setSelectCategory(component);
        console.log(selectComponent);
    };
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getCourses = async () => {
       const response = await axios.get(`${api}/get-allCourses-for-teacher/${cookie.load('id')}`,{
        headers: {'Authorization':`Bearer ${cookie.load("token")}`}
        });
       
         setCourses(...courses,response.data);
        // setCourses(course);
        console.log(response.data);
    }

    const state = {
        selectComponent,
        selectCategory,
        handleClose,
        handleShow,
        show,
        courses,
        getCourses,
    }
    return (
        <StateContext.Provider value={state}>
            {props.children}
        </StateContext.Provider>
    )
}