import { Row, Col, Card, CardTitle, CardText, Button, CardBody, CardImg } from "reactstrap";
import { Link } from 'react-router-dom';
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getClassesInStudentsAction } from "../../redux/classesInStudents"
import Table from 'react-bootstrap/Table'

import { Alert } from "reactstrap";

export default function StudentClass() {
  const selector = useSelector(state => state.classesInStudents.classesStudent)
  console.log({ selector });
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(getClassesInStudentsAction())
  }, [])
  return (
    <div className="teacherside" style={{ marginRight: "0px", marginLeft: "-29px" }}>

      <div className="teacher-header">
        <Alert
          style={{
            fontSize: "30px",
            color: "#ffff",
            backgroundColor: "#005240",
            borderColor: "#005240",
            width: "100%"


          }}>

          {

            `welcome ${selector.studentName}`
          }
        </Alert>
      </div>
      <Table striped bordered hover className="teacher-table" >
        <thead className='headerTable'>
          <tr style={{ backgroundColor: "#005240", color: "white", fontSize: "20px" }} >
            <th>Class Name</th>
            <th>Course Name</th>
            <th>Teacher Name</th>
            <th>Class Time</th>
          </tr>
        </thead>
        <tbody>
          {
            selector.classes ?
              selector.classes.map((classs, i) => {
                return (
                  <>
                    <tr className='content-table' key={i} style={{ fontSize: "20px" }} >
                      <Link to={`/class-student/${classs.classId}`}>
                        <td>{classs.className}</td>
                      </Link>
                      <td>{classs.courseName}</td>
                      <td>{classs.teacherName}</td>
                      <td>{classs.classTime}</td>
                    </tr>

                  </>
                )
              }) : null
          }
        </tbody>
      </Table>
    </div>
  )
}

