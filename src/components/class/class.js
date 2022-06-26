import ClassList from './classList/classList'
import ClassTool from "./classTool/classTool";
import Content from './content/content';
import './class.scss'
import { useParams } from "react-router-dom";
import { When } from 'react-if';
import cookie from 'react-cookies';
import { Routes, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
const Class = () => {
  const params = useParams();
  console.log('params', params.id)
  return (
    <div id="classcomp">
      {/* <When condition={cookie.load('role')==="teacher"}> */}
      <ClassTool />

      {/* </When> */}
      <ClassList id={params.id} />
      {/* <When condition={cookie.load('role')==='teacher'}> */}
      {/* <Content id={params.id} /> */}
      {/* </When> */}

      <Link to={`/content-class/${params.id}`}>
        go to content
      </Link>


    </div>

  );
};
export default Class;
