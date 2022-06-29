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
// <AddCircleOutlineIcon style={{marginLeft:"20px"}} color="warning" data-tip="Assign a Teacher to Course" onClick={handleShow}>
// </AddCircleOutlineIcon>

// <ReactTooltip />
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReactTooltip from "react-tooltip";

export default function Submit() {
  const dispatch = useDispatch();
  const state = useContext(StateContext);
  const [infoClass, setInfoClass] = useState({
    className: "",
    courseName: "",
    userName: "",
    classTime: "",
    classImage: ""
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
      <AddCircleOutlineIcon style={{ marginLeft: "20px" }} color="warning" data-tip="Add a new class" onClick={state.handleShow}>
      </AddCircleOutlineIcon>

      <ReactTooltip />

      <Modal
        show={state.show}
        onHide={state.handleClose}
        class="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Class</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={16}>
                <FormGroup>
                  <Label for="className"></Label>
                  <Input
                    id="class"
                    name="className"
                    placeholder="class"
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>
                <FormGroup>
                  {/* <Label for="courseName"></Label> */}
                  <Input
                    id="course"
                    name="courseName"
                    placeholder="courseName"
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>

                <FormGroup>
                  {/* <Label for="userName"></Label> */}
                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName"
                    type="userName"
                    onChange={handelChange}
                  />
                </FormGroup>
                {/* <FormGroup> */}
                  {/* <Label for="classImage"></Label> */}
                  {/* <Input
                    id="classImage"
                    name="classImage"
                    placeholder="classImage"
                    type="classTime"
                    onChange={handelChange}
                  />
                </FormGroup> */}
                <FormGroup>
                  {/* <Label for="classTime"></Label> */}
                  <Input
                    id="classTime"
                    name="classTime"
                    placeholder="Class Time"
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