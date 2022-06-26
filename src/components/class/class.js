import ClassList from './classList/classList'
import ClassTool from "./classTool/classTool";
import Content from './content/content';
import './class.scss'
import { useParams } from "react-router-dom";
import { When } from 'react-if';
import cookie from 'react-cookies';
import { Routes, Route,Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
const Class = () => {
  const params = useParams();
  // let { path, url } = matchPath();
  console.log('params', params.id)
  return (
    <div id="classcomp">
      {/* <When condition={cookie.load('role')==="teacher"}> */}
      {/* <ClassTool /> */}

      {/* </When> */}
      {/* <ClassList id={params.id} /> */}
      {/* <When condition={cookie.load('role')==='teacher'}> */}
      {/* <Content id={params.id} /> */}
      {/* </When> */}

      <Link to={`content-class/${params.id}`}>
        go to content
      </Link>
      <Outlet />
      <Routes>
        <Route path="content-class/:id" element={<Content/>}/>
      </Routes>


    </div>

  );
};
export default Class;
