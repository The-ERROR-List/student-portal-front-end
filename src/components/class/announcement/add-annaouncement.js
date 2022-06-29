import {
    Form,
    Row,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
} from "reactstrap";
import { Modal } from "react-bootstrap";
import { announcementContext } from "../../../context/announcement";

import { api } from '../../../redux/type'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ReactTooltip from "react-tooltip";

export default function AddAnnouncement(props) {
    console.log(props.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const announcementC = useContext(announcementContext)
    console.log('hehehehe', announcementC)
    const getAnnouncements = () => {
        axios.get(`${api}/announcement-for-class/${props.id}`, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then((response) => {
            console.log('gettttttt', response.data)
            announcementC.setAnnouncements(response.data)
        })
    }

    useEffect(() => {
        // if (cookie.load('role') === 'teacher' || cookie.load('role') === 'student') {
        getAnnouncements()

        // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
        <div style={{display:"flex",}}>
            <h1
            style={{
              fontSize: "35px",
              borderLeft: "2px solid black",
              marginLeft: "5px",
              paddingLeft: "5px",
            }}
          >
            Announcements
          </h1>
            <AddCircleOutlineIcon style={{marginLeft:"20px",marginTop:"18px"}} color="success" data-tip=" Add Announcement" onClick={handleShow}>
            </AddCircleOutlineIcon>

            <ReactTooltip />
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                class="modal-dialog modal-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Announcement form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(e) =>
                            announcementC.addAnnouncement(e, props.id)
                        }
                        style={{ width: "70%", margin: "auto" }}
                    >
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        className="input-class" id="announcementTitle" name="announcementTitle" placeholder="Title" value={announcementC.announcementTitle} onChange={(e) => announcementC.setannouncementTitle(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <textarea
                                    rows="4" cols="50"
                                        id="announcementBody" className="input-class" name="announcementBody" placeholder="announcementBody" value={announcementC.announcementBody} onChange={(e) => announcementC.setannouncementBody(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Input
                                        id="announcementLink" className="input-class" name="Link" placeholder="announcementLink" value={announcementC.announcementLink} onChange={(e) => announcementC.setannouncementLink(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button color="success" type='submit' onClick={handleClose}>Add announcement</Button>
                    </Form>
                </Modal.Body>
            </Modal>

        </>
    )
}

