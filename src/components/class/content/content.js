import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { api } from "../../../redux/type";
import axios from "axios";
import "./content.css";
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
import { getContentId } from '../../../redux/type';
import { classContentId } from "../../../redux/content";

const Content = (props) => {
  const params = useParams();
  const contentDataById = useSelector(state => state.contentId.contentById)

  const dispatch = useDispatch()
  cookie.save("classId", params.id);
  const contentC = useContext(contentContext);
  const [shown, setShown] = useState(false)

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


  //   const handelChange = (e) => {
  //     e.preventDefault();
  //     contentC.setNames({ ...contentC.names, [e.target.name]: e.target.value });
  // };

  function getID(id) {
    console.log({ id });
    dispatch(classContentId(id));
    setShown(true)

  }





  function ShowContent() {
    return (
      <>
        {contentC.content
          ? contentC.content.map((classContent, indx) => {
            return (
              <>
                <div
                  style={{ display: "flex" }}
                  className="content-side"
                  key={indx.toString()}
                >
                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    className="nav_title"
                  >
                    <nav>

                      <span>Title</span>
                      <Button onClick={()=>getID(classContent.id)}> {classContent.contentTitle} </Button>
                    </nav>
                  </div>

                  <div
                    style={{ display: "flex", flexDirection: "column" }}
                    className="content-body"
                  >
                    <div className="operations">
                      <When condition={cookie.load("role") === "teacher"}>
                        <DeleteIcon
                          sx={{ fontSize: 67 }}
                          onClick={() =>
                            contentC.deleteContent(classContent.id, indx)
                          }
                        />
                      </When>



                      {shown &&contentDataById?
                        <>
                          <h1> {contentDataById.contentTitle}</h1>
                          <hr />
                          <p>{contentDataById.contentBody}</p>
                          <hr />
                          <p> {contentDataById.contentLink}</p>
                          <p>{contentDataById.contentCategory}</p>
                        </>
                          :null
                      }



                    </div>



                  </div>

                  <br />
                  <When condition={cookie.load("role") === "teacher"}>
                    <Link to={`/updateContent/${classContent.id}`}>
                      <EditIcon sx={{ fontSize: 67 }} />
                    </Link>
                  </When>
                </div>
              </>
            );
          })
          : null}
      </>
    );
  }

  return (
    <>
      <When condition={cookie.load("role") === "teacher"}>
        <AddContents id={params.id}  />
      </When>
      <ShowContent />
    </>
  );
};

export default Content;
