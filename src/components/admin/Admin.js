import React, { useContext } from "react";
import Teacher from "./teacher/teacher";
import Student from "./student/student";
import Course from "./course/course";
import Class from "./class/class";
import DashboardAdmin from "./dashBAdmin/dashAdmin";
import { When } from "react-if";
import { StateContext } from "../../context/State";

const components = [
  {
    renderComponent: <Teacher />,
    check:"Teacher Side"
  },
  {
    renderComponent: <Student />,
    check:"Student Side"
  },
  {
    renderComponent: <Course />,
    check: "Course Side"
  },
  {
    renderComponent: <Class />,
    check:"Class Side"
  },
];
export default function Admin() {
  const state = useContext(StateContext);
  return (
    <div>
      <div >
        <DashboardAdmin />
      </div>
      <div style={{marginTop:"15px"}}>
      {components.map((component)=>(
      <When condition={state.selectComponent === component.check}>
        {component.renderComponent}
      </When>
      ))}
      </div>
    </div>
  );
}
