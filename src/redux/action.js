
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
      courseName: payload.courseName,
      courseGrade: payload.courseGrade,
      courseImg: payload.courseImg,
      courseDescription:payload.courseDescription
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
      className: payload.className,
      courseName: payload.courseName,
      userName: payload.userName,
      classTime: payload.classTime,
      classImage: payload.classImage,
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
//====================================
export function addCourse2Teacher(payload) {
  fetch(`${api}/add-course-toTeacher`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      userName: payload.userName,//teacher
      courseName: payload.courseName,
      courseDescription: ''
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

//=========add students in class================

export function addStudentToClass(payload) {
  fetch(`${api}/add-students-toClass`, {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      className: payload.className,
      userName: payload.userName,
      studentGrade: 0
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



//==========================2.update Teacher data=================


export function updateTeacherDB( payloadUpdate, payloadId) {
  fetch(`${api}/teacher/${payloadId}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      userName: payloadUpdate.userName,
      email: payloadUpdate.email,
      password: payloadUpdate.password,
      role: payloadUpdate.role,
      firstName: payloadUpdate.firstName,
      lastName: payloadUpdate.lastName,
      gender: payloadUpdate.gender,
      nationality: payloadUpdate.nationality,
      department: payloadUpdate.department
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



//==========================3.update Student data=================

export function updateStudentDB( payloadUpdate) {
  fetch(`${api}/student/${payloadUpdate.id}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      userName: payloadUpdate.userName,
      email: payloadUpdate.email,
      password: payloadUpdate.password,
      role: payloadUpdate.role,
      firstName: payloadUpdate.firstName,
      lastName: payloadUpdate.lastName,
      gender: payloadUpdate.gender,
      nationality: payloadUpdate.nationality,
      major: payloadUpdate.major
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

//==========================4.update Course data=================

export function updateCourseDB( payloadUpdate) {
  fetch(`${api}/course/${payloadUpdate.id}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      courseName: payloadUpdate.courseName,
      courseGrade: payloadUpdate.courseGrade
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

//==========================5.update Class data=================

export function updateClass (payloadUpdate) {
  fetch(`${api}/class/${payloadUpdate.id}`, {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    },
    body: JSON.stringify({
      className: payloadUpdate.className,
      courseName: payloadUpdate.courseName,
      userName: payloadUpdate.userName,
      classTime: payloadUpdate.classTime,
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
















//==========================3.get data====================

//==========================4.delete data=================

//1.delete Teacher by id

export function deleteTeacherById(deleteTeacher) {
  fetch(`${api}/teacher/${deleteTeacher}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    }
  }).then((result) => {
    console.log("result", result.json());
    return result
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  });
}

//2. delete student by id

export function deleteStudentById(deleteStudent) {
  fetch(`${api}/student/${deleteStudent}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    }
  }).then((result) => {
    console.log("result", result.json());
    return result
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  });
}

//3.deleteCourseById
export function deleteCourseById(payloadDelete) {
  fetch(`${api}/courses/${payloadDelete}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    }
  }).then((result) => {
    console.log("result", result.json());
    return result
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  });
}

//4.deleteClassesById

export function deleteClassesById(deleteClasses) {
  fetch(`${api}/classes/${deleteClasses}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${cookie.load("token")}`,
    }
  }).then((result) => {
    console.log("result", result.json());
    return result
  }).then((data) => {
    console.log("Success:", data);

  }).catch((error) => {
    console.error("Error:", error);
  })
}