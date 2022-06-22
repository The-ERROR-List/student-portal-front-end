// import ClassList  from './classList/classList'
import ClassTool from "./classTool/classTool";
import axios from 'axios';
import cookie from 'react-cookies';
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const Class = () => {
let params = useParams()
  const fetchItems = async () => {

    const response = await axios.get(
      `http://localhost:3000/get-all-classes-for-course-for-teacher/${params.id}/${cookie.load("id")}`,
      { headers: { Authorization: `Bearer ${cookie.load("token")}` },}
    );
    console.log(response.data)
  };

  useEffect(()=> {
    fetchItems()
    console.log(params);
  }, [])


  return (
    <div>
      {/* <ClassList/> */}
      <ClassTool />
    </div>
  );
};
export default Class;
