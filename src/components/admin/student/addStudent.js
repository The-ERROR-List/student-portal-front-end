import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";

import { addStudent } from "../../../redux/type";
import { useDispatch } from "react-redux";
import { getStudentAction } from "../../../redux/student";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReactTooltip from "react-tooltip";
import "./student.scss";

export default function AddStudent() {
  // const state = useContext(StateContext)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const [infoStudent, setInfoStudent] = useState({
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
    console.log(e.target.value);
    setInfoStudent({ ...infoStudent, [e.target.name]: e.target.value });
  };

  function handelSubmit(e) {
    e.preventDefault();
    dispatch({ type: addStudent, payload: infoStudent });
    handleClose();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getStudentAction());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AddCircleOutlineIcon
        onClick={handleShow}
        data-tip="Add a new student"
        style={{ marginLeft: "20px" }}
      >
        Add Student
      </AddCircleOutlineIcon>
      <ReactTooltip />

      <Modal show={show} onHide={handleClose} class="modal-dialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#005240" }}>
            Add New Student
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handelSubmit}
            style={{ width: "70%", margin: "auto" }}
          >
            <Row style={{ marginTop: "0px" }}>
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
              </Col>
              <Col md={6}>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password"
                  type="password"
                  onChange={handelChange}
                />
              </Col>
            </Row>
            <Row>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Email..."
                type="email"
                onChange={handelChange}
              />
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name..."
                onChange={handelChange}
              />
              <Label for="lastName">Last Name </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name...."
                onChange={handelChange}
              />
              {/* <Label for="gender">Gender</Label>
              <Input
                id="gender"
                name="gender"
                placeholder="gender"
                onChange={handelChange}
              /> */}

              <Label for="nationality">Nationality</Label>
              <Input
                id="nationality"
                name="nationality"
                placeholder="nationality"
                onChange={handelChange}
              />

              <Label for="major">Major</Label>
              <Input
                id="major"
                name="major"
                placeholder="major"
                onChange={handelChange}
              />
              <select
                onChange={handelChange}
                name="gender"
                required
                style={{
                  marginTop: "10px",
                  color: "gray",
                  backgroundColor: "white",
                  padding: "5px",
                  borderRadius: "5px",
                  border:"solid",
                  borderColor:"white"
                }}
              >
                <option value="male">Male</option>
                <option value="female"> Female</option>
              </select>

              <Button color="success" style={{ marginTop: "20px" }}>
                Add Student
              </Button>
            </Row>

            {/* <Button color="success">Add Teacher</Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
