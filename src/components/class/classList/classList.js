
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
import { useSelector, useDispatch } from "react-redux";
import { addStudentInClass } from "../../../redux/type";
import { api } from '../../../redux/type';
import { useParams } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

function Submit() {
  const dispatch = useDispatch();
  const state = useContext(StateContext);
  // const [students, setStudents] = useState([]);
  const [infoStudentsToClass, setInfoStudentsToClass] = useState({
    className: "",
    userName: "",
    studentGrade: "",
  });

  function handelChange(e) {
    e.preventDefault();
    setInfoStudentsToClass({ ...infoStudentsToClass, [e.target.name]: e.target.value });

  }

  function handelSubmit(e) {
    e.preventDefault();
    dispatch({ type: addStudentInClass, payload: infoStudentsToClass });
    // setStudents([...students, infoStudents])
    state.handleClose();
  }

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
          <Form onSubmit={handelSubmit} style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={16}>
                <FormGroup>
                  <Label for="userName">userName</Label>
                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName..."
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="className">className</Label>
                  <Input
                    id="className"
                    name="className"
                    placeholder="className..."
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="studentGrade">Student Grade</Label>
                  <Input
                    id="studentGrade"
                    name="studentGrade"
                    placeholder="studentGrade..."
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button color="success" >
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
  const params = useParams();

  const auth = useContext(AuthContext);
  const state = useContext(StateContext);
  const [students, setStudents] = useState([]);



  console.log('propsStuside', props)


  const fetchStudents = async () => {
    let response = await axios.get(
      `${api}/get-allStudents-inClass/${params.id}`,
      { headers: { Authorization: `Bearer ${cookie.load("token")}` } }
    );

    setStudents(...students, response.data);
  };


    useEffect(() => {
      const interval = setInterval(() => {
        fetchStudents()
      }, 2000);
      return () => clearInterval(interval);
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
          {students.students
            ? students.students.map((studentListed, indx) => {
              return (
                <tr key={indx}>
                  <td>{studentListed.studentName}</td>
                  <When condition={auth.user.role !== "student"}>
                    <td>{studentListed.studentGrade}</td>
                  </When>
                </tr>
              );
            })
            : null}
        </tbody>
      </Table>

    </div>
  );
};
export default ClassList;
