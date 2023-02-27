import React from "react";

export const MessageHeads = () => {
  return (
    <div className="message text-black mb-10">
      <div className="w-full grid grid-flow-col gap-3 items-center justify-start">
        <img
          className="sender_avatar object-cover rounded-full w-10 h-10"
          src="https://cdn.pixabay.com/photo/2017/"
          alt=""
        />
        <div className="message_content p-2 rounded-md bg-gray-200 ">
          MessageHeads
        </div>
        <div className="timestamp">
          <span className="text-xs">time</span>
        </div>
      </div>
    </div>
  );
};
