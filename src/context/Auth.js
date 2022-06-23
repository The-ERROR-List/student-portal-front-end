import React, { useState, useEffect } from 'react';
import JWT from 'jwt-decode';
import axios from 'axios';
import cookie from 'react-cookies';
import base64 from 'base-64';
import {api} from '../redux/type'
export const AuthContext = React.createContext();


export default function Auth(props) {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const signUp = async (userName, email, password, role, firstName = "", lastName = "", gender = "", nationality = "", major = "", department = "") => {
        if (role === 'admin') {
            axios.post(`${api}/signup/admin`, {
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
            axios.post(`${api}/signup/std-teacher`, {
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
            console.log(role);
            axios.post(`${api}/signup/std-teacher`, {
                userName: userName,
                email: email,
                password: password,
                role: role,
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                nationality: nationality,
                department: department
            }).then(res => {
                console.log(res)
            })
        }
    }
    const signIn = async (userName, password) => {
           axios.post(`${api}/signin`, {
            userName: userName,
            password: password
        }, { headers: { 'Authorization': `Basic ${base64.encode(`${userName}:${password}`)}` } }).then(res => {
            console.log(res);
            validToken(res.data);
        })
    }
    const signOut = () => {
        setIsLoggedIn(false);
        setUser({});
        cookie.remove('token');
        cookie.remove('id');//teacher and student 
        // cookie.remove('userid')//all users
        cookie.remove('role')
    }
    const validToken = (user) => {
        if (user) {
            const validUser = JWT(user.userInfo.token);
            console.log(user)
            if (validUser) {
                setUser(user.userInfo);
                setIsLoggedIn(true);
                cookie.save('token', user.userInfo.token);
                console.log(user)
                if(user.userInfo.role === "teacher" || user.userInfo.role==="student"){
                    cookie.save('id',user.newId)
                }
                // cookie.save('userid',user.userInfo.id)
                cookie.save('role',user.userInfo.role)
            } else {
                setIsLoggedIn(false);
                setUser({});
            }
        } else {
            setIsLoggedIn(false);
            setUser({});
        }
    }
    const Authorized = (action) => {
        return user?.action?.includes(action);
    }
    const role = (role) => {
        return user?.role?.includes(role);
    }
    const state = {
        user,
        isLoggedIn,
        signUp,
        signIn,
        signOut,
        Authorized,
        setUser,
        setIsLoggedIn,
        role
    }
    useEffect(() => {
        const data = cookie.load('token');
        if (data) {
            setIsLoggedIn(true);
        }
    }, []);
    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )
}