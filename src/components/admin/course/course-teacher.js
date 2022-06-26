import {
  Card,
  CardGroup,
  CardBody,
  CardImg,
  CardTitle,
} from "reactstrap";
import { Accordion } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourse2Teacher } from "../../../redux/teacherToCourse";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCourse } from '../../../redux/type';
import { StateContext } from "../../../context/State";
import {getAllClassesToCourse} from '../../../redux/classesInCourse'
export default function Course_Card(props) {
  console.log(props.course, '++++++++++');
  const selector = useSelector(
    (state) => state.teacherTocourse.teacherIntoCourse
  );

  const classesIn = useSelector(
    (state) => state.classesInCourse.infoClassesIntoCourse
  );
  const dispatch = useDispatch();
  const state = useContext(StateContext);

  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteCourse, payloadDelete: idToDelete })
  }

  useEffect(() => {
    dispatch(getAllCourse2Teacher(props.course.id));
    dispatch(getAllClassesToCourse())
  }, []);

  return (
    <div>
      <CardGroup style={{ width: "420px" }}>
        <Card>
          <CardImg
            top
            src={props.course.courseImg}

            alt={"Course"}
          />
          <CardBody>
            <CardTitle tag="h5" style={{ textAlign: "center" }}>
              {props.course.courseName}
            </CardTitle>
            <DeleteIcon sx={{ fontSize: 50 }} onClick={() => deleteFromDB(props.course.id)} />
          </CardBody>
          <Accordion defaultActiveKey="0" style={{ width: "400px" }}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Teachers</Accordion.Header>
              <Accordion.Body>
                <ul>
                  {selector.map((teacher, i) => {
                    return <li>{teacher.TeacherName}</li>;
                  })}
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          
          </Accordion>
        </Card>
      </CardGroup>
    </div>
  );
}
