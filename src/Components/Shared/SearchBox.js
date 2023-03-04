import React from "react";

import { BiSearch } from "react-icons/bi";
export const SearchBox = () => {
    return (
        <div className="w-[427px] bg-black h-[59px] rounded-[20px] flex items-center">
            <div className="bg-transparent w-[50px] h-full flex justify-center items-center">
                <BiSearch className="text-[20px] text-white" />
            </div>
            <input
                type="text"
                className="bg-transparent text-[rgba(255,255,255,0.85)] outline-none h-full flex-1 rounded-tr-[20px] rounded-br-[20px]"
                placeholder="Search"
            />
        </div>
    );
};
