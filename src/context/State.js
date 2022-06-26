
import React, { useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import {api} from '../redux/type';
export const StateContext = React.createContext();
export default function State(props) {
    const [selectComponent, setSelectCategory] = useState("");
    const [show, setShow] = useState(false);
    const [updateShow, setUpdateShow] = useState(false);
    const [toggleRender, setToggleRender] = useState(false);
    const [toggleRenderTeacher, setToggleRenderTeacher] = useState(true);
    const [courses, setCourses] = useState([]);
    const selectCategory = (component) => {
        setSelectCategory(component);
        console.log(selectComponent);
    };

function handleUpdateShow() {
    setUpdateShow(true);
}
function handleUpdateClose() {
    setUpdateShow(false);
}

    function effect(){
        setToggleRender(true)
        setToggleRenderTeacher(false)
        // setToggleRender(false)
    }
    
    const handleClose = () => {
        setShow(false);
      
    }
    const handleShow = () => {
        setShow(true);
        
    }

    const getCourses = async () => {
        const response = await axios.get(`${api}/get-allCourses-for-teacher/${cookie.load('id')}`, {
            headers: { 'Authorization': `Bearer ${cookie.load("token")}` }
        });

        setCourses(...courses, response.data);
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
        setToggleRender,
        toggleRender,
        toggleRenderTeacher,
        effect
    }
    return (
        <StateContext.Provider value={state}>
            {props.children}
        </StateContext.Provider>
    )
}