"use client"

import { IoImageOutline } from "react-icons/io5";
import { LuSendHorizontal } from "react-icons/lu";



export default function Post() {
    return (
        <div className="flex flex-col gap-2 w-[650px] border-[1px]  rounded-xl px-14 py-4">
            <div className="flex items-center gap-2">

                <input type="" name="decription" id="" className="active:border-none focus:border-none outline-none w-full p-2 rounded-xl" />
                <IoImageOutline size={25} />
            </div>
            <div className="border-[1px] w-full mt-2"></div>
            <div className="w-full flex justify-end items-center gap-2 "><span>FULL SEND</span><LuSendHorizontal size={20}/></div>
        </div>
    )
}