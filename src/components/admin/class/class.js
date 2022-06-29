import {
  Table,
  Form,
  Row,
  Col,
  FormGroup,
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
    <div className="class">
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
      <div className="class-table" style={{marginTop:"30px"}}>
        <Table striped bordered hover  >
          <thead className='headerTable' style={{ textAlign: "center" }}>
            <tr style={{ backgroundColor: "#005240", color: "white", fontSize: "20px" }} >
              <th style={{ color: "white", textAlign: "center" }}>Class Name</th>
              <th style={{ color: "white", textAlign: "center" }}>Course Name</th>
              <th style={{ color: "white", textAlign: "center" }}>Teacher Name</th>
              <th style={{ color: "white", textAlign: "center" }}> Time</th>
              <th style={{ color: "white", textAlign: "center" }}>Operations</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" , borderColor:"white" }}>
            {classes.map((classInfo, i) => {
              return (
                <>
                  <tr className='content-table' key={i} style={{ fontSize: "20px" }} >
                    <td  style={{ textAlign: "center" }}>
                      <Link to={`/adminClass/${classInfo.id}`}>
                        {classInfo.className}
                      </Link>
                    </td>                <td  style={{ textAlign: "center" }}>{classInfo.courseName}</td>
                    <td  style={{ textAlign: "center" }}>{classInfo.teacherName}</td>
                    <td  style={{ textAlign: "center" }}>{classInfo.classTime}</td>

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
                    key={i}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title> Edit Class </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form style={{ width: "70%", margin: "auto" }}>
                        <Row>
                          <Col md={16}>
                            <FormGroup>
                             
                              <Input
                                id="class"
                                name="className"
                                placeholder={classInfo.className}
                                type="text"
                                onChange={handelChange}
                                defaultValue={classInfo.className}

                              />
                            </FormGroup>
                            <FormGroup>
                            
                              <Input
                                id="course"
                                name="courseName"
                                placeholder={classInfo.courseName}
                                type="text"
                                onChange={handelChange}
                                defaultValue={classInfo.courseName}
                                
                              />
                            </FormGroup>

                            <FormGroup>
                           
                              <Input
                                id="userName"
                                name="userName"
                                placeholder="Teacher Name"
                                type="userName"
                                onChange={handelChange}
                                defaultValue={classInfo.userName}

                              />
                            </FormGroup>
                            <FormGroup>

                            </FormGroup>
                            <FormGroup>
                             
                              <Input
                                id="classTime"
                                name="classTime"
                                placeholder={classInfo.classTime}
                                type="classTime"
                                onChange={handelChange}
                                defaultValue={classInfo.classTime}

                              />
                            </FormGroup>
                          </Col>
                        </Row>

                        <Button color="warning" onClick={updateClass}>
                          Update Class
                        </Button>
                      </Form>
                    </Modal.Body>
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