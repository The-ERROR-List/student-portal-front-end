import { Table, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import { Modal } from 'react-bootstrap'
import { useState, useContext,useEffect } from 'react'
import { StateContext } from "../../../context/State";
import { addStudent } from '../../../redux/type'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentAction } from '../../../redux/student';
import './student.scss'
function Submit() {

    const state = useContext(StateContext)


    const dispatch = useDispatch();
    const [infoStudent, setInfoStudent] = useState({
        userName: "",
        email: "",
        password: "",
        role: "",
        firstName: "",
        lastName: "",
        gender: "",
        nationality: "",
        major: "",
    });

    const handelChange = (e) => {
        e.preventDefault();
        setInfoStudent({ ...infoStudent, [e.target.name]: e.target.value });
        console.log({ [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        // console.log("infTeacher", infoStudent);
        dispatch({ type: addStudent, payload: infoStudent })
        state.handleClose()
    };

    useEffect(() => {
        dispatch(getStudentAction());
    }, [handelSubmit]);

    return (
        <>
            <Button
                color="success"
                onClick={state.handleShow}
            >
                Add Student
            </Button>
            <Button
                color="warning"

            >
                Update information
            </Button>

            <Modal show={state.show} onHide={state.handleClose} class="modal-dialog modal-lg">
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
                                        // value="email"
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
                            <Col md={3}>
                                <FormGroup>
                                    <Label for="role">role</Label>
                                    <Input
                                        id="role"
                                        name="role"
                                        placeholder="role"
                                        onChange={handelChange}
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
                    <Button color="danger" onClick={state.handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}
const Student = () => {
    const students = useSelector((state) => state.student.infoStudent);
    return (
        <div className="Student">
            <h1>Student</h1>
            <Submit />
            <Table hover className="Student-table">
                <thead>
                    <tr>
                        <th>
                            First Name
                        </th>
                        <th>
                            Last Name
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            Nationality
                        </th>
                        <th>
                            Major
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, i) => {
                        return (
                            <tr key={i}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.userName}</td>
                                <td>{student.nationality}</td>
                                <td>{student.major}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </Table>
        </div>
    )
}
export default Student;