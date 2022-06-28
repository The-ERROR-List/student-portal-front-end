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
import { Alert } from "react-bootstrap";

export default function Class() {
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
    <div className="admin-teacher">
      <Alert variant="success" style={{
        fontSize: "30px",
        color: "#005240",
        backgroundColor: "#005240",
        borderColor: "#005240"
      }} >
        <Alert.Heading style={{

          color: "white",

        }}>
          Classes
          <Submit />
        </Alert.Heading>


      </Alert>
      <div style={{marginLeft : "-30px"}}>
        <Table striped bordered hover className="teacher-table" >
          <thead className='headerTable'>
            <tr style={{ backgroundColor: "#005240", color: "white", fontSize: "20px" }} >
              <th>Class Name</th>
              <th>Course Name</th>
              <th>Teacher Name</th>
              <th>class Time</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classInfo, i) => {
              return (
                <>
                  <tr className='content-table' key={i} style={{ fontSize: "20px" }} >
                    <td>
                      <Link to={`/adminClass/${classInfo.id}`}>
                        {classInfo.className}
                      </Link>
                    </td>                <td>{classInfo.courseName}</td>
                    <td>{classInfo.teacherName}</td>
                    <td>{classInfo.classTime}</td>

                    <DeleteIcon
                      sx={{ fontSize: 67 }}
                      onClick={() => deleteFromDB(classInfo.id)}
                      style={{ color: "#e8003f" }}
                    />
                    <EditIcon
                      sx={{ fontSize: 67 }}
                      style={{ color: "#ffd600" }}
                      onClick={() => {
                        idUser(classInfo.id)
                        handleShow()
                      }}
                    />
                  </tr>
                  <Modal
                    show={show}
                    onHide={handleClose}
                    class="modal-dialog modal-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Edit Class </Modal.Title>
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
                                placeholder={classInfo.className}
                                type="text"
                                onChange={handelChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="courseName"></Label>
                              <Input
                                id="course"
                                name="courseName"
                                placeholder={classInfo.courseName}
                                type="text"
                                onChange={handelChange}
                              />
                            </FormGroup>

                            <FormGroup>
                              <Label for="userName"></Label>
                              <Input
                                id="userName"
                                name="userName"
                                placeholder="Teacher Name"
                                type="userName"
                                onChange={handelChange}
                              />
                            </FormGroup>
                            <FormGroup>

                            </FormGroup>
                            <FormGroup>
                              <Label for="classTime"></Label>
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
              )
            })
            }


          </tbody>
        </Table>
      </div>
    </div>
  )
}