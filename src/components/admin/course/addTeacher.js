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
export default function AddTeacher() {
    const state = useContext(StateContext);
    const dispatch = useDispatch();
    const [infoCourse, setInfoCourse] = useState({
        userName: "",
        courseName: "",
    });

    const handelChange = (e) => {
        e.preventDefault();
        setInfoCourse({ ...infoCourse, [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log("infoCourse", infoCourse);
        dispatch({ type: addCourseToTeacher, payload: infoCourse });
        state.handleClose();
    };

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     console.log();
    // };

    // useEffect(() => {
    //     dispatch(getCourseAction());
    // }, [handelSubmit]);

    return (
        <>
            <Button color="warning" onClick={state.handleShow}>
                Add Course To Teacher
            </Button>



            
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
                            <Label for="userName">Teacher Name</Label>
                            <Input
                                id="userName"
                                name="userName"
                                placeholder="userName..."
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
                    <Button color="danger" onClick={state.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}