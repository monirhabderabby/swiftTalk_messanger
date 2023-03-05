import React from "react";
import { MessageHeader } from "./MessageHeader";
import { MessageInputBox } from "./MessageInputBox";
import { MessagesContainer } from "./MessagesContainer";

export const MessageBox = () => {
    return (
        <div className="flex-1 w-full h-full bg-black rounded-[20px] px-[28px] py-[24px] flex flex-col ">
            <MessageHeader />
            <MessagesContainer />
            <MessageInputBox />
        </div>
    );
};
