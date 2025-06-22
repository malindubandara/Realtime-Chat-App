import React, { useState } from "react";
import ChatLists from "./ChatLists";
import InputText from "./InputText";
import UserLogin from "./UserLogin";
// import '../style.css'

const ChatContainer = () => {
  const [user, setUser] = useState(localStorage.getItem("user"));
  return (
    <div>
      {user ? (
        <div>
          <div className="chat-header">
            <h4 className="chat-title">Username : Banda</h4>
            <p className="chat-logout">
              <strong>Logout</strong>
            </p>
          </div>
          <ChatLists />
          <InputText />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
};

export default ChatContainer;
