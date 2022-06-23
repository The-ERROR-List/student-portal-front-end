import { useState } from "react";
import cookie from "react-cookies";


const Content = (props) => {
  const [textArea, setTextArea] = useState("");
  const [content, setContent] = useState([]);

  const handleAddContent = async () => {

    let fetched = await fetch(
      "https://student-portal-asac.herokuapp.com/content",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cookie.load("token")}`,
        },
        body: JSON.stringify({
          content: textArea,
          classId: props.match.params.id,
        }),
      }
    );
    let response = await fetched.json();
    console.log(response);

    setContent([...content, textArea]);
  };

  function ShowContent() {
    return (
      <>
        {content.map((content, indx) => {
          return (
            <div key={indx.toString()}>
              <p> {content}</p>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <textarea
        rows="4"
        cols="50"
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
      />
      <button onClick={handleAddContent}>Add Annoucment</button>

      <ShowContent />
    </>
  );
};

export default Content;
