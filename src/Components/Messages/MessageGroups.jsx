import React from "react";
import { MessageHeads } from "./MessageHeads";

export const MessageGroups = () => {
  return (
    <div className="w-full h-[calc(100%-160)]">
      <MessageHeads />
      <MessageHeads />
      <MessageHeads />
      <MessageHeads />
      <MessageHeads />
      <MessageHeads /> <MessageHeads /> <MessageHeads /> <MessageHeads />{" "}
      <MessageHeads /> <MessageHeads /> <MessageHeads /> <MessageHeads />{" "}
      <MessageHeads /> <MessageHeads />
    </div>
  );
};
