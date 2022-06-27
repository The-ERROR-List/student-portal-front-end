import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from '../redux/type';

export const contentContext = React.createContext();
export default function Content(props) {
    const [contentTitle, setContentTitle] = useState("");
    const [contentBody, setContentBody] = useState("")
    const [contentLink, setContentLink] = useState("")
    const [content, setContent] = useState([])
    const [show, setShow] = useState(true)
    // const [names, setNames] = useState({})
    // const [idContent, setIdContent] = useState({ id: "" });

// console.log(idContent);
    // function idUpdateContent(id) {
    //     setIdContent({
    //         ...idContent,
    //         id: id,
    //     });
    // }

    const addContent = async (e, id) => {
        e.preventDefault();

        let result = axios.post(`${api}/content/${id}`, {
            contentTitle: e.target.contentTitle.value,
            contentBody: e.target.contentBody.value,
            contentLink: e.target.contentLink.value,
            classId: id,
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then(response => {
            console.log(response.data)
            setContent([...content, response.data.Content]);

        })

    };

    
    const updateContent = (id => {
       
        let result = axios.patch(`${api}/content/${id}`, {
            contentTitle: contentTitle,
            contentBody: contentBody,
            contentLink: contentLink,
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },

        }).then((result) => {
            console.log('result for update', result.data)
            setContent([...content, result.data.Content])

        }
        )
        setShow(false)
    })


    const deleteContent = ((id, indx) => {
        console.log('sssssssss', id)
        axios.delete(`${api}/content/${id}`, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then(
            setContent(content.filter((contentName, index) => index !== indx))
        )
    })
    const state = {
        setContentTitle,
        setContentBody,
        setContentLink,
        content,
        setContent,
        addContent,
        updateContent,
        deleteContent,
        contentTitle,
        contentBody,
        contentLink,
        show,
        setShow,
        


    }
    return (
        <contentContext.Provider value={state}>
            {props.children}
        </contentContext.Provider>
    )
}

