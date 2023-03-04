import React from "react";
import logo from "../../Assets/logo.png";

export const Navbar = () => {
    return (
        <div className="h-[80px] w-full px-[50px] flex items-center justify-between bg-blue">
            <div>
                <img className="w-[160px]" src={logo} alt="logo" />
            </div>
            <div>
                <button className="bg-black text-white px-[12px] py-[6px] rounded-[4px] hover:bg-gray">Logout</button>
            </div>
        </div>
    );
};
