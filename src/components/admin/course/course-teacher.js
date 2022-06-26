import {
  Card,
  CardGroup,
  CardBody,
  CardImg,
  CardTitle,
  Table,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem

} from "reactstrap";
import cookie from "react-cookies";

import { Accordion } from "react-bootstrap";
import { useEffect, useState, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllCourse2Teacher } from "../../../redux/teacherToCourse";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCourse } from '../../../redux/type';
import { StateContext } from "../../../context/State";
import EditIcon from "@mui/icons-material/Edit";
import { Modal } from "react-bootstrap";
  import { getCourseAction } from "../../../redux/course";
  import { addCourse } from "../../../redux/type";
  import { api } from '../../../redux/type';
  
  import "./course.scss";
  
export default function Course_Card(props) {
  console.log(props.course, '++++++++++');
  const selector = useSelector(
    (state) => state.teacherTocourse.teacherIntoCourse
  );
  const [ids, setId] = useState({ id: '' });
  const [infoUpdate, setInfoUpdate] = useState({
    courseName:"", courseGrade:"", courseDescription: "", courseImg:""
  });
  const dispatch = useDispatch();
  const handelChange = (e) => {
    e.preventDefault();
    setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
  };
  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }
  function updateUser(e) {
    e.preventDefault();
    fetch(`${api}/teacher/${ids.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie.load("token")}`,
      },
      body: JSON.stringify({
       courseName:infoUpdate.courseName, courseGrade:infoUpdate.courseGrade, courseDescription: infoUpdate.courseDescription, courseImg:infoUpdate.courseImg,
      })
    }).then((res) => res.json().then((data) => { console.console(data) }));
    state.handleClose();
  }
  const state = useContext(StateContext);

  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteCourse, payloadDelete: idToDelete })
  }

  useEffect(() => {
    dispatch(getAllCourse2Teacher(props.course.id));
  }, []);

  return (
    <div>
      <CardGroup style={{ width: "420px" }}>
        <Card>
        <Modal
          show={state.show}
          onHide={state.handleClose}
          class="modal-dialog modal-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Course form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={{ width: "70%", margin: "auto" }}>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="courseName">Course Name</Label>
                    <Input
                      id="course"
                      name="courseName"
                      placeholder="Course..."
                      type="text"
                      onChange={handelChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="GradeCourse">Grade course</Label>
                <Input
                  id="Grade"
                  name="courseGrade"
                  placeholder="Grade..."
                  type="number"
                  onChange={handelChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="courseDescription">course Description</Label>
                <Input
                  id="courseDescription"
                  name="courseDescription"
                  placeholder="course Description..."
                  type="text"
                  onChange={handelChange}
                />
              </FormGroup>
              <FormGroup>
              <Label for="courseImg">Course Img</Label>
                <Input
                  id="courseImg"
                  name="courseImg"
                  placeholder="Image..."
                  type="text"
                  onChange={handelChange}
                />
              </FormGroup>
              <Button color="success" onClick={(e) =>updateUser(e)}>
                Add Course
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button color="danger" onClick={state.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
            <EditIcon
                        sx={{ fontSize: 67 }}
                        onClick={() => {
                          idUser(props.course.id)
                          state.handleShow()
                        }}
                      />
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
            <Accordion.Item eventKey="1">
              <Accordion.Header>Classes</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card>
      </CardGroup>
    </div>
  );
}
