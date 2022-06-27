import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { api } from "../../../redux/type";
import axios from "axios";
// import "./content.css";
// import { contentContext } from "../../../context/content";
import { announcementContext } from "../../../context/announcement";
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


import DeleteIcon from "@mui/icons-material/Delete";
import AddAnnouncement from "./add-annaouncement";

const Announcement = (props) => {
  const params = useParams();
  cookie.save("classId", params.id);

  const announcementC = useContext(announcementContext);
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const getAnnouncements = () => {
    let contentData = axios
      .get(`${api}/announcement-for-class/${params.id}`, {
        headers: { Authorization: `Bearer ${cookie.load("token")}` },
      })
      .then((response) => {
        console.log("gettttttt", response.data);
        announcementC.setAnnouncements(response.data);
      });
  };
  useEffect(() => {
    // if (cookie.load('role') === 'teacher' || cookie.load('role') === 'student') {
        getAnnouncements();
    // }
  }, []);

//   const handelChange = (e) => {
//     e.preventDefault();
//     contentC.setNames({ ...contentC.names, [e.target.name]: e.target.value });
// };


  function ShowContent() {
    return (
      <>
        {announcementC.announcements ?

          announcementC.announcements.map((announcementClass, indx) => {
              return (
                <>
                  <div key={indx.toString()}>
                    <p> {announcementClass.announcementTitle}</p>
                    <p>{announcementClass.announcementBody}</p>
                    <p>{announcementClass.announcementLink}</p>
                    <When condition={cookie.load("role") === "teacher"}>
                      <DeleteIcon
                        sx={{ fontSize: 67 }}
                        onClick={() =>
                            announcementC.deleteAnnouncement(announcementClass.id, indx)
                        }
                      />
                    </When>

                    <br />
                    <When condition={cookie.load("role") === "teacher"}>
                      <Link to={`/updateAnnouncement/${announcementClass.id}`}> 
                   <Button color="warning" >
                          update Announcement
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
    <h1> annoucmentsssssss</h1>
      <When condition={cookie.load("role") === "teacher"}>
        <AddAnnouncement id={params.id} />
      </When>
      <ShowContent />
    </>
  );
};

export default Announcement;
