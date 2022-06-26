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
import { useContext, useState } from "react";
import { StateContext } from "../../../context/State";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../../redux/type";
export default function Submit() {
    const state = useContext(StateContext);
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [infoTeacher, setInfoTeacher] = useState({
        userName: "",
        email: "",
        password: "",
        role: "",
        firstName: "",
        lastName: "",
        gender: "",
        nationality: "",
        department: "",
    });

    const handelChange = (e) => {
        e.preventDefault();
        setInfoTeacher({ ...infoTeacher, [e.target.name]: e.target.value });
    };

    const handelSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: addTeacher, payload: infoTeacher });
        state.handleClose();
    };

    return (
        <>
            <Button color="success" onClick={handleShow}>
                Add Teacher
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                class="modal-dialog modal-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Teacher form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={handelSubmit}
                        style={{ width: "70%", margin: "auto" }}
                    >
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
                                        // value="email";
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
                            <Label for="department">department</Label>
                            <Input
                                id="department"
                                name="department"
                                placeholder="department"
                                onChange={handelChange}
                            />
                        </FormGroup>

                        <Button color="success">Add Teacher</Button>
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