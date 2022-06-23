import React, { useEffect } from "react";
import { useContext } from "react";
import { Row, Col, Card, CardTitle, CardText, Button, CardBody,CardImg } from "reactstrap";
// import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import { StateContext } from "../../context/State";
import { When } from "react-if";
const Teacher = () => {
  // const [course,setCourse]=useState([]);
  const state = useContext(StateContext);
  //'/get-allCourses-for-teacher/:id '

  useEffect(() => {
    state.getCourses()
  }, [])
  // const teachersCourses = state.getCourses();
  return (

    <div >
      <Card >
        <CardBody>
          <CardText>
            {
              `welcome ${state.courses.TeacherName}`
            }
          </CardText>
        </CardBody>
      </Card>

      <Row style={{marginTop:"20px"}}>
        {
          state.courses.TeacherCourses ?
            state.courses.TeacherCourses.map((course, i) => (
              <Link to={`/course/${course['course id']}`}>
              <Col key={i} sm="3">
                <Card key={i} body>
                <CardImg top width="100%" src={course['course Image']} alt="Card image cap" />

                  <CardTitle style={{ fontWeight: 500 }} tag="h4">
                    {course['course Name ']}
                  </CardTitle>
                  <CardText>
                    {course['course Description']}
                  </CardText>
                </Card>
              </Col>
              </Link>
            )) : null
        }
      </Row>

    </div>

  )
}
export default Teacher;