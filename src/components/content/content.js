import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { useParams } from "react-router-dom";
import { api } from '../../redux/type'
import axios from "axios";
import './content.css'
import { Modal, Button, FormGroup } from "react-bootstrap";
import { StateContext } from "../../context/State";
import {
  Form,
  Row,
  Col,
  Label,
  Input,

} from "reactstrap";
import { When } from "react-if";
const Content = (props) => {
  const state = useContext(StateContext)
  // const [textArea, setTextArea] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentBody, setContentBody] = useState("")
  const [contentLink, setContentLink] = useState("")
  const [contentCategory, setContentCategory] = useState("")
  const [content, setContent] = useState([])
  const [names,setNames]=useState({})
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('1', contentTitle, '2', contentBody, '3', contentLink, '4', contentCategory)
    let result = axios.post(`${api}/content/${props.id}`, {
      contentTitle: e.target.contentTitle.value,
      contentBody: e.target.contentBody.value,
      contentLink: e.target.contentLink.value,
      contentCategory: e.target.contentCategory.value,
      classId: props.id,
    }, {
      headers: { Authorization: `Bearer ${cookie.load("token")}` },
    }).then(response => {
      console.log(response.data)
      setContent([...content, response.data.Content]);
    })
  };
  const handelChangeforUpdate=(e)=>{
    e.preventDefault()
    setNames({...names,[e.target.name]:e.target.value})
    console.log(names)
  }


  const getContents = () => {
    let contentData = axios.get(`${api}/content-for-class/${props.id}`, {
      headers: { Authorization: `Bearer ${cookie.load("token")}` },
    }).then((response) => {
      console.log('gettttttt', response.data)
      setContent(response.data)
    })
  }
  useEffect(() => {
    if(cookie.load('role')==='teacher'||cookie.load('role')==='student'){
      getContents()

    }
  }, [])

  const deleteContent = ((id, indx) => {
    console.log('sssssssss',id)
    axios.delete(`${api}/content/${id}`, {
      headers: { Authorization: `Bearer ${cookie.load("token")}` },
    }).then(
      setContent(content.filter((contentName, index) => index !== indx))
    )
  })
  const updateContent = ((id, indx) => {
    console.log('contentid', id);
    console.log('indx', indx)
    let updatedContent = content.map((ele, i) => {
      if (ele.id === id) {
        return ele
      }
    })
    console.log('1111222233333',updatedContent.id)
    let result = axios.patch(`${api}/content/${updatedContent.id}`, {
      contentTitle: names.contentTitle,
      contentBody: names.contentBody,
      contentLink: names.contentLink,
    }, {
      headers: { Authorization: `Bearer ${cookie.load("token")}` },

    }).then(
      setContent([...content, result.data.Content])
    )
})

function ShowContent() {
  return (
    <>
      {
        content ?
          content.map((classContent, indx) => {
            return (
              <>
                <div key={indx.toString()} >
                  <p> {classContent.contentTitle}</p>
                  <p>{classContent.contentBody}</p>
                  <p>{classContent.contentLink}</p>
                  <p>{classContent.contentCategory}</p>
                  <When condition={cookie.load('role')==='teacher'}>
                  <button onClick={() => deleteContent(classContent.id, indx)}>
                    Delete content
                  </button>
                  </When>
                 
                  <br />
                  <When condition={cookie.load('role')==='teacher'}>

                  <button onClick={state.handleShow}>
                    update content
                  </button>
                  </When>

                </div>

                <Modal
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
                </Modal>
              </>
            );
          }) : null
      }

    </>
  );
}

return (
  <>
  <When condition={cookie.load('role')==='teacher'}>

    <form onSubmit={handleSubmit}>
      <label for="contentTitle" style={{ color: "black" }}>content Title</label>
      <input className="input-class" id="contentTitle" name="contentTitle" value={contentTitle} onChange={(e) => setContentTitle(e.target.value)} />

      <label for="contentBody" style={{ color: "black" }}>content Body</label>
      <input id="contentBody" className="input-class" name="contentBody" value={contentBody} onChange={(e) => setContentBody(e.target.value)} />


      <label for="contentLink" style={{ color: "black" }}>content Link</label>
      <input id="contentLink" className="input-class" name="contentLink" value={contentLink} onChange={(e) => setContentLink(e.target.value)} />

      <label for="contentCategory" style={{ color: "black" }}>content category</label>
      <input id="contentCategory" className="input-class" name="contentCategory" value={contentCategory} onChange={(e) => setContentCategory(e.target.value)} />
      <button type="submit">
        Add Content
      </button>
    </form>
    </When>

    <ShowContent />

  </>
);
};

export default Content;
