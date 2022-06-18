import React, { useState, useEffect } from 'react';
import JWT from 'jwt-decode';
import axios from 'axios';
import cookie from 'react-cookies';
import base64 from 'base-64';

export const AuthContext = React.createContext();

export default function Auth(props) {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signUp = async (userName,email,password, role,firstName="",lastName="",gender="",nationality="",major="",department="") => {
        if (role === 'admin') {
            axios.post('https://student-portal-asac.herokuapp.com/signup/admin', {
                userName: userName,
                email: email,
                password: password,
                role: 'admin'
            })
                .then(res => {
                    console.log(res);
                })
        }
        else if (role === 'student') {
            axios.post('https://student-portal-asac.herokuapp.com/signup/std-teacher', {
                userName: userName,
                email: email,
                password: password,
                role: role,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                nationality: nationality,
                major: major,
            })
                .then(res => {
                    console.log(res)
                })
        }
        else if (role === 'teacher') {
            axios.post('https://student-portal-asac.herokuapp.com/signup/std-teacher', {
                userName: userName,
                email: email,
                password: password,
                role: role,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                nationality: nationality,
                department: department
            }).then(res=>{
                console.log(res)
            })
        }
    }
    const signIn  = async(userName,password)=>{
        axios.post('https://student-portal-asac.herokuapp.com/signin', {
            userName: userName,
            password: password
        },{headers:{'Authorization':`Basic ${base64.encode(`${userName}:${password}`)}`}}).then(res=>{
            console.log(res);
           validToken(res.data)
        })
    }
    const signOut = () => {
        setIsLoggedIn(false);
        setUser({});
        cookie.remove('token');
    }
    const validToken = (user) => {
        if(user){
            const validUser = JWT(user.token);
            if(validUser){
                setUser(user);
                setIsLoggedIn(true);
                cookie.save('token',user);
            }else{
                setIsLoggedIn(false);
                setUser({});
            }
        }else{
            setIsLoggedIn(false);
            setUser({});
        }
    }
    const Authorized = (action) => {
        return user?.action?.includes(action);
    }
    const state = {
        user,
        isLoggedIn,
        signUp,
        signIn,
        signOut,
        Authorized,
        setUser,
        setIsLoggedIn
    }
    useEffect(() => {
        const data = cookie.load('token');
        if(data){
            validToken(data);
        }
    }, []);
    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}