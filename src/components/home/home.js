import Header from "../header/header";
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useContext, useEffect } from "react";

import Main from "../main/main";
import { Routes, Route } from "react-router-dom";
import TeacherClasses from "../teacher/teacher-classes/teacher-classes";
import Class from "../class/class";

function Home() {
    const auth = useContext(AuthContext);
  
    return (
      <div className="main">
    
  
          <When condition={auth.isLoggedIn}>
            <Header />
            <div style={{marginLeft:"150px"}}>
            <Routes>
            <Route path="/" element = {<Main/>}/>
            <Route path="/course/:id" element={<TeacherClasses/>} />
            <Route path="/class/:id" element={<Class/>} />
            <Route path="/adminClass/:id" element={<Class />} />
            <Route path="/class-student/:id" element={<Class />} />

            </Routes>
            </div>
            
           
          </When>
      
      </div>
    );
  }
  
  export default Home;
  