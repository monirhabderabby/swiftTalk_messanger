import React from "react";
import "../../App.css";

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
                    return (
                        <div key={item?.id} className="h-[90px] w-full flex justify-between items-center hover:bg-gray px-[20px]">
                            <div className="flex items-center gap-x-[14px]">
                                <img src={item?.img} alt="img" className="h-[70px] w-[70px] rounded-full" />
                                <div className="font-Poppins">
                                    <h3 className="text-[18px] text-white font-semibold">{item?.name}</h3>
                                    <span className="text-[14px] font-medium text-[rgba(255,255,255,0.75)]">{item?.message}</span>
                                </div>
                            </div>
                            <div className="text-white text-[rgba(255,255,255,0.5)]">{item?.time}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
