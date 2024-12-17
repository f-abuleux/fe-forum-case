"use client"

import Link from "next/link"

export default function Header() {
    return (
        <div className="sticky top-0 w-full h-16 bg-white/50 backdrop-blur-sm border-b-[1px] place-content-center">
            <div className="w-full px-4 flex justify-between text-[20px] items-center ">
                <div className="font-bold">FARUM</div>
                <div className="">./beranda</div>
                <Link href={"/login"} className="bg-black px-4 py-2 rounded-xl text-white text-[16px]">Login</Link>
            </div>
        </div>
    )
}