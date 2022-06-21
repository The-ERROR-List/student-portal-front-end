
import cookie from 'react-cookies';
import { api } from './type';

//============================create data================================

//1.  create Teacher 
export function createTeacher(payload) {
  fetch(`${api}/signup/std-teacher`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,

    },
    body: JSON.stringify({
      userName: payload.userName,
      email: payload.email,
      password: payload.password,
      role: payload.role,
      firstName: payload.firstName,
      lastName: payload.lastName,
      gender: payload.gender,
      nationality: payload.nationality,
      department: payload.department
    })
  })
    .then((response) => {
      console.log("response", response.json());
      return response
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

//2.  create Student 
export function createStudent(payload) {
  fetch(`${api}/signup/std-teacher`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      userName: payload.userName,
      email: payload.email,
      password: payload.password,
      role: payload.role,
      firstName: payload.firstName,
      lastName: payload.lastName,
      gender: payload.gender,
      nationality: payload.nationality,
      major: payload.major

    })
  }).then((response) => {
    console.log("response", response.json());
    return response
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  });
}

//3.  create Course
export function createCourse(payload) {
  fetch(`${api}/courses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      courseName:payload.courseName,
      courseGrade:payload.courseGrade
    })
  }).then((response) => {
    console.log("response", response.json());
    return response
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  });
}

//4.  create Class
export function createClass(payload) {
  fetch(`${api}/classes`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      className:payload.className,
      courseId:payload.courseId,
      teacherId:payload.teacherId

    })
  }).then((response) => {
    console.log("response", response.json());
    return response
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  });
}

//==========================2.update data=================

//==========================3.get data====================

//==========================4.delete data=================