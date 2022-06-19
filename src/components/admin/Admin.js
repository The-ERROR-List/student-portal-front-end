import React from "react";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

// userName: userName,
// email: email,
// password: password,
// role: role,
// firstName: firstName,
// lastName: lastName,
// gender: gender,
// nationality: nationality,
// department: department

export default function Admin() {
  return (
    <div>
      <div class="image"></div>
      <Form style={{ width: "70%", margin: "auto" }}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="userName">userName</Label>
              <Input
                id="userName"
                name="userName"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="with a placeholder"
                type="email"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="First Name..."
              />
            </FormGroup>
          {/* </Col>
        </Row> */}
        {/* <Row> */}
          {/* <Col md={6}> */}
            <FormGroup>
              <Label for="lastName">Last Name </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name...."
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">City</Label>
              <Input id="exampleCity" name="city" />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input id="exampleState" name="state" />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="exampleZip">Zip</Label>
              <Input id="exampleZip" name="zip" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Check me out
          </Label>
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    </div>
  );
}
