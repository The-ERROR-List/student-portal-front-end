import {  Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import { Modal} from 'react-bootstrap'
import { useState,  useEffect } from 'react'

import { addStudent } from '../../../redux/type'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentAction } from '../../../redux/student';

import './student.scss'

export default function AddStudent() {

    // const state = useContext(StateContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const [infoStudent, setInfoStudent] = useState({
        userName: "",
        email: "",
        password: "",
        role: "student",
        firstName: "",
        lastName: "",
        gender: "",
        nationality: "",
        major: "",
    });

    const handelChange = (e) => {
        e.preventDefault();
        setInfoStudent({ ...infoStudent, [e.target.name]: e.target.value });
    };

    function handelSubmit(e) {
        e.preventDefault();
        dispatch({ type: addStudent, payload: infoStudent })
        handleClose()
    };

    useEffect(() => {
        dispatch(getStudentAction());
    }, [handelSubmit]);



    return (
        <>
            <Button
                color="success"
                onClick={handleShow}
            >
                Add Student
            </Button>

            <Modal show={show} onHide={handleClose} class="modal-dialog modal-lg">
                <Modal.Header closeButton>
                    <Modal.Title>Student form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handelSubmit} style={{ width: "70%", margin: "auto" }} >

                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="userName">userName</Label>
                                    <Input
                                        id="userName"
                                        name="userName"
                                        placeholder="userName..."
                                        type="userName"
                                        onChange={handelChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="Email..."
                                        type="email"
                                        onChange={handelChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password placeholder"
                                        type="password"
                                        onChange={handelChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        placeholder="First Name..."
                                        onChange={handelChange}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Last Name </Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        placeholder="Last Name...."
                                        onChange={handelChange}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="role">role</Label>
                                    <Input
                                        id="role"
                                        name="role"
                                        placeholder="role"
                                        value={infoStudent.role}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="gender">gender</Label>
                                    <Input
                                        id="gender"
                                        name="gender"
                                        placeholder="gender"
                                        onChange={handelChange}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="nationality">nationality</Label>
                                    <Input
                                        id="nationality"
                                        name="nationality"
                                        placeholder="nationality"
                                        onChange={handelChange}

                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <FormGroup>
                            <Label for="major">major</Label>
                            <Input
                                id="major"
                                name="major"
                                placeholder="major"
                                onChange={handelChange}
                            />
                        </FormGroup>

                        <Button color="success" onClick={handelSubmit}>
                            Add Student
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