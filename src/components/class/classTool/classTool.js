// import { api } from "../../../redux/type";
// import axios from "axios";
import cookie from "react-cookies";
import { useContext, useEffect } from "react";
import { Modal, Button} from "react-bootstrap";
import { StateContext } from "../../../context/State";
import { When } from "react-if";
import JoinChat from "../../chat/joinChat";
import { zoomContext } from "../../../context/zoom";
import GroupsIcon from "@mui/icons-material/Groups";
const ClassTool = (props) => {
  const state = useContext(StateContext);
  const zoom = useContext(zoomContext);
  useEffect(() => {
    console.log("11111", zoom.meeting.Meeting);
    console.log(zoom.joinUrl);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zoom.meeting]);
  return (
    <div style={{ marginLeft: "30px" }}>
      <div
        className="classTool-desc"
        style={{ fontSize: "30px", marginBottom: "50px", textAlign: "center" }}
      >
        <GroupsIcon
          style={{
            display: "inline",
            marginBottom: "7px",
            fontSize: "50px",
            color: "#005240",
          }}
        />{" "}
        <h1 style={{ display: "inline", fontWeight: "300" }}>
          Communicate with your class and stay updated with everything using
          your classTools
        </h1>
      </div>

      <div
        className="tools-class-general"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <When condition={cookie.load("role") === "teacher"}>
          <div
            className="zoom-button-clss"
            style={{ width: "50%", height: "100vh", textAlign: "left" }}
          >
            <p style={{fontWeight: "700", lineHeight: "45px", color:"#005240", fontSize:"18px"}}>Generate a zoom meeting link for your class students to join</p>
            <Button
              style={{ fontSize: " 1.2rem", backgroundColor:"#005240", marginLeft:"200px", marginTop:"20px" }}
              onClick={() => {
                zoom.CreateMeeting();
                state.handleShow();
              }}
            >
              Generate!
            </Button>
          </div>
          <div
            class="vl"
            style={{ borderLeft: "6px solid #004140", height: "520px", boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.3)"  }}
          ></div>

          <Modal
            show={state.show}
            onHide={state.handleClose}
            class="modal-dialog modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Zoom Meeting Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {zoom.meeting.Meeting ? (
                <button
                  onClick={() => {
                    console.log("url", zoom.meeting.Meeting.join_url);
                  }}
                >
                  <a href={zoom.meeting.Meeting.start_url}>open zoom link</a>
                </button>
              ) : (
                <p>no Meetings Are allowed</p>
              )}
            </Modal.Body>
            <Modal.Footer>
              <Button color="danger" onClick={state.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </When>

        <When condition={cookie.load("role") === "student"}>
        <div
            className="zoom-button-clss"
            style={{ width: "50%", height: "100vh", textAlign: "left" }}
          >
            <p style={{fontWeight: "700", lineHeight: "45px", color:"#005240", fontSize:"18px"}}>Generate a zoom meeting link for your class students to join</p>
            <Button style={{ fontSize: " 1.2rem", backgroundColor:"#005240", marginLeft:"150px", marginTop:"20px" }} onClick={state.handleShow}>

            Show zoom Meetings!
            </Button>
          </div>
          <div
            class="vl"
            style={{ borderLeft: "6px solid #004140", height: "520px", boxShadow: "5px 5px 5px 0px rgba(0,0,0,0.3)"  }}
          ></div>
          <Modal
            show={state.show}
            onHide={state.handleClose}
            class="modal-dialog modal-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Zoom Meeting Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                // zoom.joinUrl ?
                //  meeting.Meeting.start_url:null
                <button
                  onClick={() => {
                    console.log(zoom.joinUrl);
                  }}
                >
                  <a href={zoom.joinUrl}>open zoom link</a>
                </button>
                // : <p>
                //     no Meetings Available
                // </p>
              }
            </Modal.Body>
            <Modal.Footer>
              <Button color="danger" onClick={state.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </When>
        
        <div style={{ width: "50%", height: "100vh" , marginRight:"200px"}}>
          {" "}
          <JoinChat id={props.id} />{" "}
        </div>
      </div>
    </div>
  );
};
export default ClassTool;
