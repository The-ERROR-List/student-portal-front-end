import { StateContext } from "../../../context/State";
import { useEffect, useState, useContext } from "react";
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

  import { useDispatch } from "react-redux";
  import { getClassAction } from "../../../redux/class";
  import { addClass } from "../../../redux/type";




export default function Submit() {
    const dispatch = useDispatch();
    const state = useContext(StateContext);
    const [infoClass, setInfoClass] = useState({
      className: "",
      courseName: "",
      userName: "",
      classTime: "",
      classImage:""
    });
  
  
  
    const handelChange = (e) => {
      e.preventDefault();
      setInfoClass({ ...infoClass, [e.target.name]: e.target.value });
    };
  
    const handelSubmit = (e) => {
      e.preventDefault();
      dispatch({ type: addClass, payload: infoClass });
      state.handleClose();
    };
  
    
    useEffect(() => {
      const interval = setInterval(() => {
          dispatch(getClassAction());
      }, 2000);
      return () => clearInterval(interval);
    }, []);
    
    return (
      <>
        <Button color="success" onClick={state.handleShow}>
          Add Class
        </Button>
    
        <Modal
          show={state.show}
          onHide={state.handleClose}
          class="modal-dialog modal-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>Class form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form style={{ width: "70%", margin: "auto" }}>
              <Row>
                <Col md={16}>
                  <FormGroup>
                    <Label for="className">Class Name</Label>
                    <Input
                      id="class"
                      name="className"
                      placeholder="class..."
                      type="text"
                      onChange={handelChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="courseName">Course Name</Label>
                    <Input
                      id="course"
                      name="courseName"
                      placeholder="Course..."
                      type="text"
                      onChange={handelChange}
                    />
                  </FormGroup>
  
                  <FormGroup>
                    <Label for="userName">userName Teacher</Label>
                    <Input
                      id="userName"
                      name="userName"
                      placeholder="userName..."
                      type="userName"
                      onChange={handelChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="classImage">Image Class</Label>
                    <Input
                      id="classImage"
                      name="classImage"
                      placeholder="classImage..."
                      type="classTime"
                      onChange={handelChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="classTime">Class Time</Label>
                    <Input
                      id="classTime"
                      name="classTime"
                      placeholder="Class Time..."
                      type="classTime"
                      onChange={handelChange}
                    />
                  </FormGroup>
  
  
                </Col>
              </Row>
  
              <Button color="success" onClick={handelSubmit}>
                Add Class
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
  }