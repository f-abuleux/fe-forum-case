import { CgProfile } from "react-icons/cg";
import { IoIosHeartEmpty, IoIosHeart , IoIosShare} from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";




export default function CartPost() {
    return (
        <div className="flex gap-2 w-[650px] border-[1px] font-manrope rounded-xl p-4">
            <div>
                <CgProfile size={40} />
            </div>
            <div className=" flex flex-col mt-2 mr-10">
                <div className="flex gap-2 items-center">
                    <p className="font-bold">Name</p>
                    <p className="font-light text-[12px]">. 3 Menit</p>
                </div>
                <p className="mt-2 pr-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, nisi in libero quis at excepturi quasi, nihil aliquid sunt soluta doloremque deleniti blanditiis perferendis, ex similique totam. Nisi quia delectus doloremque explicabo cupiditate accusantium ut adipisci neque, placeat ipsa iste inventore voluptatum eligendi praesentium vitae eum fugiat sequi. Iure, ad!</p>
                <div className="border-[1px] w-full mt-2"></div>
                <div className="flex items-center mt-2 gap-10 text-[20px]">
                    <p><IoIosHeartEmpty size={22} /></p>
                    <p><FaRegComment size={20}/></p>
                    <p><IoShareSocialOutline size={20}/></p>
                </div>
            </div>
        </div>
    )
}