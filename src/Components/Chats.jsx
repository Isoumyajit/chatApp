import React from "react";

export const Chats = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-white">
        <div className="flex gap-3 items-center">
          {" "}
          <img
            className=" object-cover w-10 h-10 rounded-full "
            src=""
            alt=""
          ></img>
          <p>Name</p>
        </div>
        <p>Status</p>
      </div>
    </div>
  );
};
