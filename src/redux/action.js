
import cookie from 'react-cookies';
const api = "https://student-portal-asac.herokuapp.com";

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
// export function createCourse(payload) {
//   fetch(`${api}/signup/??`, {
//     method: "POST", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${cookie.load("token")}`,
//     },
//     body: JSON.stringify({


//     })
//   }).then((response) => {
//     console.log("response", response.json());
//     return response
//   }).then((data) => {
//     console.log("Success:", data);

//   }).catch((error) => {
//     console.error("Error:", error);
//   });
// }

// //4.  create Class
// export function createClass(payload) {
//   fetch(`${api}/signup/??`, {
//     method: "POST", // or 'PUT'
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": `Bearer ${cookie.load("token")}`,
//     },
//     body: JSON.stringify({


//     })
//   }).then((response) => {
//     console.log("response", response.json());
//     return response
//   }).then((data) => {
//     console.log("Success:", data);

//   }).catch((error) => {
//     console.error("Error:", error);
//   });
// }

//==========================2.update data=================

//==========================3.get data====================

//==========================4.delete data=================