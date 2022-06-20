import React, { useState, useContext } from "react";
// import cookie from 'react-cookies';
import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { AuthContext } from "../../context/Auth";
import cookie from 'react-cookies';
// import axios from "axios";
export default function Admin() {
  const auth = useContext(AuthContext);
  // console.log(111111111,auth);
  const data = useSelector((state) => state.teacher.infoTeacher);
  // console.log(111111111, data);
  const dispatch = useDispatch();

  const [infoTeacher, setInfoTeacher] = useState({
    userName: "",
    email: "",
    password: "",
    role: "",
    firstName: "",
    lastName: "",
    gender: "",
    nationality: "",
    department: "",
  });

  const handelChange = (e) => {
    e.preventDefault();
    setInfoTeacher({ ...infoTeacher, [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log("infTeacher", infoTeacher);
    dispatch( {type: "add_teacher" , payload:infoTeacher})
  };

  return (
    <div>
      <Form style={{ width: "70%", margin: "auto" }} onSubmit={handelSubmit}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="userName">userName</Label>
              <Input
                id="userName"
                name="userName"
                placeholder="userName..."
                type="userName"
                onChange={handelChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="email"
                name="email"
                // value="email"
                placeholder="Email..."
                type="email"
                onChange={handelChange}
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
                onChange={handelChange}
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
                onChange={handelChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for="lastName">Last Name </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Last Name...."
                onChange={handelChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="role">role</Label>
              <Input
                id="role"
                name="role"
                placeholder="role"
                onChange={handelChange}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="gender">gender</Label>
              <Input
                id="gender"
                name="gender"
                placeholder="gender"
                onChange={handelChange}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="nationality">nationality</Label>
              <Input
                id="nationality"
                name="nationality"
                placeholder="nationality"
                onChange={handelChange}
              />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="department">department</Label>
          <Input
            id="department"
            name="department"
            placeholder="department"
            onChange={handelChange}
          />
        </FormGroup>
        {/* <Button>update</Button> */}
        <Button>Add</Button>
      </Form>
    </div>
  );
}
