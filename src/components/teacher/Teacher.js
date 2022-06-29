import React, { useEffect } from "react";
import { useContext } from "react";
import {  Alert } from "reactstrap";
import { Link } from 'react-router-dom';
import { StateContext } from "../../context/State";
import { When } from "react-if";
import './teacher.scss'
const Teacher = () => {
  const state = useContext(StateContext);
  //'/get-allCourses-for-teacher/:id '



  useEffect(() => {
    const interval = setInterval(() => {
      state.getCourses()
      console.log(2222222222, state.courses.TeacherCourses[0]['course id'])
    }, 2000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (

    <div className="teacherside" style={{ marginRight: "0px", marginLeft: "-29px" }}>
      <div className="teacher-header">
        <Alert
          style={{
            fontSize: "30px",
            color: "#ffff",
            backgroundColor: "#005240",
            borderColor: "#005240",
            width: "100%"

          }}>

          {

            `Welcome : ${state.courses.TeacherName}`
          }
        </Alert>
      </div>
      <div className="teacher-cards">

        {
          state.courses.TeacherCourses ?
            state.courses.TeacherCourses.map((course, i) => (

              <Link key={i} to={`/course/${course['course id']}`} >
                <div className="wrapper">
                  <section class="page-contain"  style={{width: "20rem", height: "70%" }}>
                    <a href="#" class="data-card">
                      <h3 id="corseName"> {course['course Name']}</h3>
                      <span class="link-text">
                        <h3>{course['course Description']}</h3>
                      </span>
                    </a>
                  </section>
                </div>
                
              </Link>
            )) : null
        }
      </div>

    </div>

  )
}
export default Teacher;