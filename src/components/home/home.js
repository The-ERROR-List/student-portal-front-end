import Header from "../header/header";
import { AuthContext } from "../../context/Auth";
import { When } from "react-if";
import { useContext, useEffect } from "react";

import Main from "../main/main";
// import "./main.scss";
import { Routes, Route } from "react-router-dom";
import Class from "../class/class";

function Home() {
    const auth = useContext(AuthContext);
  
    return (
      <div className="main">
    
  
          <When condition={auth.isLoggedIn}>
            <Header />
            <Routes>
            <Route path="/" element = {<Main/>}/>
            <Route path="/course/:id" element={<Class />} />

            </Routes>
          </When>
      
      </div>
    );
  }
  
  export default Home;
  