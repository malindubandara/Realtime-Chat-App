import React from "react";
import "../style.css";

const ChatLists = ({ chats }) => {
  const user = localStorage.getItem("user");
  function SenderChat({ message, username, avatar }) {
    return (
      <div className="sender-chat">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong>
          <br />
          {message}
        </p>
      </div>
    );
  }

  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className="receiver-chat">
        <img src={avatar} alt="" />
        <p>
          <strong>{username}</strong>
          <br />
          {message}
        </p>
      </div>
    );
  }
  return (
    <div className="chat-lists">
      {chats.map((chat, index) => {
        if (chat.username === user) {
          return (
            <SenderChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        } else {
          return (
            <ReceiverChat
              key={index}
              message={chat.message}
              username={chat.username}
              avatar={chat.avatar}
            />
          );
        }
      })}
    </div>
  );
};

export default ChatLists;
