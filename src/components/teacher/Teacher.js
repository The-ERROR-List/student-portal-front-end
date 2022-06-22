import React, { useEffect } from "react";
import { useContext } from "react";
import { Row, Col, Card, CardTitle, CardText, Button, CardBody,CardImg } from "reactstrap";
// import Card from 'react-bootstrap/Card';

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
      {/* <p>              
            {
             `welcome ${state.courses.TeacherName}` 
            }
          </p> */}
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
              <Col key={i} sm="3">
                <Card key={i} body>
                <CardImg top width="100%" src={course['course Image']} alt="Card image cap" />

                  <CardTitle style={{ fontWeight: 500 }} tag="h4">
                    {course['course Name']}
                  </CardTitle>
                  <CardText>
                    {course['course Description']}
                  </CardText>
                  <Button color="primary"
                            onClick={() => state.getCourses()}>
                            go to classes {}
                          </Button>
                </Card>
              </Col>
            )) : null
        }
      </Row>

    </div>

  )
}
export default Teacher;