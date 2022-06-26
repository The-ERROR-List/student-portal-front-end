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
  // const [show, setShow] = useState(false)

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);


  return (
    <>
      <Modal
        show={contentC.show}
        // onHide={handleClose}
        class="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Content Model</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ width: "70%", margin: "auto" }}>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="contentTitle">content Title</Label>
                  <Input

                    id="contentTitle"
                    name="contentTitle"
                    placeholder="content Title..."
                    type="text"
                    value={contentC.content.contentTitle}
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
                // value={contentBody}
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
            <Button color="success" onClick={() => contentC.updateContent(params.id)} >
              update Content
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={()=>contentC.setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )

}


// const updateContent = ((id, indx) => {
//     console.log('contentid', id);
//     console.log('indx', indx)
//     let updatedContent = content.map((ele, i) => {
//       if (ele.id === id) {
//         return ele
//       }
//     })
//     console.log('1111222233333',updatedContent.id)
//     let result = axios.patch(`${api}/content/${updatedContent.id}`, {
//       contentTitle: names.contentTitle,
//       contentBody: names.contentBody,
//       contentLink: names.contentLink,
//     }, {
//       headers: { Authorization: `Bearer ${cookie.load("token")}` },

//     }).then(
//       setContent([...content, result.data.Content])
//     )
// })
// onClick={state.handleShow}
// const handelChangeforUpdate=(e)=>{
//   e.preventDefault()
//   // setNames({...names,[e.target.name]:e.target.value})
//   console.log(names)
// }
{/* <Modal
                  show={state.show}
                  onHide={state.handleClose}
                  class="modal-dialog modal-lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Content Model</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form style={{ width: "70%", margin: "auto" }}>
                      <Row>
                        <Col md={12}>
                          <FormGroup>
                            <Label for="contentTitle">content Title</Label>
                            <Input

                              id="contentTitle"
                              name="contentTitle"
                              // value={contentTitle}
                              placeholder="content Title..."
                              type="text"
                              onChange={(e)=>{
                                setContentTitle(e.target.value)
                                 handelChangeforUpdate(e) 
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
                          // value={contentBody}
                          onChange={(e)=>{
                            setContentBody(e.target.value)
                          }}                           />
                        <Label for="contentLink">content Link</Label>
                        <Input
                          id="contentLink"
                          name="contentLink"
                          placeholder="content Link..."
                          type="contentLink"
                          onChange={(e)=>{
                            setContentLink(e.target.value)
                          }}                       
                          />

                      </FormGroup>
                      <Button color="success" onClick={()=>updateContent(classContent.id, indx)} >
                        update Content
                      </Button>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button color="danger" onClick={state.handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal> */}