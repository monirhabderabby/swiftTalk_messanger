import React from "react";

export const Chat = ({ message }) => {
    return (
        <div className={`flex ${message?.sender ? "justify-end" : "justify-start"} rounded-[10px]`}>
            <span className={` py-[13px] px-[50px] ${message?.sender ? "bg-blue" : " bg-[#1B1B1B]"} text-white rounded-[10px]`}>{message?.text}</span>
        </div>
    );
};
