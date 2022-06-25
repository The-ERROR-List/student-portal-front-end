import { When } from "react-if";
import Admin from "../admin/Admin";
import Student from "../student/Student";
import Teacher from "../teacher/Teacher";
import "./main.scss";
import cookie from "react-cookies";

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

function Main() {

  return (
    <div className="main">
  
          {users.map((user, i) => (
            <div key={i} className="main-content">
              <When condition={cookie.load("role") === user.check}>
                {user.renderComponent}
              </When>
            </div>
          ))}
    
    </div>
  );
}

export default Main;
