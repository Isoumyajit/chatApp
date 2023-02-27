import React from "react";

export const Input = () => {
  return (
    <div className="w-full bg-white text-black flex flex-row justify-between items-center">
      <input
        className="w-[calc(90%)] p-3 outline-none focus:outline-none"
        type="text"
        placeholder="Message goes here"
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
          />
        </div>
      </div>
    </div>
  );
};
