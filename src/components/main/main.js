import Header from "../header/header";
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useContext } from "react";
import Admin from "../admin/Admin";
import Student from "../student/Student";
import Teacher from "../teacher/Teacher";
import "./main.scss";
const users = [
  {
    id:1,
    renderComponent: <Admin />,
    check: "admin",
  },
  {
    id:2,
    renderComponent: <Student />,
    check: "student",
  },
  {
    id:3,
    renderComponent: <Teacher />,
    check: "teacher",
  },
];
function Main() {
  const auth = useContext(AuthContext);

  return (
    <div className="main">
      <When condition={auth.isLoggedIn}>
        <Header />
        {users.map((user,i) => (
          <div key={i} className="main-content">
            <When condition={auth.user.role === user.check}>
              {user.renderComponent}
            </When>
          </div>
        ))}
      </When>
    </div>
  );
}

export default Main;
