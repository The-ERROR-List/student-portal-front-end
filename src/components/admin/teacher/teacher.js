import {
  Table,
  Form,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Card, Alert } from 'react-bootstrap'
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { api } from '../../../redux/type';
import { Modal } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { StateContext } from "../../../context/State";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../../redux/type";
import { getTeacherAction } from "../../../redux/teacher";
import { deleteTeacher } from "../../../redux/type";
import { updateTeacher } from "../../../redux/type";
import Avatar from 'react-avatar';
// import { updateTeacher, getTeacherId } from "../../../redux/type";

import cookie from "react-cookies";

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
    department: "",
  });
  const teachers = useSelector((state) => state.teacher.infoTeacher);
  const dispatch = useDispatch();
  const state = useContext(StateContext);

  const handelChange = (e) => {
    e.preventDefault();
    setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
  };



  const deleteFromDB = (idToDelete) => {

    dispatch({ type: deleteTeacher, payloadDelete: idToDelete });
  };

  function updateUser(e) {
    e.preventDefault();
    fetch(`${api}/teacher/${ids.id}`, {
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
        department: infoUpdate.department
      })
    }).then((res) => res.json().then((data) => { console.console(data) }));


  }
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTeacherAction());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }
  return (
    <div className="admin-teacher">
      <Alert style={{
        fontSize: "30px",
        marginTop: "20px",
        marginRight: "60px",
        marginLeft: "55px",
      }} >
        <div style={{ display: "flex" }}>
          <Breadcrumb listTag="div">
            <BreadcrumbItem
              href="/"
              tag="a"
            >
              Dashboard/
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb listTag="div">
            <BreadcrumbItem
              href="/admin-teacher"
              tag="a"
            >
              Teacher
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

      </Alert>
      <div className='teacher-table' >
        <Submit />
        {teachers.map((teacher, i) => {
          return (
            <>
              <div>
                <Table className="teacher-table">
                  <thead className='headerTable'>
                    <tr >
                      <th >Image Teacher</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                      <th>Nationality</th>
                      <th>Department</th>
                      <th>Operations</th>
                    </tr>
                  </thead>
                  <tbody>

                    <tr className='content-table' key={i} >
                      <td><Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'aqua'])} size={50} round="50%" name={teacher.firstName} /></td>
                      <td>{teacher.firstName}</td>
                      <td>{teacher.lastName}</td>
                      <td>{teacher.userName}</td>
                      <td>{teacher.nationality}</td>
                      <td>{teacher.department}</td>

                      <DeleteIcon
                        sx={{ fontSize: 67 }}
                        color="secondary"
                        onClick={() => deleteFromDB(teacher.id)}
                      />
                      <EditIcon
                        sx={{ fontSize: 67 }}
                        onClick={() => {
                          idUser(teacher.id)
                          state.handleShow()
                        }}
                      />
                    </tr>


                  </tbody>
                </Table>
              </div>
              <div>
                <Button color="success" >
                  Add Teacher
                </Button>
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
                      // onSubmit={updateUser}
                      style={{ width: "70%", margin: "auto" }}
                    >
                      <Row>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="userName1">userName</Label>
                            <Input
                              id="userName1"
                              name="userName"
                              placeholder="userName..."
                              type="userName"
                              onChange={handelChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="exampleEmail1">Email</Label>
                            <Input
                              id="email1"
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
                            <Label for="examplePassword1">Password</Label>
                            <Input
                              id="examplePassword1"
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
                            <Label for="firstName1">First Name</Label>
                            <Input
                              id="firstName1"
                              name="firstName"
                              placeholder="First Name..."
                              onChange={handelChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="lastName1">Last Name </Label>
                            <Input
                              id="lastName1"
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
                            <Label for="role1">role</Label>

                            <Input
                              id="role1"
                              name="role"
                              placeholder="role"
                              onChange={handelChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={3}>
                          <FormGroup>
                            <Label for="gender1">gender</Label>
                            <Input
                              id="gender1"
                              name="gender"
                              placeholder="gender"
                              onChange={handelChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col md={6}>
                          <FormGroup>
                            <Label for="nationality1">nationality</Label>
                            <Input
                              id="nationality1"
                              name="nationality"
                              placeholder="nationality"
                              onChange={handelChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <FormGroup>
                        <Label for="department1">department</Label>
                        <Input
                          id="department1"
                          name="department"
                          placeholder="department"
                          onChange={handelChange}
                        />
                      </FormGroup>
                      <Button color="warning" onClick={
                        updateUser
                        // state.handleClose()
                      }
                      >Update information</Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button color="danger" >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>

            </>);
        })}
      </div>
    </div>
  );
};
export default Teacher;
