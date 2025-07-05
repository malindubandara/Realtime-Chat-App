import React, { useEffect } from "react";
import "../style.css";
import { useRef } from "react";

const ChatLists = ({ chats }) => {
  const endOFMessages = useRef();
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
  useEffect(() => {
    scrollToBottom();
  }, [chats]);

  const scrollToBottom = () => {
    endOFMessages.current?.scrollIntoView({ behavior: "smooth" });
  };

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
      <div ref={endOFMessages} />
    </div>
  );
};

export default ChatLists;
