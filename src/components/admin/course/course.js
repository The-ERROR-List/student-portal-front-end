import { Alert, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCourseAction } from "../../../redux/course";
import AddTeacherToCourse from "./addTeacher";
import CourseCard from "./course-teacher";
import AddCourse from "./addCourse";
import "./course.scss";

export default function Course() {
  const courses = useSelector((state) => state.course.infoCourse);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getCourseAction());
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="admin-coures">
      <Alert
        style={{
          fontSize: "30px",
          marginTop: "20px",
          marginRight: "60px",
          marginLeft: "55px",
        }}
      >
        <div style={{ display: "flex" }}>
          <Breadcrumb listTag="div">
            <BreadcrumbItem href="/" tag="a">
              Dashboard/
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb listTag="div">
            <BreadcrumbItem href="/admin-course" tag="a">
              Course
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </Alert>
      <div className="course-cards">
        <AddCourse />
        <AddTeacherToCourse/>
        {courses.map((course, i) => {
          return <CourseCard key={i} course={course} />;
        })}
      </div>
    </div>
  );
}
