import React, { useState, useContext } from "react";
import cookie from 'react-cookies';
// import { useDispatch, useSelector } from "react-redux";
import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";
import { AuthContext } from "../../context/Auth";
import axios from "axios";
export default function Admin() {
  const auth = useContext(AuthContext);
  // console.log(111111111,auth);
  // const data = useSelector((state) => state.teacher.infoTeacher);
  // console.log(111111111, data);
  // const dispatch = useDispatch();

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
    // auth.signUp({
    //   userName: infoTeacher.userName,
    //   email: infoTeacher.email,
    //   password: infoTeacher.password,
    //   role: "teacher",
    //   firstName: infoTeacher.firstName,
    //   lastName: infoTeacher.lastName,
    //   gender: infoTeacher.gender,
    //   nationality: infoTeacher.nationality,
    //   department: infoTeacher.department,
    // });
    // if(auth.Authorized('delete')){
      fetch("https://student-portal-asac.herokuapp.com/signup/std-teacher", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cookie.load("token")}`,
      },
      body: JSON.stringify({
        userName: infoTeacher.userName,
        email: infoTeacher.email,
        password: infoTeacher.password,
        role: infoTeacher.role,
        firstName: infoTeacher.firstName,
        lastName: infoTeacher.lastName,
        gender: infoTeacher.gender,
        nationality: infoTeacher.nationality,
        department: infoTeacher.department,
      })
    })
      .then((response) => {
        console.log("res",response.json());
        response.json()
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    
    console.log("infTeacher", infoTeacher);
    // dispatch( {type: "add_teacher" , payload:infoTeacher})
  };

  return (
    <div>
      {/* <div class="image"></div> */}
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

        <Button>Add</Button>
      </Form>
    </div>
  );
}
