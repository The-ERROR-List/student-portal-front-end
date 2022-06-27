import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from '../redux/type';

export const contentContext = React.createContext();
export default function Content(props) {
    const [contentTitle, setContentTitle] = useState("");
    const [contentBody, setContentBody] = useState("")
    const [contentLink, setContentLink] = useState("")
    const [contentCategory, setContentCategory] = useState("")
    const [content, setContent] = useState([])
    const [show, setShow] = useState(true)
    const [names, setNames] = useState({})
    const [idContent, setIdContent] = useState({ id: "" });


console.log(idContent);
    function idUpdateContent(id) {
        setIdContent({
            ...idContent,
            id: id,
        });
    }

    const addContent = async (e, id) => {
        e.preventDefault();
        console.log('1', contentTitle, '2', contentBody, '3', contentLink, '4', contentCategory)

        let result = axios.post(`${api}/content/${id}`, {
            contentTitle: e.target.contentTitle.value,
            contentBody: e.target.contentBody.value,
            contentLink: e.target.contentLink.value,
            contentCategory: e.target.contentCategory.value,
            classId: id,
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then(response => {
            console.log(response.data)
            setContent([...content, response.data.Content]);

        })

    };

    useEffect(() => {
        console.log(22222222, content);
    }, [content])

    const updateContent = (id => {
        console.log('contentid', id);
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
        setContentCategory,
        content,
        setContent,
        addContent,
        updateContent,
        deleteContent,
        contentTitle,
        contentBody,
        contentLink,
        contentCategory,
        show,
        setShow,
        idUpdateContent


    }
    return (
        <contentContext.Provider value={state}>
            {props.children}
        </contentContext.Provider>
    )
}

