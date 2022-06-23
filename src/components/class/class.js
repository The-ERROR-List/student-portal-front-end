// import ClassList  from './classList/classList'
import ClassTool from "./classTool/classTool";
import './class.scss'
import TeacherClasses from '../teacher/teacher-classes/teacher-classes'

const Class = () => {
  return (
    <div id="classcomp">
      <TeacherClasses/>
      <ClassTool />
    </div>
  );
};
export default Class;
