import React from "react";
import "./admin.scss";
import { Card, Alert } from "react-bootstrap";
import { CardColumns, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

export default function Admin() {
  return (
    <div className="admin">
      <Alert
        style={{
          fontSize: "30px",
          marginTop: "20px",
          marginRight: "60px",
          marginLeft: "55px",
        }}
      >
        DashBoard
      </Alert>

     
      <div className="admin-cards">
        <div className="admin-teacher">
          <Link to="admin-teacher">
            <Card
              style={{ width: "22rem", height: "33rem" , borderRadius:"20px"}}
              className="teacher"
            >
              <Card.Img
                variant="top"
                src={
                  "https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={"teacher"}
                
              />
              <Card.Body variant="bottom" style={{ marginTop: "20px" }}>
                <Card.Title>Teachers</Card.Title>
                <hr />
                <ol style={{ marginLeft: "10px" }}>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Render Table of teachers</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Add new teachers</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>
                      Delete teachers and Update teacher data
                    </Card.Text>
                  </li>
                </ol>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="admin-student">
          <Link to="admin-student">
            <Card
              style={{ width: "22rem", height: "33rem",borderRadius:"20px" }}
              className="student"
            >
              <Card.Img
                variant="top"
                src={
                  "https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={"student"}
              />
              <Card.Body variant="bottom" style={{ marginTop: "20px" }}>
                <Card.Title>Student</Card.Title>
                <hr />
                <ol style={{ marginLeft: "10px" }}>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Render Table of students</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Add new students</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>
                      Delete students and Update student data
                    </Card.Text>
                  </li>
                </ol>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="admin-course">
          <Link to="admin-course">
            <Card
              style={{ width: "22rem", height: "33rem",borderRadius:"20px"  }}
              className="course"
            >
              <Card.Img
                variant="top"
                src={
                  "https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={"course"}
              />
              <Card.Body variant="bottom" style={{ marginTop: "20px" }}>
                <Card.Title>Courses</Card.Title>
                <hr />
                <ol style={{ marginLeft: "10px" }}>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Render Courses</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Add courses</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Delete courses and Update Course data</Card.Text>
                  </li>
                </ol>
              </Card.Body>
            </Card>
          </Link>
        </div>
        <div className="admin-class">
          <Link to="admin-class">
            <Card
              style={{ width: "22rem", height: "33rem" ,borderRadius:"20px" }}
              className="class"
            >
              <Card.Img
                variant="top"
                src={
                  "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt={"class"}
              />
              <Card.Body variant="bottom" style={{ marginTop: "20px" }}>
                <Card.Title>Classes</Card.Title>
                <hr />
                <ol style={{ marginLeft: "10px" }}>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Render Table of classes</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Add new class</Card.Text>
                  </li>
                  <li style={{ marginTop: "10px" }}>
                    <Card.Text>Delete classes and Update class data</Card.Text>
                  </li>
                </ol>
              </Card.Body>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
