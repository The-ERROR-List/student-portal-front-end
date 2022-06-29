import { useEffect, useState } from "react";
import Chat from "./chat.js";
import "./chat.css";
import { io } from "socket.io-client";
import { api } from "../../redux/type";
import cookie from "react-cookies";
const socket = io(`${api}/socketMessages`, {
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



export default function JoinChat(props) {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(true);

  socket.on('welcome', ()=>{
    console.log('hi welcome')
  })

  useEffect(()=>{
    if (cookie.load("username") !== null) {
      console.log('inside if 1')
      setUsername(cookie.load("username"));
      setRoom(props.id); 
      //room id is class id
    }
      
  },[])
   


   
  

  useEffect(() => {
    console.log("your room is", room);
    socket.emit("join_room", room);
    setShowChat(true);
  }, [room]);

  return (
    <div className="container">
      {!showChat ? (
        <div className="joinChatContainer">
          <h5> Connect and chat with your class</h5>
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
          {/* <button onClick={joinRoom}>Join A Room</button> */}
        </div>
      ) : (
        <Chat socket={socket} username={userName} room={room}  />
      )}
    </div>
  );
}
