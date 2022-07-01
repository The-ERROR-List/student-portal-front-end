import { Form, Row, Col, FormGroup, Input, Button } from "reactstrap";
import Table from "react-bootstrap/Table";
import { Modal, Alert} from "react-bootstrap";
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
    }, 4000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <thead className="headerTable" style={{ textAlign: "center" }}>
            <tr
              style={{
                backgroundColor: "#005240",
                color: "white",
                fontSize: "20px",
              }}
            >
              <th style={{ color: "white", textAlign: "center" }}>Student Image</th>
              <th style={{ color: "white", textAlign: "center"  }}>First Name</th>
              <th style={{ color: "white", textAlign: "center"  }}>Last Name</th>
              <th style={{ color: "white", textAlign: "center"  }}>Username</th>
              <th style={{ color: "white", textAlign: "center"  }}>Nationality</th>
              <th style={{ color: "white", textAlign: "center"  }}>Major</th>
              <th style={{ color: "white", textAlign: "center"  }}>Operations</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" , borderColor:"white" }}>
            {students.map((student, i) => {
              return (
                <>
                  <tr className="content-table" key={i} style={{ fontSize:"20px"}}>
                    <td style={{ textAlign: "center" }}>
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
                    <td style={{ textAlign: "center" }}>{student.firstName}</td>
                    <td style={{ textAlign: "center" }}>{student.lastName}</td>
                    <td style={{ textAlign: "center" }}>{student.userName}</td>
                    <td style={{ textAlign: "center" }}>{student.nationality}</td>
                    <td style={{ textAlign: "center" }}>{student.major}</td>
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
                    key={i}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Student </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form style={{ width: "70%", margin: "auto" }}>
                        <Row>
                          <Col md={12}>
                            <FormGroup>
                         
                              <Input
                                id="userName"
                                name="userName"
                                placeholder={student.useName}
                                type="userName"
                                onChange={handelChange}
                                defaultValue={student.userName}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <FormGroup>
                           
                              <Input
                                id="firstName"
                                name="firstName"
                                placeholder={student.useName}
                                onChange={handelChange}
                                defaultValue={student.firstName}

                              />
                            </FormGroup>
                            <FormGroup>
                             
                              <Input
                                id="lastName"
                                name="lastName"
                                placeholder={student.lastName}
                                onChange={handelChange}
                                defaultValue={student.lastName}

                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md={12}>
                            <FormGroup>
                             
                              <Input
                                id="role"
                                name="role"
                                placeholder={student.role}
                                value="student"
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                           
                              <Input
                                id="gender"
                                name="gender"
                                placeholder={student.gender}
                                onChange={handelChange}
                                defaultValue={student.gender}

                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup>
                          
                              <Input
                                id="nationality"
                                name="nationality"
                                placeholder={student.nationality}
                                onChange={handelChange}
                                defaultValue={student.nationality}

                              />
                            </FormGroup>
                          </Col>
                          <FormGroup>
                          
                          <Input
                            id="major"
                            name="major"
                            placeholder={student.major}
                            onChange={handelChange}
                            defaultValue={student.major}
                          />
                        </FormGroup>
                        </Row>

                      
                        <Button color="warning" onClick={updateUser}>
                          Update Student
                        </Button>
                      </Form>
                    </Modal.Body>
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
