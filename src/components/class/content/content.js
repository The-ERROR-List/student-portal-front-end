import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { api } from "../../../redux/type";
import axios from "axios";
import { contentContext } from "../../../context/content";
import { When } from "react-if";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Modal, Button, FormGroup, Card, ListGroup } from "react-bootstrap";
import { Form, Row, Col, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddContents from "./addContent";
import { getContentId } from "../../../redux/type";
import "./styleCont.scss";
import { classContentId } from "../../../redux/content";
import Alert from 'react-bootstrap/Alert'
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  function getID(id) {
    console.log({ id });
    dispatch(classContentId(id));
    contentC.setShowContentBody(true);
  }

  function ShowContent() {
    return (
      <div className="content-div">


  {[
    'dark',
  ].map((variant) => (
    <Alert key={variant} variant={variant}>
        <div className="card_div_scroll">
          {contentC.content
            ? contentC.content.map((classContent, indx) => {
                return (
                  <>
                    <div className="content-side" key={indx.toString()}>
                      <div
                        onClick={() => getID(classContent.id)}
                        style={{ overflow: "auto", flexDirection: "" }}
                        className="nav_title"
                      >
                        <Card className="card_content_title" >
                          <ListGroup variant="flush">
                            <ListGroup.Item>
                              <div className="card-content-inside" >
                                <div className="title_card" style={{fontSize:"25px"}}>
                                  {classContent.contentTitle}
                                </div>
                                <div
                                  style={{ display: "flex" }}
                                  className="content-body"
                                >
                                  <When
                                    condition={
                                      cookie.load("role") === "teacher"
                                    }
                                  >
                                    <DeleteIcon
                                      sx={{ fontSize: 40 }}
                                      style={{ cursor: "pointer" }}
                                      onClick={() =>
                                        contentC.deleteContent(
                                          classContent.id,
                                          indx
                                        )
                                      }
                                    />
                                  </When>

                                  <When
                                    condition={
                                      cookie.load("role") === "teacher"
                                    }
                                  >
                                    <Link
                                      to={`updateContent/${classContent.id}`}
                                    >
                                      <EditIcon
                                        sx={{ fontSize: 40 }}
                                        style={{ cursor: "pointer" }}
                                      />
                                    </Link>
                                  </When>
                                </div>
                              </div>
                            </ListGroup.Item>
                          </ListGroup>
                        </Card>
                      </div>
                    </div>
                  </>
                );
              })
            : null}
        </div>

        </Alert>
  ))}

        <Card className="body_content">
          <dev className="inside_body_content">
            {contentC.showContentBody && contentDataById ? (
              <>
                <h1 className="title_body"> {contentDataById.contentTitle}</h1>
                <hr />
                <p style={{forntSize:"30px"}} className="lorem">{contentDataById.contentBody}</p>

                <a className="link_content"> {contentDataById.contentLink}</a>
              </>
            ) : null}
          </dev>
        </Card>
      </div>
    );
  }

  return (
    <>
      <When condition={cookie.load("role") === "teacher"}>
        <div style={{ display: "flex", marginBottom: "15px" }}>
          <h1
            style={{
              fontSize: "35px",
              borderLeft: "2px solid black",
              marginLeft: "5px",
              paddingLeft: "5px",
            }}
          >
            Content
          </h1>
          <AddContents id={params.id} />
        </div>
      </When>
      <ShowContent />
    </>
  );
};

export default Content;
