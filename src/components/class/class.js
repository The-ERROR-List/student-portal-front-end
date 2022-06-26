import ClassList from './classList/classList'
import ClassTool from "./classTool/classTool";
import Content from './content/content';
import Announcement from './announcement/announcement';
import './class.scss'
import { useParams } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import Nav from './navBar/nav'
const Class = () => {
  const params = useParams();
  console.log('params', params)
  return (
    <div className="classcomp">
      <div className="header">
        <Link to={`*`}><h1 id='classname' >ClassName</h1></Link>
      </div>
      <div className="navs">
        <Nav id={params.id} />
      </div>
      <Outlet />
      <div className="class-render" style={{ margin: "70px 0 0 0" }}>
        <Routes>
          <Route path='*' element={<Announcement id={params.id}/>}/>
          <Route path="content-class/:id" element={<Content />} />
          <Route path="classList/:id" element={<ClassList />} />
          <Route path="ClassTool/:id" element={<ClassTool />} />
        </Routes>
      </div>
    </div>
  );
};
export default Class;
