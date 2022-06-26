import {
  Table,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Modal,Alert,Breadcrumb,BreadcrumbItem } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourseAction } from "../../../redux/course";
import { addCourse } from "../../../redux/type";
import AddTeacher from "./addTeacher";
import "./course.scss";
import CourseCard from "./course-teacher";

function Submit() {
  const state = useContext(StateContext);
  const dispatch = useDispatch();
  const [infoCourse, setInfoCourse] = useState({
    courseName: "",
    courseGrade: "",
    courseImg:""
  });

  const handelChange = (e) => {
    e.preventDefault();
    setInfoCourse({ ...infoCourse, [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log("infoCourse", infoCourse);
    dispatch({ type: addCourse, payload: infoCourse });
    state.handleClose();
  };

  useEffect(() => {
    dispatch(getCourseAction());
  }, []);

  return (
    <>
      <Button color="success" onClick={state.handleShow}>
        Add Course
      </Button>

      {/* <Button color="warning" onClick={handleClick}>
        add course to teacher
      </Button> */}

      {/* <Modal
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
          </Form>
        </Modal.Body>
      </Modal>  */}

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
              <Label for="courseImg">Course Img</Label>
              <Input
                id="courseImg"
                name="courseImg"
                placeholder="Image..."
                type="text"
                onChange={handelChange}
              />
            </FormGroup>
            <Button color="success" onClick={handelSubmit}>
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
    </>
  );
}

const Course = () => {
  const courses = useSelector((state) => state.course.infoCourse);
  const state = useContext(StateContext);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCourseAction());
  }, []);
 
  return (
    <div className="admin-coures">
      <Alert style={{
        fontSize: "30px",
        marginTop: "20px",
        marginRight: "60px",
        marginLeft: "55px",
      }} >
        <div style={{ display: "flex" }}>
          <Breadcrumb listTag="div">
            <BreadcrumbItem
              href="/"
              tag="a"
            >
              Dashboard/
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb listTag="div">
            <BreadcrumbItem
              href="/admin-course"
              tag="a"
            >
              Course
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

      </Alert>
      <div className="course-cards">

      {/* <Submit /> */}
      {/* <AddTeacher /> */}
      {/* <Table hover className="course-table"> */}
      {/* <thead>
          <tr>
            <th>Course Name</th>
            <th>Grade Course </th>
          </tr>
        </thead> */}
      {/* <tbody> */}

      {courses.map((course, i) => {
        return (
          // <tr key={i}>
          //   <td>{course.courseName}</td>
          //   <td>
          //     {course.courseGrade}/{course.courseGrade}
          //   </td>
          // </tr>

          <CourseCard key={i} course={course} />
        );
      })}
      {/* </tbody> */}
      {/* </Table> */}
      </div>
    </div>
  );
};
export default Course;
