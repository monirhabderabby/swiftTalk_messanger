import React from "react";

// Third party packages
import { AiOutlineCamera } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export const MessageInputBox = () => {
    return (
        <div className="flex items-center w-full gap-x-[20px]">
            <div className="flex-1 h-[45px] rounded-[10px] flex items-center gap-x-[13px] bg-[#212121] px-[12px]">
                <input type="text" className="w-full h-[45px] rounded-[10px] bg-transparent outline-none text-white" />
                <AiOutlineCamera className="text-[rgba(255,255,255,0.5)] text-[20px]" />
            </div>
            <div className="bg-blue h-[45px] text-white w-[45px] rounded-[10px] flex justify-center items-center">
                <BsFillMicFill />
            </div>
        </div>
    );
};
