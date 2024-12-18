"use client"

import { RootState } from "@/app/store/store"
import Link from "next/link"
import { useParams } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"

export default function Header() {

    const currentValue = useSelector((state : RootState) => state.route.route)

    console.log(currentValue)


    return (
        <div className="sticky top-0 w-full h-16 bg-white/50 backdrop-blur-sm border-b-[1px] place-content-center">
            <div className="w-full px-4 flex justify-between text-[20px] items-center ">
                <div className="font-bold">FARUM</div>
                <div className="">./{currentValue} <span className="text-[10px] text-gray-600">#berando</span></div>
                <div>
                    {
                        currentValue == "profile" ? <p className="w-8"></p> : <Link href={"/login"} className="bg-black px-4 py-1 rounded-xl text-white text-[16px]">Login</Link>
                    }
                </div>
                
            </div>
        </div>
    )
}