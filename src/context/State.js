import React, { useState } from 'react';
export const StateContext = React.createContext();
export default function State(props) {
    const [selectComponent, setSelectCategory] = useState("");
    const [show, setShow] = useState(false);

    const selectCategory = (component) => {
        setSelectCategory(component);
        console.log(selectComponent);
    };


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const state = {
        selectComponent,
        selectCategory,
        handleClose,
        handleShow,
        show
    }
    return (
        <StateContext.Provider value={state}>
            {props.children}
        </StateContext.Provider>
    )
}