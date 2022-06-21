import { Table, Form, Row, Col, FormGroup, Label, Input,Button } from "reactstrap";
import {  Modal } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useState,useContext } from "react";
import "./class.scss";

function Submit() {
  const state=useContext(StateContext);
  return (
    <>
       <Button
        color="success"
        
        onClick={state.handleShow}
      >
        Add Class
      </Button>
      <Button
        color="warning"
        
      >
        Update information
      </Button>
      <Modal show={state.show} onHide={state.handleClose} class="modal-dialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Class form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={16}>
                <FormGroup>
                  <Label for="className">Class Name</Label>
                  <Input
                    id="class"
                    name="class"
                    placeholder="class..."
                    type="text"
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
                  <Label for="userName">userName</Label>
                  <Input
                    id="userName"
                    name="userName"
                    placeholder="userName..."
                    type="userName"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="success" onClick={state.handleClose}>
            Close
          </Button>
          <Button color="danger" onClick={state.handleClose}>
            Add Class
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const Class = () => {
  return (
    <div   className="class">
      <h1>Class</h1>
      <Submit />
      <Table  hover className="class-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Couse Name</th>
            <th>Teacher Name</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <th>Couse Name</th>
            <th>Teacher Name</th>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <th>Couse Name</th>
            <th>Teacher Name</th>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <th>Couse Name</th>
            <th>Teacher Name</th>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
export default Class;
