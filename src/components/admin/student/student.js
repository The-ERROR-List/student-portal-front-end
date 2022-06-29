import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import Table from "react-bootstrap/Table";
import { Modal, Alert, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { useState, useContext, useEffect } from "react";
import { StateContext } from "../../../context/State";
import { useDispatch, useSelector } from "react-redux";
import { getStudentAction } from "../../../redux/student";
import DeleteIcon from "@mui/icons-material/Delete"; //*
import { deleteStudent } from "../../../redux/type"; //*
import cookie from "react-cookies";
import EditIcon from "@mui/icons-material/Edit";
import { api } from "../../../redux/type";
import Avatar from "react-avatar";
import "./student.scss";
import AddStudent from "./addStudent";
const Student = () => {
  const students = useSelector((state) => state.student.infoStudent);
  const state = useContext(StateContext);
  const dispatch = useDispatch();
  const [ids, setId] = useState({ id: "" });
  const [infoUpdate, setInfoUpdate] = useState({
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
    setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
  };

  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteStudent, payloadDelete: idToDelete });
  };

  function updateUser(e) {
    e.preventDefault();
    fetch(`${api}/student/${ids.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.load("token")}`,
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
        major: infoUpdate.major,
      }),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
    state.handleClose();
  }

  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getStudentAction());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-student">
      <Alert
        variant="success"
        style={{
          fontSize: "30px",
          color: "#005240",
          backgroundColor: "#005240",
          borderColor: "#005240",
        }}
      >
        <Alert.Heading
          style={{
            color: "white",
          }}
        >
          Students
          <AddStudent />
        </Alert.Heading>
      </Alert>
      <div className="student-table" style={{marginTop:"30px"}}>
        <Table striped bordered hover className="Student-table">
          <thead className="headerTable">
            <tr
              style={{
                backgroundColor: "#005240",
                color: "white",
                fontSize: "20px",
              }}
            >
              <th>Student Image</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Nationality</th>
              <th>Major</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => {
              return (
                <>
                  <tr className="content-table" key={i} style={{ fontSize:"20px"}}>
                    <td>
                      <Avatar
                        color={Avatar.getRandomColor("sitebase", [
                          "red",
                          "green",
                          "aqua",
                        ])}
                        size={50}
                        round="50%"
                        name={student.firstName}
                      />
                    </td>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.userName}</td>
                    <td>{student.nationality}</td>
                    <td>{student.major}</td>
                    <DeleteIcon
                      sx={{ fontSize: 67 }}
                      onClick={() => deleteFromDB(student.id)}
                      style={{ color: "#e8003f" }}
                    />
                    <EditIcon
                      sx={{ fontSize: 67 }}
                      style={{ color: "#ffd600" }}
                      onClick={() => {
                        idUser(student.id);
                        state.handleShow();
                      }}
                    />
                  </tr>
                  <Modal
                    show={state.show}
                    onHide={state.handleClose}
                    class="modal-dialog modal-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Student </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form style={{ width: "70%", margin: "auto" }}>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              {/* <Label for="userName">userName</Label> */}
                              <Input
                                id="userName"
                                name="userName"
                                placeholder={student.useName}
                                type="userName"
                                onChange={handelChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              {/* <Label for="firstName">First Name</Label> */}
                              <Input
                                id="firstName"
                                name="firstName"
                                placeholder={student.useName}
                                onChange={handelChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              {/* <Label for="lastName">Last Name </Label> */}
                              <Input
                                id="lastName"
                                name="lastName"
                                placeholder={student.lastName}
                                onChange={handelChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={3}>
                            <FormGroup>
                              {/* <Label for="role">role</Label> */}
                              <Input
                                id="role"
                                name="role"
                                placeholder={student.role}
                                value="student"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={3}>
                            <FormGroup>
                              {/* <Label for="gender">gender</Label> */}
                              <Input
                                id="gender"
                                name="gender"
                                placeholder={student.gender}
                                onChange={handelChange}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                              {/* <Label for="nationality">nationality</Label> */}
                              <Input
                                id="nationality"
                                name="nationality"
                                placeholder={student.nationality}
                                onChange={handelChange}
                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <FormGroup>
                          {/* <Label for="major">major</Label> */}
                          <Input
                            id="major"
                            name="major"
                            placeholder={student.major}
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
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default Student;
