import React, { useContext } from "react";
import { authContext } from "../../Context/context";
// import { ChatContext } from "../../Context/ChatContext";

export const MessageHeads = ({ msg }) => {
  const { currentUser } = useContext(authContext);
  return (
    <div className="message text-black mb-10">
      {currentUser.uid !== msg.senderId ? (
        <div
          className={
            "w-full grid grid-flow-col gap-3 items-center justify-start"
          }
        >
          <img
            className="sender_avatar object-cover rounded-full w-10 h-10"
            src="https://cdn.pixabay.com/photo/2017/"
            alt=""
          />
          <div className="message_content p-2 rounded-md bg-gray-200 ">
            {msg.text}
          </div>
          <div className="timestamp">
            <span className="text-xs">{}</span>
          </div>
        </div>
      ) : (
        <div
          className={"w-full grid grid-flow-col gap-3 items-center justify-end"}
        >
          <div className="message_content p-2 rounded-md bg-gray-200 ">
            {msg.text}
          </div>
          <div className="timestamp">
            <span className="text-xs">{}</span>
          </div>
        </div>
      )}
    </div>
  );
};
