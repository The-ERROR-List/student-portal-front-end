
import { Button, FormGroup } from "react-bootstrap";
import {
    Form,
    Row,
    Col,
    Label,
    Input,

} from "reactstrap";
import { useContext } from "react";
import { announcementContext } from "../../../context/announcement";
import { useParams } from "react-router-dom";

export default function UpdateAnnouncement(props) {

    const params = useParams();
    const announcementC = useContext(announcementContext);
   
    return (
        <>

            <Form
                onSubmit={(e) =>
                    announcementC.updateAnnouncement(e, params.id)
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

                <Button color="warning" type='submit'>update announcement</Button>
            </Form>
        </>
    )
}
