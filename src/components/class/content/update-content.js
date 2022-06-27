import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Modal, Button, FormGroup } from "react-bootstrap";
import { contentContext } from "../../../context/content";
import {
  Form,
  Row,
  Col,
  Label,
  Input,

} from "reactstrap";

export default function UpdateContents(props) {
  const params = useParams()
  const contentC = useContext(contentContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
     
          <Form  onSubmit={() => contentC.updateContent(params.id)} style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="contentTitle">content Title</Label>
                  <Input

                    id="contentTitle"
                    name="contentTitle"
                    placeholder="content Title..."
                    type="text"
                    // value={contentC.content.contentTitle}
                    onChange={(e) => {
                      contentC.setContentTitle(e.target.value)
                    }}

                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="contentBody">content body</Label>
              <Input
                id="contentBody"
                name="contentBody"
                placeholder="content Body..."
                type="contentBody"
                onChange={(e) => {
                  contentC.setContentBody(e.target.value)
                }} />
              <Label for="contentLink">content Link</Label>
              <Input
                id="contentLink"
                name="contentLink"
                placeholder="content Link..."
                type="contentLink"
                onChange={(e) => {
                  contentC.setContentLink(e.target.value)
                }}
              />

            </FormGroup>
            <Button color="success"  type='submit' >
              update Content
            </Button>
          </Form>
        {/* </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

    </>
  )
}
