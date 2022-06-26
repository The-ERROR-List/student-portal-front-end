import React, { useState } from 'react';
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
    const addContent = async (e) => {
        e.preventDefault();
        console.log('1', contentTitle, '2', contentBody, '3', contentLink, '4', contentCategory)
        let result = axios.post(`${api}/content/${cookie.load('classid')}`, {
            contentTitle: e.target.contentTitle.value,
            contentBody: e.target.contentBody.value,
            contentLink: e.target.contentLink.value,
            contentCategory: e.target.contentCategory.value,
            classId: cookie.load('classid'),
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then(response => {
            console.log(response.data)
            setContent([...content, response.data.Content]);

        })
    };

    const updateContent = (id => {
        console.log('contentid', id);
        // let updatedContent = content.map(ele => {
        //   if (ele.id === id) {
        //     return ele
        //   }
        // })
        // console.log('1111222233333',updatedContent)
        let result = axios.patch(`${api}/content/${id}`, {
            contentTitle: content.contentTitle,
            contentBody: content.contentBody,
            contentLink: content.contentLink,
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },

        }).then((result) => {
            console.log('result for update',result.data)
            setContent([...content, result.data.Content])

        }

        )
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
      
    }
    return (
        <contentContext.Provider value={state}>
            {props.children}
        </contentContext.Provider>
    )
}

