// import './App.css';
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Chat from "./chat";
const socket = io(`http://localhost:3000/socketMessages`, {
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

function Join() {
    const [userName, setUsername] = useState("");
    const [room, setRoom] = useState("");
    const [showChat, setShowChat] = useState(false);
  
    function joinRoom() {
        setUsername('username')
        setRoom("classId")//room id is classId 
      
      if (userName !== "" && room !== "") {
        socket.emit("join_room", room);
          setShowChat(true);
      }
  
    }
  
    useEffect (()=> {
      console.log('your room is', room);
    }, [room])

    return (

        <div className="App">
        {!showChat ? (
          <div className="joinChatContainer">
    
            {/* <When condition={cookie.load('role')==='teacher'}> */}
            <h3>chat with your student</h3>
            {/* </When> */}
            {/* <When condition={cookie.load('role')==='student'}> */}
            <h3>chat with your Teacher</h3>
            {/* </When> */}
            {/* <input
              type="text"
              placeholder="John..."
              onChange={(event) => {
                setUsername(event.target.value);
              }} */}
            {/* /> */}
            {/* <input
              type="text"
              placeholder="Room ID..."
              onChange={(event) => {
                setRoom(event.target.value);
              }} */}
            {/* /> */}
            <button onClick={joinRoom}>Join A Room</button>
          </div>
        ) : (
          <Chat socket={socket} username={userName} room={room} />
        )}
      </div>
        );
}

export default Join;
