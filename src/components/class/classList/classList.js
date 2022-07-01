
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
import { useDispatch } from "react-redux";
import { addStudentInClass } from "../../../redux/type";
import { api } from '../../../redux/type';
import { useParams } from "react-router-dom";
import "./classList.scss";
import Avatar from "react-avatar";
import Calendar from 'react-calendar';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import ReactTooltip from "react-tooltip";




function Submit() {

  const dispatch = useDispatch();
  const state = useContext(StateContext);
  // const [students, setStudents] = useState([]);
  const [infoStudentsToClass, setInfoStudentsToClass] = useState({
    className: "",
    userName: "",
    studentGrade: "0",
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
      <PersonAddIcon onClick={state.handleShow} color="warning" data-tip="Add student to class" style={{ fontSize: "2rem" }}>
        Add Student to class
      </PersonAddIcon>
      <ReactTooltip />

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
                  {/* <Label for="userName">userName</Label> */}
                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName..."
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="className" >className</Label> */}
                  <Input
                    id="className"
                    name="className"
                    placeholder="className..."
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="studentGrade">Student Grade</Label> */}
                  {/* <Input
                    id="studentGrade"
                    name="studentGrade"
                    placeholder="studentGrade..."
                    type="text"
                    onChange={handelChange}

                  /> */}
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
  // const state = useContext(StateContext);
  const [students, setStudents] = useState([]);
  const [indexToEdit, setIndexToEdit] = useState(-1);
  const [grade, setGrade] = useState(0)
  const [value, onChange] = useState(new Date());


  const fetchStudents = async () => {
    let response = await axios.get(
      `${api}/get-allStudents-inClass/${params.id}`,
      { headers: { Authorization: `Bearer ${cookie.load("token")}` } }
    )
    setStudents(...students, response.data);

  };


  useEffect(() => {
    const interval = setInterval(() => {
      fetchStudents()
    },4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="admin-classlist">


      {/* <div style={{ display: "flex", flexDirection: "column", marginTop: "50px", marginLeft: "40px", justifyContent: "center" }} className='teacher-into-container'> */}


      <div style={{ display: "flex", flexDirection: "column", margin: "0 40px 260px" }}>
        <When condition={cookie.load("role") === "teacher"}>
          <div style={{ display: "flex", marginBottom: "50px" }} >
            <Avatar
              color={Avatar.getRandomColor("sitebase", [
                "red",
                "green",
                "aqua",
              ])}
              size={50}
              round="50%"
              name={props.teacherName}

            />
            <h1 style={{ marginLeft: "20px", marginTop: "12px" }}>{props.teacherName}</h1>
          </div>
        </When>


        <Calendar onChange={onChange} value={value} />
      </div>






      <div className="classList-table" style={{ marginTop: "30px" }}>
        <When condition={cookie.load("role") === "admin"}>
          <Submit />
        </When>
        <Table size="">
          <thead className="headerTable" style={{ textAlign: "center" }}>
            <tr style={{
              backgroundColor: "#005240",
              color: "white",
              fontSize: "20px",
            }}>
              <th style={{ color: "white", textAlign: "center" }}> Student Name</th>
              <When condition={auth.user.role !== "student"}>
                <th style={{ color: "white", textAlign: "center" }}>Grade</th>
                <th style={{ color: "#005240", textAlign: "center" }}>Grade</th>

              </When>
            </tr>
          </thead>
          <tbody>
            {students.students
              ? students.students.map((studentListed, indx) => {
                return (
                  <tr key={indx}>
                    <td style={{ textAlign: "center" }}>{studentListed.studentName}</td>
                    <When condition={auth.user.role !== "student"}>
                      <td style={{ textAlign: "center" }}>
                        <input style={{ textAlign: "center" }} type="text" value={grade} disabled={indx !== indexToEdit} onChange={(e) => {
                          // let _entries = [...students.students];
                          // _entries[indexToEdit] = e.target.value;
                          // setStudents(_entries);
                          setGrade(e.target.value)
                        }}
                          onBlur={() => {
                            setIndexToEdit(-1);
                          }}
                        />
                      </td>
                      <td>
                        <button
                          onClick={() => {
                            setIndexToEdit(indx);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </When>
                  </tr>
                );
              })
              : null}
          </tbody>
        </Table>
      </div>


    </div>


  );
};
export default ClassList;
