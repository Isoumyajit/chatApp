import React from "react";
import { ChatContainer } from "./ChatContainer";
import { Sidebar } from "./Sidebar";
import "../Scss/Dashboard.scss";

export const Dashboard = () => {
  return (
    <div className="container flex flex-row bg-white rounded-lg">
      <div className="sidebar_container">
        <Sidebar />
      </div>
      <div className="chat_container">
        <ChatContainer />
      </div>
    </div>
  );
};
