import React, { useContext, useEffect, useState } from "react";
import { MessageHeads } from "./MessageHeads";
import { db } from "../../firebase-config";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../../Context/ChatContext";

export const MessageGroups = (msg) => {
  const { userData } = useContext(ChatContext);
  const [messages, setMessagees] = useState([{}]);
  useEffect(() => {
    const fetchMessages = onSnapshot(
      doc(db, "chats", userData.chatId),
      (doc) => {
        if (doc.data().messages) {
          setMessagees(doc.data().messages);
        }
      }
    );
    return () => fetchMessages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.chatId]);
  return (
    <div className="w-full h-[calc(100%-160)]">
      {messages?.map((message) => (
        <MessageHeads key={message.id} msg={message} />
      ))}
    </div>
  );
};
