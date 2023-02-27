import React from "react";
import { MessageGroups } from "./Messages/MessageGroups";
import { Input } from "../Input/Input";
import "../Scss/ChatContainer.scss";

export const ChatContainer = () => {
  return (
    <div className="bg-gray-700 h-full text-white">
      <div className="chatInfo bg-gray-800 flex flex-row justify-between p-2 items-center">
        <div className="flex gap-2">
          <p>Name</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <img className="object-cover w-10 h-10 rounded-full " src="" alt="" />
        </div>
      </div>
      <div className="messages w-full  flex flex-row items-start p-2 overflow-y-auto scroll-smooth">
        <MessageGroups />
      </div>
      <div>
        <Input />
      </div>
    </div>
  );
};
