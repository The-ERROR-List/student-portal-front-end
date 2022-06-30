/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";
import cookie from "react-cookies";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllCourse2Teacher } from "../../../redux/teacherToCourse";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCourse } from '../../../redux/type';
// import { StateContext } from "../../../context/State";
import EditIcon from "@mui/icons-material/Edit";
import { Modal } from "react-bootstrap";
import { api } from '../../../redux/type';
import "./course.scss";
import './course-teacher.scss'

export default function Course_Card(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const selector = useSelector(
  //   (state) => state.teacherTocourse.teacherIntoCourse
  // );
  const [ids, setId] = useState({ id: '' });
  const [infoUpdate, setInfoUpdate] = useState({
    courseName: "", courseGrade: "", courseDescription: "", courseImg: ""
  });
  const dispatch = useDispatch();
  const handelChange = (e) => {
    e.preventDefault();
    setInfoUpdate({ ...infoUpdate, [e.target.name]: e.target.value });
  };

  function idUser(id) {
    setId({
      ...ids,
      id: id,
    });
  }

  function updateUser(e) {
    e.preventDefault();
    fetch(`${api}/courses/${ids.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${cookie.load("token")}`,
      },
      body: JSON.stringify({
        courseName: infoUpdate.courseName,
        courseGrade: infoUpdate.courseGrade,
        courseDescription: infoUpdate.courseDescription,
        courseImg: infoUpdate.courseImg,
      })
    }).then((res) => res.json().then((data) => { console.console(data) }));


    handleClose();
  }


  // const state = useContext(StateContext);


  const deleteFromDB = (idToDelete) => {
    dispatch({ type: deleteCourse, payloadDelete: idToDelete })
  }


  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getAllCourse2Teacher(props.course.id));
    }, 2000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div >
      <section class="page-contain">
        <a href="#" class="data-card">
          <h3 id="corseName">{props.course.courseName}</h3>
          {/* <h4>{selector.map((teacher, i) => {
            return (
            <>
            {teacher.TeacherName}
            </>
            );
            
          })}</h4> */}
          <span class="link-text">
            <h3>{props.course.courseDescription}</h3>
          </span>
          <div class="edit-delete">
            <DeleteIcon id="deleteB" sx={{ fontSize: 40 }} onClick={() => deleteFromDB(props.course.id)} />

            <EditIcon id="editB"

              sx={{ fontSize: 40 }}
              onClick={() => {
                idUser(props.course.id)
                handleShow()
              }}
            />
          </div>
        </a>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        class="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update information Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
                <FormGroup>
                  {/* <Label for="courseName">Course Name</Label> */}
                  <Input
                    id="course"
                    name="courseName"
                    placeholder={props.course.courseName}
                    type="text"
                    onChange={handelChange}
                    defaultValue={props.course.courseName}
                  />
                </FormGroup>
        
            <FormGroup>
              {/* <Label for="courseDescription">course Description</Label> */}
              <textarea
              
                   rows="4" cols="50"
                id="courseDescription"
                name="courseDescription"
                placeholder={props.course.courseDescription}
                type="text"
                onChange={handelChange}
                defaultValue={props.course.courseDescription}

              />
            </FormGroup>
        
            <Button color="warning" onClick={updateUser}>
              update Course
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

