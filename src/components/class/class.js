import ClassList from './classList/classList'
import ClassTool from "./classTool/classTool";
import Content from './content/content';
import Announcement from './announcement/announcement';
import './class.scss'
import { useParams } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import Nav from './navBar/nav'
import { useEffect,useState } from 'react';
import axios from 'axios';
import {api}from'../../redux/type'
import cookie from "react-cookies"
import UpdateContents from './content/update-content';

const Class = () => {
  const params = useParams();
  console.log('params', params)
    const [oneClassName,setOneClassName]=useState('')
  const [oneTeacherName,setOneTeacherName]=useState('')

  const getOneClass=()=>{
    axios.get(`${api}/classes/${params.id}`,
    { headers: { Authorization: `Bearer ${cookie.load("token")}` } }
    ).then((response)=>{
      setOneClassName(response.data.className)
      setOneTeacherName(response.data.teacherName)
  })
  }
  useEffect(()=>{
    getOneClass()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div className="classcomp">
      <div className="header">
        <Link to={`*`}><h1 id='classname' >{oneClassName}</h1></Link>
      </div>
      <div className="navs">
        <Nav id={params.id} />
      </div>
      <Outlet />
      <div className="class-render" style={{ margin: "30px 0 0 10px" }}>
        <Routes>
          <Route path='*' element={<Announcement id={params.id}/>}/>
          <Route path="content-class/:id" element={<Content />} />
          <Route path="classList/:id" element={<ClassList teacherName={oneTeacherName} />} />
          <Route path="ClassTool/:id" element={<ClassTool id={params.id} />} />
          <Route path='updateContent/:id' element={<UpdateContents/>}/>
        </Routes>
      </div>
    </div>
  );
};
export default Class;
