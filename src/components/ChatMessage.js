import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="p-1 flex items-center">
      <img
        className="w-7 h-7 "
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
      ></img>
      <span className="text-sm font-bold p-1">{name}</span>
      <span className="p-1 text-sm">{message}</span>
    </div>
  );
};

export default ChatMessage;
