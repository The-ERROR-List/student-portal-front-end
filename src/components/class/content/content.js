import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { api } from "../../../redux/type";
import axios from "axios";
import { contentContext } from "../../../context/content";
import { When } from "react-if";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Modal, Button, FormGroup } from "react-bootstrap";
import { Form, Row, Col, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddContents from "./addContent";
import { getContentId } from "../../../redux/type";
import { classContentId } from "../../../redux/content";
import "./content.css";

const Content = (props) => {
  const params = useParams();
  const contentDataById = useSelector((state) => state.contentId.contentById);

  const dispatch = useDispatch();
  cookie.save("classId", params.id);
  const contentC = useContext(contentContext);
  // const [shown, setShown] = useState(false)

  const getContents = () => {
    let contentData = axios
      .get(`${api}/content-for-class/${params.id}`, {
        headers: { Authorization: `Bearer ${cookie.load("token")}` },
      })
      .then((response) => {
        console.log("gettttttt", response.data);
        contentC.setContent(response.data);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getContents();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function getID(id) {
    console.log({ id });
    dispatch(classContentId(id));
    contentC.setShowContentBody(true);
  }

  function ShowContent() {
    return (
      <div id="allContent" >
        <div id='nav-title' >
          <div
          id="title_side_content"
          >
            <h1 id="title-name">
              {/* <i class="fa fa-book"></i> */}
            Content 
            </h1>
            {contentC.content
              ? contentC.content.map((classContent, indx) => {
                  return (
                    <>
                      <hr />
                      <div
                      id="cell_content"
                        key={indx.toString()}
                      >
                        <div
                        id='title-side'
                        onClick={() => getID(classContent.id)}

                          className="nav_title"
                        >
                          <nav>
                            <i  class="fa fa-book" >
                              {" "}
                              {classContent.contentTitle}{" "}
                            </i>
                          </nav>
                        </div>
                        <div
                        id="operations"
                       
                    
                        >
                          <When condition={cookie.load("role") === "teacher"}>
                            <DeleteIcon
                              sx={{ fontSize: 40 }}
                              style={{  cursor:"pointer" }}
                              onClick={() =>
                                contentC.deleteContent(classContent.id, indx)
                              }
                            />
                          </When>

                          <When condition={cookie.load("role") === "teacher"}>
                            <Link to={`/updateContent/${classContent.id}`}>
                              <EditIcon sx={{ fontSize: 40 }} style={{  cursor:"pointer" }}/>
                            </Link>
                          </When>
                        </div>
                      </div>
                    </>
                  );
                })
              : null}
          </div>
        </div>
        <div id='bodyContent'>
          {contentC.showContentBody && contentDataById ? (
            <>
              <h1> {contentDataById.contentTitle}</h1>
              <hr />
              <p>{contentDataById.contentBody}</p>
              <hr />
              <p> {contentDataById.contentLink}</p>
              <p>{contentDataById.contentCategory}</p>
            </>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <>
      <When condition={cookie.load("role") === "teacher"}>
        <AddContents id={params.id} />
      </When>
      <ShowContent />
    </>
  );
};

export default Content;
