import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './header.scss'
import { useState, useEffect, useContext } from 'react';
import { When } from 'react-if';
import cookie from 'react-cookies';
import { useSelector, useDispatch } from "react-redux"
import { getClassesInStudentsAction } from "../../redux/classesInStudents"
import { StateContext } from "../../context/State";

import { Link } from 'react-router-dom'


export default function Course() {
    const selector = useSelector(state => state.classesInStudents.classesStudent)
    const [show, setShow] = useState(false);
    const state = useContext(StateContext);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    useEffect(() => {
        if (cookie.load('role') === 'student') {

            dispatch(getClassesInStudentsAction())
        }

        if (cookie.load('role') === 'teacher') {
            state.getCourses()
        }
        // console.log({state})

    }, [show])
    function clicked() {
        handleClose()
        setTimeout(() => window.location.reload(), 50
        )
    }
    return (
        <>
            <LibraryBooksOutlinedIcon onClick={handleShow} fontSize="large" sx={{ fontSize: 30 }} color="white" /><p>Course</p>

            <Offcanvas show={show} onHide={handleClose} style={{ marginLeft: "140px" }}>
                <Offcanvas.Header closeButton>
                    <When condition={cookie.load('role') === 'teacher'}>
                        <Offcanvas.Title>Course</Offcanvas.Title>
                    </When>
                    <When condition={cookie.load('role') === 'student'}>
                        <Offcanvas.Title>Classes</Offcanvas.Title>
                    </When>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <hr />
                    <br />
                    <When condition={cookie.load('role') === 'student'}>
                        {
                            selector.classes ?
                                selector.classes.map((classs, i) => {

                                    return (
                                        <ul>
                                            <Link onClick={clicked} to={`/class-student/${classs.classId}`}>
                                                <li> {classs.className}</li>
                                            </Link>
                                        </ul>

                                    )
                                }) : null
                        }
                    </When>

                    <When condition={cookie.load('role') === 'teacher'}>
                        {
                            state.courses.TeacherCourses ?
                                state.courses.TeacherCourses.map((course, i) => {

                                    return (
                                        <ul>
                                            <Link to={`/course/${course['course id']}`} onClick={clicked}  >
                                                <li > {course['course Name']}</li>
                                            </Link>
                                        </ul>
                                    )
                                }) : null
                        }
                    </When>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

