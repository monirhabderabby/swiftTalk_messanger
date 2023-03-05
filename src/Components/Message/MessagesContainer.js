import React from "react";

export const MessagesContainer = () => {
    const data = [
        {
            id: 1,
            sender: true,
            text: "Hi!",
            time: "toaday, 2:01pm",
        },
        {
            id: 2,
            sender: false,
            text: "Hello! How are you?",
            time: "today, 2:02pm",
        },
        {
            id: 3,
            sender: true,
            text: "I'm good, thanks! How about you?",
            time: "today, 2:03pm",
        },
        {
            id: 4,
            sender: false,
            text: "I'm doing pretty well, thanks for asking!",
            time: "today, 2:04pm",
        },
        {
            id: 5,
            sender: false,
            text: "What have you been up to lately?",
            time: "today, 2:05pm",
        },
        {
            id: 6,
            sender: true,
            text: "Not too much, just been busy with work. How about you?",
            time: "today, 2:06pm",
        },
    ];
    return (
        <div className="flex-1 flex flex-col gap-y-[29px] mt-[30px]">
            {data?.map(message => {
                return (
                    <div className={`flex ${message?.sender ? "justify-end" : "justify-start"} rounded-[10px]`}>
                        <span className={` py-[13px] px-[50px] ${message?.sender ? "bg-blue" : " bg-[#1B1B1B]"} text-white rounded-[10px]`}>
                            {message?.text}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
