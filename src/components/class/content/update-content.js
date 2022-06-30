import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Button, FormGroup } from "react-bootstrap";
import { contentContext } from "../../../context/content";
import {
  Form,
  Row,
  Col,
  Label,
  Input,

} from "reactstrap";
import { useNavigate } from "react-router-dom";



export default function UpdateContents(props) {
  const params = useParams()
  const contentC = useContext(contentContext)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const redirect = () => {
    navigate(`content-class/${params.id}`)
    console.log(111)
  }

  return (
    <>

      <Form onSubmit={() => contentC.updateContent(params.id)} style={{ width: "70%", margin: "auto" }}>
        <Row>
          <Col md={12}>
            <FormGroup>
              <Label for="contentTitle">content Title</Label>
              <Input

                id="contentTitle"
                name="contentTitle"
                placeholder="content Title..."
                type="text"
                onChange={(e) => {
                  contentC.setContentTitle(e.target.value)
                }}

              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="contentBody">content body</Label>
          <textarea
            rows="4" cols="50"
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
        <Button color="success" type='submit' onClick={redirect}>
          update Content
        </Button>
      </Form>
    </>
  )
}
