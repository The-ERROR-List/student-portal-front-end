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
import { contentContext } from "../../../context/content"
import { api } from '../../../redux/type'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";

export default function AddContents(props) {
    console.log(props.id);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contentC = useContext(contentContext)


    const getContents = () => {
        let contentData = axios.get(`${api}/content-for-class/${props.id}`, {
            headers: { Authorization: `Bearer ${cookie.load("token")}` },
        }).then((response) => {
            console.log('gettttttt', response.data)
            contentC.setContent(response.data)
        })
    }


    useEffect(() => {
        const interval = setInterval(() => {
            getContents()
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Button color="success" onClick={handleShow}>
                Add Content
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
                        onSubmit={(e) => {
                            contentC.addContent(e, props.id)
                            contentC.setShowContentBody(false)
                        }

                        }
                        style={{ width: "70%", margin: "auto" }}
                    >
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="contentTitle">content Title</Label>
                                    <Input
                                        className="input-class" id="contentTitle" name="contentTitle" placeholder="contentTitle" value={contentC.contentTitle} onChange={(e) => contentC.setContentTitle(e.target.value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="contentBody">content Body</Label>
                                    <Input
                                        id="contentBody" className="input-class" name="contentBody" placeholder="contentBody" value={contentC.contentBody} onChange={(e) => contentC.setContentBody(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="contentLink">content Link</Label>
                                    <Input
                                        id="contentLink" className="input-class" name="contentLink" placeholder="contentLink" value={contentC.contentLink} onChange={(e) => contentC.setContentLink(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <Button color="success" type='submit' onClick={handleClose}>Add content</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}