import React from "react";
import "../../App.css";
import { Conversation } from "../Shared/Components/Conversation";

export const ConversationBox = () => {
    const conversations = [
        {
            id: 1,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 2,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 3,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 4,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 5,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 6,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 7,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 8,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
        {
            id: 9,
            img: "https://i.postimg.cc/pdNRr6Wj/Ellipse-2.png",
            message: "Hi!",
            time: "11:00pm",
            name: "Raghab",
        },
    ];
    return (
        <div className="w-[427px] bg-black rounded-[20px] h-[calc(100vh-172px)]">
            <h3 className="text-white font-Poppins h-[50px] flex items-center px-[20px]">Conversations</h3>
            <div className="h-[calc(100vh-222px)] overflow-y-auto">
                {conversations?.map(item => {
                    return <Conversation key={item?.id} item={item} />;
                })}
            </div>
        </div>
    );
};
