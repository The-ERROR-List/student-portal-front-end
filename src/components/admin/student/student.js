import { Table, Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap'
import { Modal } from 'react-bootstrap'
import { useState, useContext, useEffect } from 'react'
import { StateContext } from "../../../context/State";
import { addStudent } from '../../../redux/type'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentAction } from '../../../redux/student';
import DeleteIcon from '@mui/icons-material/Delete';//*
import { deleteStudent } from '../../../redux/type';//*
import cookie from 'react-cookies';
import EditIcon from "@mui/icons-material/Edit";
import { api } from '../../../redux/type';
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
    };

    function handelSubmit(e) {
        e.preventDefault();
        dispatch({ type: addStudent, payload: infoStudent })
        state.handleClose()
    };

    useEffect(() => {
        dispatch(getStudentAction());
    }, [handelSubmit]);



    return (
        <>
            {/* <Button
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
            </Modal> */}
        </>
    );
}
const Student = () => {
    const students = useSelector((state) => state.student.infoStudent);
    const state = useContext(StateContext)
    const dispatch = useDispatch()
    const [ids, setId] = useState({ id: '' });
    const [infoUpdate, setInfoUpdate] = useState({
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
        setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
    };
    const deleteFromDB = (idToDelete) => {
        dispatch({ type: deleteStudent, payloadDelete: idToDelete })
    }

    function updateUser(e) {
        e.preventDefault();
        let items = { ...infoUpdate };
        fetch(`${api}/student/${ids.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${cookie.load("token")}`,
            },
            body: JSON.stringify({
                userName: infoUpdate.userName,
                email: infoUpdate.email,
                password: infoUpdate.password,
                role: infoUpdate.role,
                firstName: infoUpdate.firstName,
                lastName: infoUpdate.lastName,
                gender: infoUpdate.gender,
                nationality: infoUpdate.nationality,
                major: infoUpdate.major
            })
        }).then((res) => res.json().then((data) => { console.log(data) }));


    }
    function idUser(id) {
        setId({
            ...ids,
            id: id,
        });
    }
    return (
        <div className="Student">
            <h1>Student</h1>
            <Submit />
            {students.map((student, i) => {
                return (
                    <>
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

                                <tr key={i}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.userName}</td>
                                    <td>{student.nationality}</td>
                                    <td>{student.major}</td>
                                    <DeleteIcon sx={{ fontSize: 50 }} onClick={() => deleteFromDB(student.id)} />
                                    <EditIcon
                                        sx={{ fontSize: 50 }}
                                        onClick={() => {
                                            idUser(student.id)
                                             state.handleShow()
                                        }}
                                    />
                                </tr>


                            </tbody>
                        </Table>
                        <Button
                            color="success"
                            // onClick={state.handleShow}
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
                                <Form style={{ width: "70%", margin: "auto" }} >

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

                                    <Button color="success" onClick={updateUser}>
                                        Update Student
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
            })}
        </div>
    )
}
export default Student;