import axios from "axios";
// const api = "https://student-portal-asac.herokuapp.com/signup/std-teacher";

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


    // fetch("https://student-portal-asac.herokuapp.com/signup/std-teacher", {
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