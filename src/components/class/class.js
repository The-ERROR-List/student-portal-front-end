import ClassList  from './classList/classList'
import ClassTool from "./classTool/classTool";
import './class.scss'
import { useParams } from "react-router-dom";
import {When} from 'react-if';
import cookie from 'react-cookies';
const Class = () => {
  const params = useParams();
  return (
    <div id="classcomp">
      <When condition={cookie.load('role')==="teacher"}>
      <ClassTool />

      </When>
      <ClassList id={params.id} />
    </div>
  );
};
export default Class;
