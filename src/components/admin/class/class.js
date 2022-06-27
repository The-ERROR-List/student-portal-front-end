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
import EditIcon from "@mui/icons-material/Edit";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteClass } from "../../../redux/type";
import DeleteIcon from "@mui/icons-material/Delete";
import Submit from "./addClass";
import { api } from "../../../redux/type";
import cookie from "react-cookies";
import "./class.scss";

const Class = () => {
  const classes = useSelector((state) => state.class.infoClass);
  const dispatch = useDispatch();
  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteClass, payloadDelete: idToDelete });
  };
  const [ids, setId] = useState({ id: "" });
  const [infoUpdate, setInfoUpdate] = useState({
    className: "",
    courseName: "",
    userName: "",
    classTime: "",
    classImage: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function updateClass(e) {
    e.preventDefault();
    fetch(`${api}/classes/${ids.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.load("token")}`,
      },
      body: JSON.stringify({
        className: infoUpdate.className,
        courseName: infoUpdate.courseName,
        userName: infoUpdate.userName,
        classTime: infoUpdate.classTime,
        classImage: infoUpdate.classImage,
      }),
    })
      .then((response) => {
        console.log("response", response.json());
        return response;
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    handleClose();
  }

  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }

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
          {classes.map((classInfo, i) => {
            return (
              <>
                <tr key={i}>
                  <td>
                    <Link to={`/adminClass/${classInfo.id}`}>
                      {classInfo.className}
                    </Link>
                  </td>
                  <td>{classInfo.courseName}</td>
                  <td>{classInfo.teacherName}</td>
                  <td>{classInfo.classTime}</td>
                  <DeleteIcon
                    sx={{ fontSize: 50 }}
                    onClick={() => {
                      deleteFromDB(classInfo.id);
                    }}
                  />
                  <EditIcon
                    sx={{ fontSize: 67 }}
                    onClick={() => {
                      idUser(classInfo.id);
                      handleShow();
                    }}
                  />
                </tr>
                <Modal
                  show={show}
                  onHide={handleClose}
                  class="modal-dialog modal-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Class form</Modal.Title>
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
                              placeholder={classInfo.className}
                              type="text"
                              onChange={handelChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="courseName">Course Name</Label>
                            <Input
                              id="course"
                              name="courseName"
                              placeholder={classInfo.courseName}
                              type="text"
                              onChange={handelChange}
                            />
                          </FormGroup>

                          <FormGroup>
                            <Label for="userName">userName Teacher</Label>
                            <Input
                              id="userName"
                              name="userName"
                              placeholder={classInfo.userName}
                              type="userName"
                              onChange={handelChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="classImage">Image Class</Label>
                            <Input
                              id="classImage"
                              name="classImage"
                              placeholder={classInfo.classImage}
                              type="classTime"
                              onChange={handelChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="classTime">Class Time</Label>
                            <Input
                              id="classTime"
                              name="classTime"
                              placeholder={classInfo.classTime}
                              type="classTime"
                              onChange={handelChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>

                      <Button color="warning" onClick={updateClass}>
                        Update Class
                      </Button>
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
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default Class;
