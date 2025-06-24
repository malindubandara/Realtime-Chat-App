import React, { useState } from "react";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
import socketIOClient from "socket.io-client";
import { useEffect } from "react";
// import '../style.css'

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const socketio = socketIOClient("http://localhost:3002");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socketio.on("chat", (chats) => {
      setChats(chats);
    });
  });

  const sendToSocket = (chat) => {
    socketio.emit("chat", chat);
  };

  const addMessage = (chat) => {
    const newChat = {
      ...chats,
      username: localStorage.getItem("user"),
      avatar: localStorage.getItem("avatar"),
      message: chat,
    };
    setChats([...chats, newChat]);
    sendToSocket([...chats, newChat]);
  };

  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="chat-header">
            <h4 className="chat-title">UserName : {user}</h4>
            <p className="chat-logout" onClick={Logout}>
              <strong>Logout</strong>
            </p>
          </div>
          <ChatLists chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
