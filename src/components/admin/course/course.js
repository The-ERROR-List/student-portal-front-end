import { Table, Form, Row, Col, FormGroup, Label, Input,Button } from "reactstrap";
import {  Modal } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useState,useContext } from "react";
import "./course.scss";
function Submit() {
  const state=useContext(StateContext);
  
  return (
    <>
      <Button
        color="success"
        onClick={state.handleShow}
      >
        Add Course
      </Button>

      <Button
        color="warning"
      >
        Update information
      </Button>
      <Modal show={state.show} onHide={state.handleClose} class="modal-dialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Course form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="userName">userName</Label>
                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName..."
                    type="userName"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="courseName">Course Name</Label>
                  <Input
                    id="course"
                    name="course"
                    placeholder="Course..."
                    type="text"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="GradeCourse">Grade course</Label>
                  <Input
                    id="Grade"
                    name="Grade"
                    placeholder="Grade..."
                    type="number"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={state.handleClose}>
            Close
          </Button>
          <Button  color="success" onClick={state.handleClose}>
            Add Course
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const Course = () => {
  return (
    <div   className="course">
      <h1>Course</h1>
      <Submit />
      <Table hover className="course-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Grade Course </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>50/50</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>100/100</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>50/50</td>
          </tr>
          
        </tbody>
      </Table>
    </div>
  );
};
export default Course;
