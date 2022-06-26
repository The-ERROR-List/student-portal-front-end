import { useContext, useEffect, useState } from "react";
import cookie from "react-cookies";
import { useParams } from "react-router-dom";
import { api } from '../../../redux/type'
import axios from "axios";
import './content.css'
import { contentContext } from "../../../context/content"
import { When } from "react-if";
import { Link } from "react-router-dom";
const Content = (props) => {
  const params = useParams()
  cookie.save('classid',params.id)
  // const [textArea, setTextArea] = useState("");
  // const [contentTitle, setContentTitle] = useState("");
  // const [contentBody, setContentBody] = useState("")
  // const [contentLink, setContentLink] = useState("")
  // const [contentCategory, setContentCategory] = useState("")
  // const [content, setContent] = useState([])
  const contentC = useContext(contentContext)
  const getContents = () => {
    let contentData = axios.get(`${api}/content-for-class/${params.id}`, {
      headers: { Authorization: `Bearer ${cookie.load("token")}` },
    }).then((response) => {
      console.log('gettttttt', response.data)
      contentC.setContent(response.data)
    })
  }
  useEffect(() => {
    // if (cookie.load('role') === 'teacher' || cookie.load('role') === 'student') {
      getContents()

    // }
  }, [])



  function ShowContent() {
    return (
      <>
        {
          contentC.content ?
            contentC.content.map((classContent, indx) => {
              return (
                <>
                  <div key={indx.toString()} >
                    <p> {classContent.contentTitle}</p>
                    <p>{classContent.contentBody}</p>
                    <p>{classContent.contentLink}</p>
                    <p>{classContent.contentCategory}</p>
                    <When condition={cookie.load('role') === 'teacher'}>
                      <button onClick={() =>
                        contentC.deleteContent(classContent.id, indx)

                      }>
                        Delete content
                      </button>
                    </When>

                    <br />
                    <When condition={cookie.load('role') === 'teacher'}>

                      <Link to={`/updateContent/${classContent.id}`}>
                        <button >
                          update content
                        </button>
                      </Link>

                    </When>

                  </div>


                </>
              );
            }) : null
        }

      </>
    );
  }

  return (
    <>
      <When condition={cookie.load('role') !== 'student'}>

        <form onSubmit={(e) =>
          contentC.addContent(e)
        }>
          <label for="contentTitle" style={{ color: "black" }}>content Title</label>
          <input className="input-class" id="contentTitle" name="contentTitle" value={contentC.contentTitle} onChange={(e) => contentC.setContentTitle(e.target.value)} />

          <label for="contentBody" style={{ color: "black" }}>content Body</label>
          <input id="contentBody" className="input-class" name="contentBody" value={contentC.contentBody} onChange={(e) => contentC.setContentBody(e.target.value)} />


          <label for="contentLink" style={{ color: "black" }}>content Link</label>
          <input id="contentLink" className="input-class" name="contentLink" value={contentC.contentLink} onChange={(e) => contentC.setContentLink(e.target.value)} />

          <label for="contentCategory" style={{ color: "black" }}>content category</label>
          <input id="contentCategory" className="input-class" name="contentCategory" value={contentC.contentCategory} onChange={(e) => contentC.setContentCategory(e.target.value)} />
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
