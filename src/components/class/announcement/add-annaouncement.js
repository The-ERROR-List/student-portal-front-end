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

export default function AddAnnouncement(props){
    console.log(props.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const announcementC = useContext(announcementContext)
console.log('hehehehe',announcementC)
    const getAnnouncements = () => {
    let announcementData = axios.get(`${api}/announcement-for-class/${props.id}`, {
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
  }, [])
    return(
        <>
        <h1 style={{marginTop:'300px'}}>{props.id}</h1>
                 <Button color="success" onClick={handleShow}>
                Add Announcement
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                class="modal-dialog modal-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Content form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form
                        onSubmit={(e) =>
                            announcementC.addContent(e,props.id)
                        }
                        style={{ width: "70%", margin: "auto" }}
                    >
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="announcementTitle">Announcement Title</Label>
                                    <Input
                                        className="input-class" id="announcementTitle" name="announcementTitle" placeholder="announcementTitle" value={announcementC.announcementTitle} onChange={(e) => announcementC.setannouncementTitle(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="announcementBody">Announcement Body</Label>
                                    <Input
                                        id="announcementBody" className="input-class" name="announcementBody" placeholder="announcementBody" value={announcementC.announcementBody} onChange={(e) => announcementC.setannouncementBody(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="announcementLink">Announcement Link</Label>
                                    <Input
                                        id="announcementLink" className="input-class" name="announcementLink" placeholder="announcementLink" value={announcementC.announcementLink} onChange={(e) => announcementC.setannouncementLink(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                {/* <FormGroup>
                                    <Label for="announcemrntCategory">Announcement Category</Label>
                                    <Input
                                        id="announcemrntCategory" className="input-class" name="announcemrntCategory" placeholder="announcemrntCategory" value={"announcement"} 
                                    />
                                </FormGroup> */}
                            </Col>
                        </Row>

                        <Button color="success"  type='submit' onClick={handleClose}>Add announcement</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

