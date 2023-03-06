import React from "react";

export const Conversation = ({ item }) => {
    return (
        <div className="h-[90px] w-full flex justify-between items-center hover:bg-gray px-[20px]">
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
};
