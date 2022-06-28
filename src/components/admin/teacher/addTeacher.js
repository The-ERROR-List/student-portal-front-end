import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../../redux/type";
import "./add.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReactTooltip from "react-tooltip";

export default function AddStudent() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [infoTeacher, setInfoTeacher] = useState({
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

  const handelChange = (e) => {
    e.preventDefault();
    setInfoTeacher({ ...infoTeacher, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: addTeacher, payload: infoTeacher });
    handleClose();
  };

  return (
    <>
      {/* <Button color="success" onClick={handleShow} style={{
             color: "white"
           }}>
                Add Teacher
            </Button> */}
      <AddCircleOutlineIcon
        onClick={handleShow}
        data-tip="Add a new teacher"
        style={{ marginLeft: "20px" }}
      >
        Add Teacher
      </AddCircleOutlineIcon>
      <ReactTooltip />

      <Modal show={show} onHide={handleClose} class="modal-dialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#005240" }}>
            Add New Teacher
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handelSubmit}
            style={{ width: "70%", margin: "auto" }}
          >
            <Row style={{marginTop:"0px"}}>
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
              <Label for="gender">gender</Label>
              <Input
                id="gender"
                name="gender"
                placeholder="gender"
                onChange={handelChange}
              />
              <Label for="nationality">nationality</Label>
              <Input
                id="nationality"
                name="nationality"
                placeholder="nationality"
                onChange={handelChange}
              />
              <Label for="department">department</Label>
              <Input
                id="department"
                name="department"
                placeholder="department"
                onChange={handelChange}
              />

              <Button color="success" style={{marginTop:"30px"}}>Add Teacher</Button>
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
