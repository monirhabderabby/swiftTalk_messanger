import React from "react";
import { Outlet } from "react-router-dom";
import { SearchBox } from "../Shared/SearchBox";
import { ConversationBox } from "./ConversationBox";

export const Inbox = () => {
    return (
        <div>
            <div className="flex gap-x-[47px] ">
                <div className="flex flex-col items-start gap-y-[43px]">
                    <SearchBox />
                    <ConversationBox />
                </div>
                <div className="flex-1">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
