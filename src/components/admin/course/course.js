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
    <>
    <div className="admin-coures">
 
  <Alert variant="success" style={{
        fontSize: "30px",
       color: "#005240",
       backgroundColor: "#005240",
       borderColor: "#005240"
      }} >
         <Alert.Heading style={{
        
       color: "white",
      
      }}>
           Teacher Dashboard
           <AddCourse />
           <AddTeacherToCourse/>


         </Alert.Heading>
    

      </Alert>
      </div>
      <div className="course-cards">
        {courses.map((course, i) => {
          return <CourseCard key={i} course={course} />;
        })}
      </div>
    </>
  );
}


