import { useEffect, useState } from "react";
import Chat from "./chat.js";
import "./chat.css";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000/socketMessages", {
  transports: ["websocket"],
  // reconnectionDelayMax: 10000,
  // auth: {
  //   token: "123"
  // },
  // query: {
  //   "my-key": "my-value"
  // }
});

socket.on("connect", () => {
  console.log("hello im connected");
  //   connectMessage("Connected to server  on socket-id :  " + socket.id);
});

export default function JoinChat() {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  function joinRoom() {
    if (userName !== "" && room !== "") {
      socket.emit("join_room", room);
        setShowChat(true);
    }
  }

  return (

    <div className="App">
    {!showChat ? (
      <div className="joinChatContainer">
        <h3>Join A Chat</h3>
        <input
          type="text"
          placeholder="John..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Room ID..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}>Join A Room</button>
      </div>
    ) : (
      <Chat socket={socket} username={userName} room={room} />
    )}
  </div>
    );
}
