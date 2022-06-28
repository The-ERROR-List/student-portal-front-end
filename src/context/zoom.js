import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { api } from '../redux/type';

export const zoomContext = React.createContext();

export default function Zoom(props){
const [meeting, setMeeting] = useState({})
const [joinUrl, setJoinUrl] = useState("")
const CreateMeeting=()=>{
    let result= axios.get(`${api}/createMeeting`, {
        headers: { Authorization: `Bearer ${cookie.load("token")}` },
        
    }).then(response => {
        setMeeting(response.data)
        setJoinUrl(response.data.Meeting.join_url)
    })
}
console.log(joinUrl,111111)
const state = {
    meeting,
    setMeeting,
    joinUrl,
    CreateMeeting,
}

return (
    <zoomContext.Provider value={state}>
        {props.children}
    </zoomContext.Provider>
)
}