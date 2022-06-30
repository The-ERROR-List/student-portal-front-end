import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTeacher } from "../../../redux/type";
import "./add.css";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
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
     
      <PersonAddIcon
        onClick={handleShow}
        data-tip="Add new teacher"
        style={{ marginLeft: "20px", fontSize: "1.9rem", marginBottom: "5px" }}
      >
        Add Teacher
      </PersonAddIcon>
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
            <Row style={{ marginTop: "0px" }}>
              <Col md={6}>
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
              <Col md={6}>
              
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
             
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={handelChange}
              />
              <Label for="firstName"></Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handelChange}
              />
              {/* <Label for="lastName"></Label> */}
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handelChange}
              />
              {/* <Label for="nationality"></Label> */}
              <Input
                id="nationality"
                name="nationality"
                placeholder="nationality"
                onChange={handelChange}
              />
              {/* <Label for="department"></Label> */}
              <Input
                id="department"
                name="department"
                placeholder="department"
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
                  border: "solid",
                  borderColor: "white",
                }}
              >
                <option value="male">Male</option>
                <option value="female"> Female</option>
              </select>

              <Button color="success" style={{ marginTop: "20px"  }}>
                Add Teacher
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
