import { useEffect, useState } from "react";
import "./chat.css";
import { io } from "socket.io-client";
import Chat from "./chat";
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
});

export default function JoinChat() {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <>
      <Chat socket={socket} username={userName} room={room} />
    </>
  );
}
