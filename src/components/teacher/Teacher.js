import React from "react";
import { useContext } from "react";
import { Row, Col, Card, CardTitle, CardText, Button } from "reactstrap";
import { StateContext } from "../../context/State";
import { When } from "react-if";
const Teacher = () => {
    // const [course,setCourse]=useState([]);
    const state = useContext(StateContext);
//'/get-allCourses-for-teacher/:id '


    // const teachersCourses = state.getCourses();
    return (
        <>
            <div>
                <button onClick={state.getCourses}>Get Courses</button>

            </div>
            {/* <div>
                {
                console.log('its me', state.courses)
                }            

                    {state.courses[0].map((course, index) => {
                    return (
                        <>
                            {
                                console.log(course.courseName)
                            }
                            < p key={index} > {course.courseName}</p>
                        </>



                    )
                })}
            </div> */}
            <div>
            <Row>
          {state.courses[0].map((course, index) => (
            <Col key={course.id} sm="3">
              <Card  body>
                <CardTitle style={{ fontWeight: 500 }} tag="h4">
                  {course.courseName}
                </CardTitle>
                <CardText>{course.courseName}</CardText>
                <Button color="primary"
                  onClick={() => state.getCourses}>
                  go to a {course.courseName}
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
            </div>
        </>

    )
}
export default Teacher;