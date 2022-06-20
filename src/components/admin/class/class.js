import { Table, Form, Row, Col, FormGroup, Label, Input } from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "./student.scss";
function Submit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Class
      </Button>

      <Modal show={show} onHide={handleClose} class="modal-dialog modal-lg">
        <Modal.Header closeButton>
          <Modal.Title>Class form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={6}>
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add Class
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
const Class = () => {
  return (
    <div className="class">
      <h1>Class</h1>
      <Submit />
      <Table className="class-table">
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
