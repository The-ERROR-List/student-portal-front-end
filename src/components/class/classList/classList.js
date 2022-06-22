import { Table, Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useContext } from "react";
import { AuthContext } from "../../../context/Auth";
import { When } from "react-if";
function Submit() {
    const state = useContext(StateContext);
    return (
        <>
            <Button
                color="success"

                onClick={state.handleShow}
            >
                Add Student to class
            </Button>
            <Button
                color="warning"

            >
                Update information
            </Button>
            <Modal show={state.show} onHide={state.handleClose} class="modal-dialog modal-lg">
                <Modal.Header closeButton>
                    <Modal.Title>List form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ width: "70%", margin: "auto" }}>
                        <Row>
                            <Col md={16}>
                                <FormGroup>
                                    <Label for="userName">userName</Label>
                                    <Input
                                        id="userName"
                                        name="userName"
                                        placeholder="userName..."
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="className">className</Label>
                                    <Input
                                        id="className"
                                        name="className"
                                        placeholder="className..."
                                        type="text"
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="Grade">Student Grade</Label>
                                    <Input
                                        id="Grade"
                                        name="Grade"
                                        placeholder="Grade..."
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Button color="success" onClick={state.handleClose}>
                        Add Student
                    </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={state.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
const ClassList = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <h1>{}</h1>
            <When condition={auth.user.role === 'admin'}>
                <Submit />
            </When>
            <Table
                size=""
            >
                <thead>
                    <tr>
                        <th>
                            First Name + Last Name
                        </th>
                        <When condition={auth.user.role !== "student"}>
                            <th>
                                Grade
                            </th>
                        </When>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            islam Attar
                        </td>
                        <When condition={auth.user.role !== "student"}>
                            <td>
                                85 %
                            </td>
                        </When>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default ClassList;