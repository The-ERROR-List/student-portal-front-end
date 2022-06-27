// import './App.css';
import "./styling.css";
import { useState, useEffect } from "react";

function Chat(props) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        to: props.socket.id,
        room: props.room,
        author: props.username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await props.socket.emit("send_message", messageData)
    //   setMessageList((list) => [...list, messageData]);// save the message im sending
      setMessageList(messageList.concat(messageData))

      setCurrentMessage("") //reset the message
    }
  };

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      console.log(data);
    //   setMessageList([...messageList, data])
      setMessageList(messageList.concat(data))
    });
  }, [props.socket]); // whenever theres a change on the socket server im listening to an event

  useEffect(() => {
    console.log(messageList);
  }, [messageList]);
  return (
    <div id="container">
      <main>
        <header>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg"
            alt=""
          />
          <div>
            <h2>Chat with Vincent Porter</h2>
            <h3>already 1902 messages</h3>
          </div>
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_star.png"
            alt=""
          />
        </header>
        <ul id="chat">
          {messageList.map((messageContent) => {
            return (
              <li
              // className={props.username === messageContent.author ? "me" : "you"}
              >
                <div className="entete">
                  <span className="status green"></span>
                  <h2>{messageContent.author}</h2>
                  <h3>{messageContent.time}</h3>
                </div>
                <div className="triangle"></div>
                <div className="message">{messageContent.message}</div>
              </li>
            );
          })}
        </ul>

        <footer>
          <button onClick={sendMessage} style={{ color: "red" }}>
            {" "}
            send
          </button>

          <textarea
            placeholder="Type your message"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          ></textarea>
          {/* <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_picture.png"
            alt=""
          />
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/ico_file.png"
            alt=""
          /> */}

          <a href="#">Send</a>
         
        </footer>
      </main>
    </div>
  );
}

export default Chat;
