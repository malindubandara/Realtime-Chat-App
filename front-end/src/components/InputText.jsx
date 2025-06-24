import React from "react";
import { useState } from "react";
import "../style.css";

const InputText = ({ addMessage }) => {
  const [message, setMessage] = useState();
  const sendMessage = () => {
    addMessage(message);
    setMessage("");
  };
  return (
    <div className="input-text">
      <textarea
        placeholder="Enter Message"
        name="message"
        id="message"
        rows="6"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      ></textarea>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default InputText;
