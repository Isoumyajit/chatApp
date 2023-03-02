import React, { useContext } from "react";
import { Chats } from "./Chats";
import "../Scss/Sidebar.scss";
import { logOut } from "../Services/firebase";
import { useNavigate } from "react-router-dom";
import { authContext } from "../Context/context";
import { Search } from "./Search";

export const Sidebar = () => {
  const { currentUser } = useContext(authContext);

  const navigate = useNavigate();

  const signOut = async () => {
    await logOut();
    navigate("/login");
  };
  return (
    <div className="chatWrapper h-full bg-gray-600 rounded-tl-md rounded-bl-md text-white">
      <div className="flex flex-col overflow-y-auto">
        <div className="flex flex-row justify-between m-1 items-center">
          <span className="text-white">ChatApp</span>
          <div>
            <span>{currentUser.displayName}</span>
            <button
              className="text-center text-white bg-gray-700 p-1 m-2 rounded-sm hover:bg-gray-400 duration-150"
              onClick={signOut}
            >
              Log Out
            </button>
          </div>
        </div>
        <Search />
      </div>
      <div className=" contacts h-80 grid grid-flow-row overflow-y-scroll ">
        <Chats />
      </div>
    </div>
  );
};
