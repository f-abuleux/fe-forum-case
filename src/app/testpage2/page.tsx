"use client"

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TestPage2() {
    const count = useSelector((state: RootState) => state.example.value)



    return (
        <div>
            <div className='w-full items-center gap-5 flex justify-start'>
                <h1>Home Page</h1>
                <p>Count: {count}</p>

            </div>
        </div>
    )
}