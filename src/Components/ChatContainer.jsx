import React, { useContext } from "react";
import { MessageGroups } from "./Messages/MessageGroups";
import { Input } from "../Input/Input";
import "../Scss/ChatContainer.scss";
import { ChatContext } from "../Context/ChatContext";

export const ChatContainer = () => {
  const { userData } = useContext(ChatContext);
  console.log(userData);

  return (
    <div className=" bg-gray-500 h-full text-white">
      <div className="chatInfo bg-gray-800 flex flex-row justify-between p-2 items-center">
        <div className="flex gap-2">
          <p>{userData.user.displayName}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img className="object-cover w-10 h-10 rounded-full " src="" alt="" />
        </div>
      </div>
      {userData.chatId !== "null" ? (
        <>
          <div className="messages w-full  flex flex-row items-start p-2 overflow-y-auto scroll-smooth">
            <MessageGroups />
          </div>
          <div>
            <Input />
          </div>
        </>
      ) : (
        <>
          <div className="text-white messages w-full  flex flex-col items-center justify-center gap-2">
            <img
              src="https://img.icons8.com/ios/100/null/filled-chat.png"
              alt=""
            />
            <p className="text-xl">Hey There Welcome to Your Chat App</p>
            <p className="text-md">Select a contact to start chatting</p>
          </div>
        </>
      )}
    </div>
  );
};
