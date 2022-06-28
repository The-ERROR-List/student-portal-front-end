import {
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
import AddStudent from "./addTeacher"
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
  }, []);

  
  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }
  return (
    <div className="admin-teacher">
      <Alert variant="success" style={{
        fontSize: "30px",
       color: "#005240",
       backgroundColor: "#005240",
       borderColor: "none"
      }} >
         <Alert.Heading style={{
        
       color: "white",
      
      }}>
           Teacher Dashboard
           <AddStudent
           />

         </Alert.Heading>
    

      </Alert>
      <div className='teacher-table' >
        

        <div>
          <Table striped bordered hover className="teacher-table" >
            <thead className='headerTable'>
              <tr style={{backgroundColor:"#005240", color:"white"}} >
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
              {teachers.map((teacher, i) => {
                return (
                  <>
                    <tr className='content-table' key={i} >
                      <td><Avatar color={Avatar.getRandomColor('sitebase', ['black'])} size={50} round="50%" name={teacher.firstName} /></td>
                      <td>{teacher.firstName}</td>
                      <td>{teacher.lastName}</td>
                      <td>{teacher.userName}</td>
                      <td>{teacher.nationality}</td>
                      <td>{teacher.department}</td>

                      <DeleteIcon
                        sx={{ fontSize: 67 , color: "#e8003f"}}
                        onClick={() => deleteFromDB(teacher.id)}
                      />
                      <EditIcon
                        sx={{ fontSize: 67, color: "yellow" }}
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
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Edit Teacher form</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form
                          style={{ width: "70%", margin: "auto" }}
                        >
                          <Row>
                            <Col md={12}>
                              <FormGroup>
                                <Label for="userName1">userName</Label>
                                <Input
                                  id="userName1"
                                  name="userName"
                                  placeholder={teacher.userName}
                                  type="userName"
                                  onChange={handelChange}
                                />
                              </FormGroup>
                             
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12}>
                              <FormGroup>
                                <Label for="firstName1">First Name</Label>
                                <Input
                                  id="firstName1"
                                  name="firstName"
                                  placeholder={teacher.firstName}
                                  onChange={handelChange}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="lastName1">Last Name </Label>
                                <Input
                                  id="lastName1"
                                  name="lastName"
                                  placeholder={teacher.lastName}
                                  onChange={handelChange}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12}>
                              <FormGroup>
                                <Label for="role1">role</Label>

                                <Input
                                  id="role1"
                                  name="role"
                                  placeholder={teacher.role}
                                  value={"teacher"}
                                  onChange={handelChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col md={6}>
                              <FormGroup>
                                <Label for="gender1">gender</Label>
                                <Input
                                  id="gender1"
                                  name="gender"
                                  placeholder={teacher.gender}
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
                                  placeholder={teacher.nationality}
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
                              placeholder={teacher.department}
                              onChange={handelChange}
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
