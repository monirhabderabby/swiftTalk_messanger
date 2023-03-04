import React from "react";
import { CiMenuKebab } from "react-icons/ci";
import { HiVideoCamera } from "react-icons/hi";
import { IoMdCall } from "react-icons/io";

export const MessageHeader = () => {
    return (
        <>
            <div className="h-[100px] w-full flex justify-between items-center bg-black">
                <div className="flex items-center h-full gap-x-[33px]">
                    <div className="w-[75px] h-[75px] rounded-full shadow-[0px_4px_4px_rgba(0,0,0,0,0.25)] relative">
                        <img
                            src="https://scontent.fdac28-1.fna.fbcdn.net/v/t39.30808-6/285722642_3283246311936540_7816692518925760812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeEaTv9acgXhHvkaa3jnO1reUx5aig2fxHZTHlqKDZ_Edm2XxW825x9K_KYJBPJjT4yZFZxj7jYl3GE4-6p7aNzt&_nc_ohc=Sll3nK2KIhYAX8VUfcB&_nc_ht=scontent.fdac28-1.fna&oh=00_AfBUMd1Pfaqp-J0D9Uu0ApDmRortzIUitUeOYIp5r6s_hQ&oe=6407BE4D"
                            alt="profile"
                            className="h-full w-full rounded-full"
                        />
                        <div className="w-[15px] h-[15px] rounded-full bg-[#00FF75] absolute bottom-[5%] right-[0px]"></div>
                    </div>
                    <div className="text-white font-Poppins">
                        <h3 className="text-[24px] font-semibold">Monir Hossain</h3>
                        <span className="text-[14px] font-normal">online</span>
                    </div>
                </div>
                <div className="flex items-center gap-x-[46px]">
                    <IoMdCall className="text-blue text-[25px]" />
                    <HiVideoCamera className="text-blue text-[25px]" />
                    <CiMenuKebab className="text-blue text-[25px]" />
                </div>
            </div>
            <div className="h-[1px] w-full bg-gray"></div>
        </>
    );
};
