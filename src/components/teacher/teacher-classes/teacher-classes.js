// import ClassList  from './classList/classList'
import axios from 'axios';
import cookie from 'react-cookies';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Card, CardTitle, CardText, Button, CardBody, CardImg, Alert } from "reactstrap";
import { api } from '../../../redux/type'
import './teacher-class.scss'
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table'

const TeacherClasses = (props) => {
    const [classes, setClasses] = useState([])
    let response;

    let params = useParams()
    const fetchItems = async () => {

        response = await axios.get(
            `${api}/get-all-classes-for-course-for-teacher/${params.id}/${cookie.load("id")}`,
            { headers: { Authorization: `Bearer ${cookie.load("token")}` }, }
        );
        console.log(response.data.classes)
        setClasses(...classes, response.data)
    };

    useEffect(() => {
        if (cookie.load('role') === 'teacher') {
            fetchItems()

        }
        console.log('params', params.id);
        console.log('idteacher', cookie.load('id'))
    }, [])


    return (
        <div className='teacherClass'>
            <div >
                <Alert
                   style={{
                    fontSize: "30px",
                    color: "#ffff",
                    backgroundColor: "#005240",
                    borderColor: "#005240",
                    width: "100%"
        
                  }}>
                 The Class In Courses</Alert>
            </div>
            {/* <Row style={{ marginTop: "20px" }}> */}
            <Table striped bordered hover className="teacher-table" >
                <thead className='headerTable' style={{ textAlign: "center" }}>
                    <tr style={{ backgroundColor: "#005240", color: "white", fontSize: "20px" }} >
                        <th style={{ color: "white", textAlign: "center" }}>Class Name</th>
                        <th style={{ color: "white", textAlign: "center" }}>Course Name</th>
                        <th style={{ color: "white", textAlign: "center" }}>Teacher Name</th>
                        <th style={{ color: "white", textAlign: "center" }}>Class Time</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            classes.classes ?
                                classes.classes.map((classforTeacher, index) => {
                                    return (
                                        <>
                                            <tr className='content-table' key={index} style={{ fontSize: "20px", textAlign: "center" }} >
                                               
                                                    <td style={{ textAlign: "center" }}> <Link to={`/class/${classforTeacher.id}`}> {classforTeacher.className}</Link></td>
                                                
                                                <td style={{ textAlign: "center" }}>{classforTeacher.courseName}</td>
                                                <td style={{ textAlign: "center" }}>{classforTeacher.teacherName}</td>
                                                <td style={{ textAlign: "center" }}>{classforTeacher.classTime}</td>
                                            </tr>
                                           </>
                                    )

                                }) : null
                        }
                </tbody>
            </Table>
        </div>

    )
};
export default TeacherClasses;
