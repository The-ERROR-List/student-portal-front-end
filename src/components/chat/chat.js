import { useState, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";


export default function Chat(props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([])

  const sendMessage = async () => {
        if (currentMessage !== "") {
          const messageData = {
            room: props.room,
            author: props.username,
            message: currentMessage,
            time:
              new Date(Date.now()).getHours() +
              ":" +
              new Date(Date.now()).getMinutes(),
          };
          await props.socket.emit("send_message", messageData)
          setMessageList((list) => [...list, messageData]);// save the message im sending
          setCurrentMessage("") //reset the message
        }


    }


  useEffect(() => {
    props.socket.on('receive_message', (data)=>{
        console.log(data)
        setMessageList((list) => [...list, data]); // save the message im recieving
    })
  }, [props.socket]); // whenever theres a change on the socket server im listening to an event

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p> Classroom Chat</p>{" "}
      </div>

      <div className="chat-body">
      <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={props.username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
        </div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Hello.."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <button onClick={sendMessage}> send</button>
      </div>
    </div>
  );
}
