import { StateContext } from "../../../context/State";
import { useEffect, useState, useContext } from "react";
import {
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
    }, 4000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

                  <Input
                    id="course"
                    name="courseName"
                    placeholder="courseName"
                    type="text"
                    onChange={handelChange}
                  />
                </FormGroup>

                <FormGroup>

                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName"
                    type="userName"
                    onChange={handelChange}
                  />
                </FormGroup>

                <FormGroup>

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
      </Modal>
    </>
  );
}