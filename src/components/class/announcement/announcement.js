import { useContext, useEffect } from "react";
import cookie from "react-cookies";
import { api } from "../../../redux/type";
import axios from "axios";
// import "./content.css";
// import { contentContext } from "../../../context/content";
import { announcementContext } from "../../../context/announcement";
import { When } from "react-if";
import { useParams } from "react-router-dom";
import AnnouCard from './annaouncement-card'
import './Announcement.scss'
import AddAnnouncement from "./add-annaouncement";
// import UpdateAnnouncement from './updateAnnao';

const Announcement = (props) => {
  const params = useParams();
  cookie.save("classId", params.id);

  const announcementC = useContext(announcementContext);
  const getAnnouncements = () => {
    axios.get(`${api}/announcement-for-class/${params.id}`, {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
