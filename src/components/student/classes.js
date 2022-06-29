import { Row, Col, Card, CardTitle, CardText, Button, CardBody, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getClassesInStudentsAction } from "../../redux/classesInStudents"
import Table from 'react-bootstrap/Table'
import './student.scss'
import { Alert } from "reactstrap";

export default function StudentClass() {
  const selector = useSelector(state => state.classesInStudents.classesStudent)
  console.log({ selector });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClassesInStudentsAction())
  }, [])
  return (
    <div className="studentside" >

  
        <Alert
          style={{
            fontSize: "30px",
            color: "white",
            backgroundColor: "#005240",
            borderColor: "#005240",
         


          }}>

          {

            `Welcome ${selector.studentName}`
          }
        </Alert>
        <div className="teacher-table" style={{marginTop:"30px"}}>
      
      <Table striped bordered hover>
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
            selector.classes ?
              selector.classes.map((classs, i) => {
                return (
                  <>
                    <tr className='content-table' key={i} style={{ fontSize: "20px" }} >
                     
                      <td style={{ textAlign: "center" }}> <Link to={`/class-student/${classs.classId}`}> {classs.className}</Link></td>
                      <td style={{ textAlign: "center" }}>{classs.courseName}</td>
                      <td style={{ textAlign: "center" }}>{classs.teacherName}</td>
                      <td style={{ textAlign: "center" }}>{classs.classTime}</td>
                    </tr>

                  </>
                )
              }) : null
          }
        </tbody>
      </Table>
      </div>
    </div>
  )
}

