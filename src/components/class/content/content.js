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
import {
  Form,
  Row,
  Col,
  Label,
  Input,

} from "reactstrap";


// import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddContents from "./addContent";

const Content = (props) => {
  const params = useParams();
  cookie.save("classId", params.id);

  const contentC = useContext(contentContext);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

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
    // if (cookie.load('role') === 'teacher' || cookie.load('role') === 'student') {
    getContents();
    // }
  }, []);

//   const handelChange = (e) => {
//     e.preventDefault();
//     contentC.setNames({ ...contentC.names, [e.target.name]: e.target.value });
// };


  function ShowContent() {
    return (
      <>
        {contentC.content ?

           contentC.content.map((classContent, indx) => {
              return (
                <>
                  <div key={indx.toString()}>
                    <p> {classContent.contentTitle}</p>
                    <p>{classContent.contentBody}</p>
                    <p>{classContent.contentLink}</p>
                    <p>{classContent.contentCategory}</p>
                    <When condition={cookie.load("role") === "teacher"}>
                      <DeleteIcon
                        sx={{ fontSize: 67 }}
                        onClick={() =>
                          contentC.deleteContent(classContent.id, indx)
                        }
                      />
                    </When>

                    <br />
                    <When condition={cookie.load("role") === "teacher"}>
                      <Link to={`/updateContent/${classContent.id}`}> 
                   <Button color="warning" >
                          update content
                          </Button>
                      {/* <EditIcon
                        sx={{ fontSize: 67 }}
                        onClick={() => {
                          contentC.idUpdateContent(classContent.id);
                         handleShow();
                        }}
                      /> */}
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
        <AddContents id={params.id} />
      </When>
      <ShowContent />
    </>
  );
};

export default Content;
