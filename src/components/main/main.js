import Header from "../header/header";
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useContext, useEffect } from "react";
import Admin from "../admin/Admin";
import Student from "../student/Student";
import Teacher from "../teacher/Teacher";
import "./main.scss";
import cookie from "react-cookies";
import { Routes, Route } from "react-router-dom";
import Class from "../class/class";

const users = [
  {
    id: 1,
    renderComponent: <Admin />,
    check: "admin",
  },
  {
    id: 2,
    renderComponent: <Student />,
    check: "student",
  },
  {
    id: 3,
    renderComponent: <Teacher />,
    check: "teacher",
  },
];

//Solve this problem when refresh !!
function Main() {
  const auth = useContext(AuthContext);

  return (
    <div className="main">
  

        <When condition={auth.isLoggedIn}>
          <Header />
          {users.map((user, i) => (
            <div key={i} className="main-content">
              <When condition={cookie.load("role") === user.check}>
                {user.renderComponent}
                <Routes>
                <Route path="/course/:id" element={<Class />} />
                </Routes>
              </When>
             
            </div>
          ))}
        </When>
    
    </div>
  );
}

export default Main;
