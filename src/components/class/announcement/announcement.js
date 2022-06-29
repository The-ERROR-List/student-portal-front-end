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
import AnnouCard from './annaouncement-card'
import './Announcement.scss'


import DeleteIcon from "@mui/icons-material/Delete";
import AddAnnouncement from "./add-annaouncement";
import UpdateAnnouncement from './updateAnnao';

const Announcement = (props) => {
  const params = useParams();
  cookie.save("classId", params.id);

  const announcementC = useContext(announcementContext);
  const getAnnouncements = () => {
    let contentData = axios.get(`${api}/announcement-for-class/${params.id}`, {
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




  function ShowContent() {
    return (

      <div >
        {announcementC.announcements ?

          announcementC.announcements.map((announcementClass, indx) => {
            return (
              <>
                <AnnouCard announcementClass={announcementClass} indx={indx} />
                <br />
                {/* <When condition={cookie.load("role") === "teacher"}>
                    <Link to={`updateAnnouncement/${announcementClass.id}`}>
                      <Button  color="warning" >
                        update Announcement
                      </Button>
                      <EditIcon
                        sx={{ fontSize: 67 }}
                        onClick={() => {
                          contentC.idUpdateContent(classContent.id);
                        handleShow();
                        }}
                      /> 
                    </Link>
                  </When> */}
              </>
            );
          })
          : null}
      </div>
    );
  }

  return (
    <>
      <div className="Announcement">
        <div className="Announcement-header">
          <When condition={cookie.load("role") === "teacher"}>
            <AddAnnouncement id={params.id} />
            {/* <UpdateAnnouncement /> */}
          </When>
        </div>
        <div className="show-content">
          <ShowContent />
        </div>
      </div>
    </>
  );
};

export default Announcement;
