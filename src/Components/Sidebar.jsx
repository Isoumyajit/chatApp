import React from "react";
import { Chats } from "./Chats";
import "../Scss/Sidebar.scss";

export const Sidebar = () => {
  return (
    <div className="chatWrapper h-full bg-gray-600 rounded-tl-md rounded-bl-md">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between m-1 items-center">
          <span className="text-white">ChatApp</span>
          <div>
            <span>Name</span>
            <button className="text-center text-white bg-gray-700 p-1 m-2 rounded-sm hover:bg-gray-400 duration-150">
              Log Out
            </button>
          </div>
        </div>
        <div className="w-full pr-2 ">
          <input
            className="p-2 ml-1 w-full ouline-none border-b-2 border-white bg-transparent focus:outline-none"
            type="text"
            placeholder="Find user"
          />
        </div>
        <div className="contacts p-5 m-3 flex flex-col gap-2 hover:bg-gray-700 duration-200 border-b-2 border-black overflow-y-auto">
          <Chats />
        </div>
      </div>
    </div>
  );
};
