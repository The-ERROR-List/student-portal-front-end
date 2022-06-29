import Header from "../header/header";
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useContext } from "react";
// import './home.scss'
import Main from "../main/main";
import { Routes, Route } from "react-router-dom";
import TeacherClasses from "../teacher/teacher-classes/teacher-classes";
import Class from "../class/class";
import AdminTeacher from '../admin/teacher/teacher'
import AdminStudent from '../admin/student/student'
import AdminCourse from '../admin/course/course'
import AdminClass from '../admin/class/class'
// import Content from '../class/content/content'
import UpdateContents from'../class/content/update-content'
import UpdateAnnouncement from'../class/announcement/updateAnnao'
function Home() {
    const auth = useContext(AuthContext);
  
    return (
      <div className="home" >
    
  
          <When condition={auth.isLoggedIn}>
            <Header />
            <div style={{marginLeft:"142px"}}>
            <Routes>
            <Route path="/" element = {<Main/>}/>
            <Route path="/course/:id" element={<TeacherClasses/>} />
            <Route path="/class/:id/*" element={<Class/>} />
            <Route path="/adminClass/:id/*" element={<Class />} />
            <Route path="/class-student/:id/*" element={<Class />} />
            <Route path="/admin-teacher" element={<AdminTeacher />} />
            <Route path="/admin-student" element={<AdminStudent />} />
            <Route path="/admin-course" element={<AdminCourse />} />
            <Route path="/admin-class" element={<AdminClass />} />
            <Route path="/updateAnnouncement/:id" element={<UpdateAnnouncement/>}/>
            {/* <Route path="/content-class/:id" element={<Content/>} /> */}
            <Route path="/updateContent/:id" element={<UpdateContents/>}/>
          </Routes>
        </div>
      </When>

    </div>
  );
}
export default Home;
