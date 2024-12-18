'use client'

import { useDispatch, useSelector } from "react-redux"
import { setValue } from "../store/slices/routeSlice"
import Header from "@/components/header"
import { useEffect } from "react"
import { RootState } from "../store/store"
import { useRouter } from "next/router"
import { useParams } from "next/navigation"



export default function UserPage() {
    const dispatch = useDispatch()

    let currentvalue = useSelector((state: RootState) => state.route.route)

    const param = useParams()
    console.log(param)

    console.log(currentvalue)
    if (param.id != null) {
        const handleUdateRoute = () => {
            dispatch(setValue("profile"))
        }

        useEffect(() => {
            handleUdateRoute()
        }, [])
    }


    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center">
            <Header />
            <div className="flex gap-2 w-[650px] border-[1px] font-manrope rounded-xl p-4 mt-10">

            </div>
        </div>
    )
}