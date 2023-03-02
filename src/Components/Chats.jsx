import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { authContext } from "../Context/context";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import { ChatContext } from "../Context/ChatContext";

export const Chats = () => {
  const { currentUser } = useContext(authContext);
  const { dispatch } = useContext(ChatContext);

  const [chats, setChats] = useState([]);
  const handleSelect = (userInfo) => {
    console.log(userInfo);
    dispatch({ type: "CHANGE_USER", payload: userInfo });
  };
  useEffect(() => {
    const getChats = () => {
      const unsubscribe = onSnapshot(
        doc(db, "userChats", currentUser.uid),
        (doc) => {
          setChats(doc.data());
        }
      );

      return () => unsubscribe();
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  return (
    <>
      {Object.entries(chats)?.map((chat) => (
        <div
          key={chat[0]}
          className="h-20 cursor-pointer p-2 rounded-md m-3 flex items-center gap-2 hover:bg-gray-800 duration-200"
          onClick={() => handleSelect(chat[1].userinfo)}
        >
          {chat[1].userinfo.displayName}
        </div>
      ))}
    </>
  );
};
