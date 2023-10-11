import React from "react";

const ChatMessage = ({ user, text }) => {
  return (
    <div className="flex p-2 items-center shadow-sm">
      <img
        className="h-5 rounded-full"
        src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        alt="user"
      />
      <div className="flex">
        <p className="font-normal text-xs ml-2"> {user} : </p>
        <p className="text-xs ml-2 font-light"> {text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
