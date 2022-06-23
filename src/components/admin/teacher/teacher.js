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
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { StateContext } from "../../../context/State";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../../redux/type";
import { getTeacherAction } from "../../../redux/teacher";
import { deleteTeacher } from "../../../redux/type";
import "./teacher.scss";

function Submit() {
  const state = useContext(StateContext);
  const dispatch = useDispatch();
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
    console.log({ [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log("infTeacher", infoTeacher);
    dispatch({ type: addTeacher, payload: infoTeacher });
    state.handleClose();
  };

 
  //invoke
  useEffect(() => {
    dispatch(getTeacherAction());
  }, [handelSubmit]);

  return (
    <>
      <Button color="success" onClick={state.handleShow}>
        Add Teacher
      </Button>
      <Button color="warning">Update information</Button>

      <Modal
        show={state.show}
        onHide={state.handleClose}
        class="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Teacher form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
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
              <Label for="department">department</Label>
              <Input
                id="department"
                name="department"
                placeholder="department"
                onChange={handelChange}
              />
            </FormGroup>

            <Button color="success" onClick={handelSubmit}>
              Add Teacher
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
const Teacher = () => {
  const teachers = useSelector((state) => state.teacher.infoTeacher);
  const dispatch=useDispatch();
  console.log(1111111111111111,teachers);
  const deleteFromDB=(idToDelete)=>{
    dispatch({type:deleteTeacher,payloadDelete:idToDelete})
  }
  return (
    <div className="teacher">
      <h1>Teachers</h1>
      <Submit />
      <Table  className="teacher-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Nationality</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, i) => {
            return (
              <tr key={i}>
                <td>{teacher.firstName}</td>
                <td>{teacher.lastName}</td>
                <td>{teacher.userName}</td>
                <td>{teacher.nationality}</td>
                <td>{teacher.department}</td>
                <DeleteIcon sx={{ fontSize:50 }} onClick={()=>deleteFromDB(teacher.id)} />
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Teacher;
