import {api} from'../../../redux/type'
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
import { Modal } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../context/Auth";
import cookie from "react-cookies";
import { When } from "react-if";
import axios from "axios";
import { api } from '../../../redux/type'
function Submit() {
  const state = useContext(StateContext);
  return (
    <>
      <Button color="success" onClick={state.handleShow}>
        Add Student to class
      </Button>
      <Button color="warning">Update information</Button>
      <Modal
        show={state.show}
        onHide={state.handleClose}
        class="modal-dialog modal-lg"
      >
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
          <Button onClick={state.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const ClassList = (props) => {
  const auth = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  ;
  
  console.log('propsStuside',props)

  const fetchStudents = async () => {
    let response = await axios.get(

      `${api}/get-allStudents-inClass/${props.id}`,
      { headers: { Authorization: `Bearer ${cookie.load("token")}` } }
    );

    setStudents(...students, response.data);
  };

  useEffect(() => {
    fetchStudents();
    // console.log("paramssssss", props.id);
  }, []);

  return (
    <div>
      {console.log(students.students)}

      <h1>{ }</h1>
      <When condition={cookie.load("role") === "admin"}>
        <Submit />
      </When>

      <Table size="" style={{ marginLeft: "20px" }}>
        <thead>
          <tr>
            <th> Student Name</th>
            <When condition={auth.user.role !== "student"}>
              <th>Grade</th>
            </When>
          </tr>
        </thead>
        <tbody>

          {
            students.students ?
              students.students.map((studentListed, indx) => {
                return (<tr key={indx}>
                  <td>{studentListed.studentName}</td>
                  <When condition={auth.user.role !== "student"}>
                    <td>{studentListed.studentGrade}</td>
                  </When>
                </tr>
                )
              }
              ) : null

          }
        </tbody>
      </Table>
    </div>
  );
};
export default ClassList;
