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
        style={{ marginLeft: "20px", fontSize: "1.9rem", marginBottom: "5px" }}
      >
        Add Student
      </AddCircleOutlineIcon>
      <ReactTooltip />
      <Modal
        show={show}
        onHide={handleClose}
        class="modal-dialog modal-lg"
      // key={i}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Student </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handelSubmit}
            style={{ width: "70%", margin: "auto" }} >
            <Row>
              <Col md={12}>
                <FormGroup>

                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName"
                    type="userName"
                    onChange={handelChange}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={12}>
                <FormGroup>

                  <Input
                    id="examplePassword"
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={handelChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>

                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    onChange={handelChange}
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
                    placeholder="First Name"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>

                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handelChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>

              <Col md={12}>
                <FormGroup>

                  <Input
                    id="nationality"
                    name="nationality"
                    placeholder="nationality"
                    onChange={handelChange}
                  />

                </FormGroup>
              </Col>
              <FormGroup>

                <Input
                  id="major"
                  name="major"
                  placeholder="major"
                  onChange={handelChange}
                />
                
                <Col md={12}>
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
                      border: "solid",
                      borderColor: "white",
                    }}
                  >
                    <option value="male">Male</option>
                    <option value="female"> Female</option>
                  </select>
                </Col>
              </FormGroup>
            </Row>


            <Button color="success" style={{ marginTop: "20px" }}>
              Add Student
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
