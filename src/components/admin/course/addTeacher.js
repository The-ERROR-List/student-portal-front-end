import {
    Form,
    Row,
    Col,
    Label,
    Input,
    
} from "reactstrap";
import { Modal ,Button,FormGroup } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useState, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCourseToTeacher } from "../../../redux/type";
export default function AddTeacherToCourse() {
    const state = useContext(StateContext);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [infoCourse, setInfoCourse] = useState({
        userName: "",
        courseName: "",
    });

    const handelChange = (e) => {
        e.preventDefault();
        setInfoCourse({ ...infoCourse, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: addCourseToTeacher, payload: infoCourse });
       handleClose();
    };

    
    return (
        <>
            <Button color="warning" onClick={handleShow}>
                Add Course To Teacher
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                class="modal-dialog modal-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Form Add Course </Modal.Title>
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
                            <Label for="userName">Teacher Name</Label>
                            <Input
                                id="userName"
                                name="userName"
                                placeholder="Teacher userName..."
                                type="userName"
                                onChange={handelChange}
                            />
                        </FormGroup>
                        <Button color="success" onClick={handelSubmit}>
                            Add Teacher to Course
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


