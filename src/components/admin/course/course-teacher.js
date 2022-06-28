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
import { api } from '../../../redux/type';

import "./course.scss";
import './course-teacher.scss'

export default function Course_Card(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const selector = useSelector(
    (state) => state.teacherTocourse.teacherIntoCourse
  );
  const [ids, setId] = useState({ id: '' });
  const [infoUpdate, setInfoUpdate] = useState({
    courseName: "", courseGrade: "", courseDescription: "", courseImg: ""
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
    fetch(`${api}/courses/${ids.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie.load("token")}`,
      },
      body: JSON.stringify({
        courseName: infoUpdate.courseName,
        courseGrade: infoUpdate.courseGrade,
        courseDescription: infoUpdate.courseDescription,
        courseImg: infoUpdate.courseImg,
      })
    }).then((res) => res.json().then((data) => { console.console(data) }));


    handleClose();
  }


  const state = useContext(StateContext);


  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteCourse, payloadDelete: idToDelete })
  }


  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getAllCourse2Teacher(props.course.id));
    }, 2000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div>
      <section class="page-contain">
        <a href="#" class="data-card">
          <h3 id="corseName">{props.course.courseName}</h3>
          <h4>{selector.map((teacher, i) => {
            return (<>{teacher.TeacherName}</>);
            
          })}</h4>
          <p></p>
          <span class="link-text">
            <h3>{props.course.courseDescription}</h3>
            {/* <svg width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8631 0.929124L24.2271 7.29308C24.6176 7.68361 24.6176 8.31677 24.2271 8.7073L17.8631 15.0713C17.4726 15.4618 16.8394 15.4618 16.4489 15.0713C16.0584 14.6807 16.0584 14.0476 16.4489 13.657L21.1058 9.00019H0.47998V7.00019H21.1058L16.4489 2.34334C16.0584 1.95281 16.0584 1.31965 16.4489 0.929124C16.8394 0.538599 17.4726 0.538599 17.8631 0.929124Z" fill="#753BBD" />
            </svg> */}
          </span>
          <div class = "edit-delete">
          <DeleteIcon sx={{ fontSize: 40 }} onClick={() => deleteFromDB(props.course.id)} />
          
                <EditIcon
              sx={{ fontSize: 40 }}
              onClick={() => {
                idUser(props.course.id)
                handleShow()
              }}
              
            />
            
             </div>

        </a>
    
      </section>

      {/* <CardGroup style={{ width: "420px" }}> */}
      {/* <Card>
          <Modal
            show={show}
            onHide={handleClose}
            class="modal-dialog modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Update information Course</Modal.Title>
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
                        placeholder={props.course.courseName}
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
                    placeholder={props.course.courseGrade}
                    type="number"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="courseDescription">course Description</Label>
                  <Input
                    id="courseDescription"
                    name="courseDescription"
                    placeholder={props.course.courseDescription}
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="courseImg">Course Img</Label>
                  <Input
                    id="courseImg"
                    name="courseImg"
                    placeholder={props.course.courseImg}
                    type="text"
                    
                    onChange={handelChange}
                  />
                </FormGroup>
                <Button color="warning" onClick={updateUser}>
                  update Course
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button color="danger" onClick={handleClose}>
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
                handleShow()
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
          </Accordion>
        </Card> */}
      {/* </CardGroup> */}
    </div>
  );
}

