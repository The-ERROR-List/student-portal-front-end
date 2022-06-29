import {
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Modal } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCourse } from "../../../redux/type";
import "./course.scss";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReactTooltip from "react-tooltip";


export default function AddCourse() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [infoCourse, setInfoCourse] = useState({
    courseName: "",
    courseGrade: "",
    courseImg: "",
    courseDescription: ""
  });

  const handelChange = (e) => {
    e.preventDefault();
    setInfoCourse({ ...infoCourse, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: addCourse, payload: infoCourse });
    handleClose();
  };



  return (
    <>
      <AddCircleOutlineIcon data-tip="Add a new Course"
        color="success" style={{marginLeft:"20px"}} onClick={handleShow}>

      </AddCircleOutlineIcon>
      <ReactTooltip />

      <Modal
        show={show}
        onHide={handleClose}
        class="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Course </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={12}>
                <FormGroup>
                  {/* <Label for="courseName">Course Name</Label> */}
                  <Input
                    id="course"
                    name="courseName"
                    placeholder="Course Name"
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            {/* <FormGroup>
              <Label for="GradeCourse">Grade course</Label>
              <Input
                id="Grade"
                name="courseGrade"
                placeholder="Grade..."
                type="number"
                onChange={handelChange}
              />
            </FormGroup> */}
            <FormGroup>
              {/* <Label for="courseDescription">course Description</Label> */}
              <Input
                id="courseDescription"
                name="courseDescription"
                placeholder="course Description"
                type="text"
                onChange={handelChange}
              />
            </FormGroup>
            {/* <FormGroup>
              <Label for="courseImg">Course Img</Label>
              <Input
                id="courseImg"
                name="courseImg"
                placeholder="Image..."
                type="text"
                onChange={handelChange}
              />
            </FormGroup> */}
            <Button color="success" onClick={handelSubmit}>
              Add Course
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}