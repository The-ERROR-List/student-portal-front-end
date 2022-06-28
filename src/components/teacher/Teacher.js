import React, { useEffect } from "react";
import { useContext } from "react";
import { Row, Col, Card, CardTitle, CardText, Button, CardBody, CardImg,Alert } from "reactstrap";
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
      console.log(2222222222,state.courses.TeacherCourses[0]['course id'])
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  
  return (

    <div className="teacherside" style={{ marginRight: "70px" }}>
      <div className="teacher-header">
      <Alert
        style={{
          fontSize: "30px",
          marginTop: "2%",
          marginRight: "2%",
          marginLeft: "2%",
        }}
      >
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
                    <Card key={i} body className="teacherCard" style={{ width: "20rem", height: "28rem" }}>
                      <CardImg top width="60%" style={{width: "20rem", height: "70%" }} src={course['course Image']} alt="Card image cap" />
                      <CardTitle style={{ fontWeight: 500 }} tag="h1">
                        {course['course Name']}
                      </CardTitle>
                      <CardText>
                        {course['course Description']}
                      </CardText>
                    </Card>
                </Link>
              )) : null
          }
      </div>

    </div>

  )
}
export default Teacher;