// import axios from "axios";
// // const api = "https://student-portal-asac.herokuapp.com/signup/std-teacher";
import cookie from 'react-cookies';
// export function createTeacher(payload){
//   return  (axios.post('https://student-portal-asac.herokuapp.com/signup/std-teacher', {
//                 userName: payload.userName,
//                 email: payload.email,
//                 password: payload.password,
//                 role: payload.role,
//                 firstName: payload.firstName,
//                 lastName: payload.lastName,
//                 gender: payload.gender,
//                 nationality: payload.nationality,
//                 department: payload.department
//             }).then( res => {
//                 console.log(res)
//             }))
// }
export function createTeacher(payload){
fetch("https://student-portal-asac.herokuapp.com/signup/std-teacher", {
      method: "POST", // or 'PUT'
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
        console.log("response",response.json());
       return response
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    }


    // export function updateTeacher(payload){
    //     fetch("https://student-portal-asac.herokuapp.com/signup/std-teacher", {
    //           method: "PUT",
    //           headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": `Bearer ${cookie.load("token")}`,
        
    //           },
    //           body: JSON.stringify({
    //             userName: payload.userName,
    //                     email: payload.email,
    //                     password: payload.password,
    //                     role: payload.role,
    //                     firstName: payload.firstName,
    //                     lastName: payload.lastName,
    //                     gender: payload.gender,
    //                     nationality: payload.nationality,
    //                     department: payload.department
    //           })
    //         })
    //           .then((response) => {
    //             console.log("response",response.json());
    //            return response
    //           })
    //           .then((data) => {
    //             console.log("Success:", data);
    //           })
    //           .catch((error) => {
    //             console.error("Error:", error);
    //           });
    //         }
//===============================admin =======================================
    // axios("https://student-portal-asac.herokuapp.com/signup/std-teacher", {
    //   method: "POST", // or 'PUT'
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify( {userName: infoTeacher.userName,
    //     email: infoTeacher.email,
    //     password: infoTeacher.password,
    //     role: infoTeacher.role,
    //     firstName: infoTeacher.firstName,
    //     lastName: infoTeacher.lastName,
    //     gender: infoTeacher.gender,
    //     nationality: infoTeacher.nationality,
    //     department: infoTeacher.department }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });