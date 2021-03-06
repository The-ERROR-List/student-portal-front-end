/* eslint-disable jsx-a11y/anchor-is-valid */
import DeleteIcon from "@mui/icons-material/Delete";
import { announcementContext } from "../../../context/announcement";
import { useContext } from "react";
import cookie from "react-cookies";
import { When } from "react-if";
import './annaouncement-card.scss'



export default function AnnouCard(props) {
    const announcementC = useContext(announcementContext);

    return (
        <div>
            <div style={{ padding: ' 2.5rem 1.5rem' }}>
                <section class="page-contain-announcement">
                    <a  style={{textDecoration: "none", color: "inherit"}} href="#" class="data-card-announcement">
                        <div id="corseName" style={{display:"flex"}}>
                        <hr/>
                            <i class="fa fa-bullhorn fa-1x" aria-hidden="true" ></i>

                            <h3 style={{marginLeft:"9px"}} >{props.announcementClass.announcementTitle}</h3>
                        </div>
                        <span class="link-text-announcement">
                            <h3 style={{fontSize:"35px"}}>{props.announcementClass.announcementBody}</h3>
                            
                            <h3>{props.announcementClass.announcementLink}</h3>

                        </span>
                        <div class="edit-delete-announcement">
                            <When condition={cookie.load("role") === "teacher"}>
                                <DeleteIcon
                                    id="deletebuttom"
                                    sx={{ fontSize: 67 }}
                                    onClick={() =>
                                        announcementC.deleteAnnouncement(props.announcementClass.id, props.indx)
                                    }
                                />
                            </When>

                        </div>
                    </a>
                </section>
            </div>
        </div>
    )
}