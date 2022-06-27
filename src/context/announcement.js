import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from '../redux/type';

export const announcementContext = React.createContext();
export default function Announcement(props) {
    const [announcementTitle, setannouncementTitle] = useState("");
    const [announcementBody, setannouncementBody] = useState("")
    const [announcementLink, setannouncementLink] = useState("")
    const [announcements, setAnnouncements] = useState([])
    const [show, setShow] = useState(true)
    // const [names, setNames] = useState({})


    const addAnnouncement = async (e, id) => {
        e.preventDefault();

        let result = axios.post(`${api}/announcement/${id}`, {
            announcementTitle: e.target.announcementTitle.value,
            announcementBody: e.target.announcementBody.value,
            announcementLink: e.target.announcementLink.value,
            classId: id,
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then(response => {
            console.log(response.data)
            setAnnouncements([...announcements, response.data.announcement]);

        })

    };

    useEffect(() => {
        console.log(22222222, announcements);
    }, [announcements])

    const updateAnnouncement = (id => {
        console.log('contentid', id);
        let result = axios.patch(`${api}/announcement/${id}`, {
            announcementTitle: announcementTitle,
            announcementBody: announcementBody,
            announcementLink: announcementLink,
        }, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },

        }).then((result) => {
            console.log('result for update', result.data)
            setAnnouncements([...announcements, result.data.announcement]);

        }
        )
        setShow(false)
    })


    const deleteAnnouncement = ((id, indx) => {
        console.log('sssssssss', id)
        axios.delete(`${api}/announcement/${id}`, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then(
            setAnnouncements(announcements.filter((announcementName, index) => index !== indx))
        )
    })
    const state = {
        setannouncementTitle,
        setannouncementBody,
        setannouncementLink,
        announcementTitle,
        announcementBody,
        announcementLink,
        announcements,
        setAnnouncements,
        addAnnouncement,
        deleteAnnouncement,  
        updateAnnouncement,

        show,
        setShow,
    }
    return (
        <announcementContext.Provider value={state}>
            {props.children}
        </announcementContext.Provider>
    )
}

