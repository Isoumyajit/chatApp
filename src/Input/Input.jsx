import { updateDoc, doc, arrayUnion, Timestamp } from "firebase/firestore";
import React, { useState, useContext } from "react";
import { db } from "../firebase-config";
import { ChatContext } from "../Context/ChatContext";
import { v4 as uniqueId } from "uuid";
import { authContext } from "../Context/context";

export const Input = () => {
  const [text, setText] = useState("");
  const { userData } = useContext(ChatContext);
  const { currentUser } = useContext(authContext);
  const handleMessageSend = async () => {
    userData.chatId &&
      (await updateDoc(doc(db, "chats", userData.chatId), {
        messages: arrayUnion({
          id: uniqueId(),
          senderId: currentUser.uid,
          text,
          date: Timestamp.now(),
        }),
      }).then(() => setText("")));
  };
  return (
    <div className="w-full bg-white text-black flex flex-row justify-between items-center">
      <input
        className="w-[calc(90%)] p-3 outline-none focus:outline-none"
        type="text"
        placeholder="Message goes here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <div className="flex flex-row gap-2 items-start">
          {" "}
          <img
            className="cursor-pointer hover:scale-105 duration-150"
            src="https://img.icons8.com/office/25/null/attach.png"
            alt=""
          />
          <img
            className="cursor-pointer hover:scale-105 duration-150"
            src="https://img.icons8.com/external-kmg-design-flat-kmg-design/25/null/external-send-user-interface-kmg-design-flat-kmg-design.png"
            alt=""
            onClick={handleMessageSend}
          />
        </div>
      </div>
    </div>
  );
};
