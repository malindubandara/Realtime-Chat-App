import React, { useState } from "react";
import { FaReact } from "react-icons/fa6";
import "../style.css";

const UserLogin = ({ setUser }) => {
  const [userName, setUserName] = useState();
  const handleUser = () => {
    if (!userName) return;
    localStorage.setItem("user", userName);
    setUser(userName);
    localStorage.setItem(
      "avatarImage",
      `https://api.dicebear.com/5.x/initials/svg?seed=${userName}`
    );
  };
  return (
    <div className="login-container">
      <div className="login-title">
        <FaReact />
        <h1>Chat App</h1>
      </div>
      <div className="login-form">
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleUser}>Login</button>
      </div>
    </div>
  );
};

export default UserLogin;
