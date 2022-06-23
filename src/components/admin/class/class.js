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
import { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getClassAction } from "../../../redux/class";
import { addClass } from "../../../redux/type";
import "./class.scss";

function Submit() {

  const dispatch = useDispatch();
  const state = useContext(StateContext);
  const [infoClass, setInfoClass] = useState({
    className: "",
    courseName: "",
    userName: "",
    classTime: "",

  });



  const handelChange = (e) => {
    e.preventDefault();
    setInfoClass({ ...infoClass, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("infoClass", infoClass);
    dispatch({ type: addClass, payload: infoClass });
    state.handleClose();
  };

  useEffect(() => {
    dispatch(getClassAction());
  }, [handelSubmit]);

  return (
    <>
      <Button color="success" onClick={state.handleShow}>
        Add Class
      </Button>
      <Button color="warning">add course </Button>
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
const Class = () => {
  const classes = useSelector((state) => state.class.infoClass);
  return (
    <div className="class">
      <h1>Class</h1>
      <Submit />
      <Table hover className="class-table">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Course Name</th>
            <th>Teacher Name</th>
            <th>class Time</th>

          </tr>
        </thead>
        <tbody>
          {
            classes.map((classInfo, i) => {
              return (

                <tr key={i}>
                  <td>
                    {classInfo.className}
                  </td>
                  <td>{classInfo.courseName}</td>
                  <td>{classInfo.teacherName}</td>
                  <td>{classInfo.classTime}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};
export default Class;
