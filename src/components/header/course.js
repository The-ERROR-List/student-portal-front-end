import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './course.scss'
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
                        <Offcanvas.Title style={{ fontSize: "45px" }}>Course</Offcanvas.Title>
                    </When>
                    <When condition={cookie.load('role') === 'student'}>
                        <Offcanvas.Title style={{ fontSize: "45px" }} >Classes</Offcanvas.Title>
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
                                            <Link  onClick={clicked} to={`/class-student/${classs.classId}`}>
                                                <div className='list-side-bar'>
                                                    <h1> {classs.className}</h1>
                                                </div>
                                            </Link>
                                    )
                                }) : null
                        }
                    </When>
                    <When condition={cookie.load('role') === 'teacher'}>
                        {
                            state.courses.TeacherCourses ?
                                state.courses.TeacherCourses.map((course, i) => {
                                    return (
                                            <Link to={`/course/${course['course id']}`} onClick={clicked}  >
                                                <div className='list-side-bar'>
                                                    <h1> {course['course Name']}</h1>
                                                    
                                                </div>
                                                <hr/>
                                            </Link>
                                    )
                                }) : null
                        }
                    </When>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

