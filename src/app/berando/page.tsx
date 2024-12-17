import Image from "next/image";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import CartPost from "./_components/postcart";



export default function BerandaPage() {
    return (
        <div className="flex flex-col gap-2 w-full justify-center items-center">
           <CartPost />
           <CartPost />
           <CartPost />
           <CartPost />
           <CartPost />
           <CartPost />
        </div>
    )
}