"use client"

import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import CartPost from "./_components/cart";
import Header from "@/components/header";
import Post from "./_components/post";
import { useParams } from "next/navigation";



export default function BerandaPage() {

    const params = useParams()
    console.log(params)

    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center">
            <Header />
            <Post />
            <CartPost />
            <CartPost />
            <CartPost />
            <CartPost />
            <CartPost />
            <CartPost />
        </div>
    )
}