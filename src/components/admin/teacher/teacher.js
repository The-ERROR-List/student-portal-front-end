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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Modal } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { StateContext } from "../../../context/State";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../../redux/type";
import { getTeacherAction } from "../../../redux/teacher";
import { deleteTeacher } from "../../../redux/type";
import { updateTeacher } from "../../../redux/type";

import "./teacher.scss";

function Submit() {
  const state = useContext(StateContext);
  const teachers = useSelector((state) => state.teacher.infoTeacher);
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
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: addTeacher, payload: infoTeacher });
    state.handleClose();
  };

  //invoke
  useEffect(() => {
    dispatch(getTeacherAction());
  }, [teachers.id]);

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
            {/* onClick={handelSubmit} */}
            <Button color="success">Add Teacher</Button>
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
  // const [display, setDisplay] = useState(false);
  const [infoUpdate, setInfoUpdate] = useState({
    teacherId: "",
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
  const teachers = useSelector((state) => state.teacher.infoTeacher);
  const dispatch = useDispatch();
  const state = useContext(StateContext);

  const handelChange = (e) => {
    e.preventDefault();
    setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
  };

  const updateOnDB = (Update) => {
    setInfoUpdate({
      teacherId: Update.id,
      userName: Update.userName,
      // email: Update.email,
      // password: Update.password,
      role: Update.role,
      firstName: Update.firstName,
      lastName: Update.lastName,
      // gender:Update.gender,
      nationality: Update.nationality,
      department: Update.department,
    });
  };

  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteTeacher, payloadDelete: idToDelete });
  };
  return (
    <div className="teacher">
      <h1>Teachers</h1>
      <Submit />
      <Table className="teacher-table">
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
                <DeleteIcon
                  sx={{ fontSize: 50 }}
                  color="secondary"
                  onClick={() => deleteFromDB(teacher.id)}
                />
                <EditIcon
                  sx={{ fontSize: 50 }}
                  onClick={() => {
                    updateOnDB(teacher);
                  }}
                />
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div>
        <tr>
          <td>
            <input
              type="text"
              value={infoUpdate.userName}
              onChange={(e) => {
                setInfoUpdate(e.target.value);
              }}
            />
          </td>
          <td>
            <input
              type="text"
              value={infoUpdate.firstName}
              onChange={(e) => {
                setInfoUpdate(e.target.value);
              }}
            />
          </td>
          <br />
          <br />
          <input
            type="text"
            value={infoUpdate.lastName}
            onChange={(e) => {
              setInfoUpdate(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            value={infoUpdate.department}
            onChange={(e) => {
              setInfoUpdate(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            value={infoUpdate.nationality}
            onChange={(e) => {
              setInfoUpdate(e.target.value);
            }}
          />
          <br />
          <br />
        </tr>
        <button>Update User</button>
      </div>
    </div>
  );
};
export default Teacher;
