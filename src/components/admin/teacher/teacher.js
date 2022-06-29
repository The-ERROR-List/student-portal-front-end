import {
  Form,
  Row,
  Col,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import { Alert } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { api } from '../../../redux/type';
import { Modal } from "react-bootstrap";
import { useContext, useState, useEffect } from "react";
import { StateContext } from "../../../context/State";
import { useDispatch, useSelector } from "react-redux";
import { getTeacherAction } from "../../../redux/teacher";
import { deleteTeacher } from "../../../redux/type";
import Avatar from 'react-avatar';
import AddTeacher from "./addTeacher"
import cookie from "react-cookies";
import "./teacher.scss";


const Teacher = () => {
  const [ids, setId] = useState({ id: '' });
  const [infoUpdate, setInfoUpdate] = useState({
    userName: "",
    email: "",
    password: "",
    role: "teacher",
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
    state.handleClose();
  }


  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getTeacherAction());
    }, 2000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }
  return (
    <div id="admin-teacher">
      <Alert variant="success" style={{
        fontSize: "30px",
        color: "#005240",
        backgroundColor: "#005240",
        borderColor: "#005240"
      }} >

        <Alert.Heading style={{

          color: "white",

        }}>
          Teacher Dashboard
          <AddTeacher
          />

        </Alert.Heading>


      </Alert>
      <div className='teacher-table' style={{ marginTop: "30px" }} >


        <div>
          <Table striped bordered hover >
            <thead className="headerTable" style={{ textAlign: "center" }}>
              <tr style={{backgroundColor:"#005240", color:"white", fontSize:"20px"}} >
                <th style={{ color: "white", textAlign: "center" }}>Teacher Image</th>
                <th style={{ color: "white", textAlign: "center" }}>First Name</th>
                <th style={{ color: "white", textAlign: "center" }}>Last Name</th>
                <th style={{ color: "white", textAlign: "center" }}>Username</th>
                <th style={{ color: "white", textAlign: "center" }}>Nationality</th>
                <th style={{ color: "white", textAlign: "center" }}>Department</th>
                <th style={{ color: "white", textAlign: "center" }}>Operations</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" , borderColor:"white" }}>
              {teachers.map((teacher, i) => {
                return (
                  <>
                    <tr className='content-table' key={i}  style={{ fontSize:"20px"}} >
                      <td style={{ textAlign: "center" }}><Avatar color={Avatar.getRandomColor('sitebase', ['black'])} size={50} round="50%" name={teacher.firstName} /></td>
                      <td style={{ textAlign: "center" }}>{teacher.firstName}</td>
                      <td style={{ textAlign: "center" }}>{teacher.lastName}</td>
                      <td style={{ textAlign: "center" }}>{teacher.userName}</td>
                      <td style={{ textAlign: "center" }}>{teacher.nationality}</td>
                      <td style={{ textAlign: "center" }}>{teacher.department}</td>

                      <DeleteIcon
                        sx={{ fontSize: 67 }}
                        onClick={() => deleteFromDB(teacher.id)}
                        style={{ color: "#e8003f" }}
                      />
                      <EditIcon
                        sx={{ fontSize: 67 }}
                        style={{ color: "#ffd600" }}
                        onClick={() => {
                          idUser(teacher.id)
                          state.handleShow()
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
                        <Modal.Title>Edit Teacher </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form
                          style={{ width: "70%", margin: "auto" }}
                        >
                          <Row>
                            <Col md={12}>
                              <FormGroup>
                                {/* <Label for="userName1">userName</Label> */}
                                <Input
                                  id="userName1"
                                  name="userName"
                                  placeholder={teacher.userName}
                                  type="userName"
                                  onChange={handelChange}
                                  defaultValue={teacher.userName}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12}>
                              <FormGroup>
                                {/* <Label for="firstName1">First Name</Label> */}
                                <Input
                                  id="firstName1"
                                  name="firstName"
                                  placeholder={teacher.firstName}
                                  onChange={handelChange}
                                  defaultValue={teacher.firstName}
                                />
                              </FormGroup>
                              <FormGroup>
                                {/* <Label for="lastName1">Last Name </Label> */}
                                <Input
                                  id="lastName1"
                                  name="lastName"
                                  placeholder={teacher.lastName}
                                  onChange={handelChange}
                                  defaultValue={teacher.lastName}
                                  
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12}>
                              <FormGroup>
                                {/* <Label for="role1">role</Label> */}
                                <Input
                                  id="role1"
                                  name="role"
                                  placeholder={teacher.role}
                                  value={"teacher"}
                                  onChange={handelChange}
                                  defaultValue={teacher.role}
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup>
                                {/* <Label for="gender1">gender</Label> */}
                                <Input
                                  id="gender1"
                                  name="gender"
                                  placeholder={teacher.gender}
                                  onChange={handelChange}
                                  defaultValue={teacher.gender}
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup>
                                {/* <Label for="nationality1">nationality</Label> */}
                                <Input
                                  id="nationality1"
                                  name="nationality"
                                  placeholder={teacher.nationality}
                                  onChange={handelChange}
                                  defaultValue={teacher.gender}

                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup>
                            {/* <Label for="department1">department</Label> */}
                            <Input
                              id="department1"
                              name="department"
                              placeholder={teacher.department}
                              onChange={handelChange}
                              defaultValue={teacher.department}
                            />
                          </FormGroup>
                          <Button color="warning" onClick={
                            updateUser
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
                  </>);
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default Teacher;
