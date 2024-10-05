import Link from "next/link";
import {
    FaFacebook,
    FaSquareXTwitter,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa6";
  import { MdOutlineMarkEmailUnread } from "react-icons/md";
  import { IoCallOutline, IoLocationOutline } from "react-icons/io5";



export default function Contact() {
  return (
    <div id="contact" className="max-w-screen-2xl py-5 sm:py-10 mx-auto">
      <div className="flex gap-4 items-center up">
        <span className=" w-full h-1 bg-[#7cfc00] rounded-sm"></span>
        <h1 className=" text-4xl text-[#7cfc00]">Contact</h1>
        <span className="  w-full h-1 bg-[#7cfc00] rounded-sm"></span>
      </div>

      <div className=" bg-[#554e4ef0] flex flex-col justify-center items-center gap-3 py-12">
        <div className=" flex flex-col sm:flex-row gap-3 sm:gap-6">
            <Link href='mailto:dev-saiful@outlook.com' className="flex items-center justify-center gap-3 p-3 rounded border-2 border-[#7cfc00]"> <MdOutlineMarkEmailUnread /> <span>dev-saiful@outlook.com</span></Link>
            <Link href='https://wa.me/+8801611337660' target="_blank" className="flex items-center justify-center gap-3 p-3 rounded border-2 border-[#7cfc00]"> <IoCallOutline /> <span> +880 1611-337660</span></Link>
        </div>
        <div className="flex items-center justify-center gap-3 p-3 rounded border-2 border-[#7cfc00]">
            <IoLocationOutline />
            <span>Dhaka, Bangladesh.</span>
        </div>
      </div>

      <div className=" flex gap-4 items-center down ">
        <span className=" w-full h-1 bg-[#7cfc00] rounded-sm"></span>

        <div className="flex justify-center items-center gap-3">
          <Link href="#" className=" bg-[#333] rounded-full">
            <FaFacebook size={36} />
          </Link>
          <Link href="#" >
            <FaSquareXTwitter size={36} />
          </Link>
          <Link href="#" >
            <FaLinkedin size={36} />
          </Link>
          <Link href="#" className=" bg-[#333] rounded-full">
            <FaGithub size={36} />
          </Link>
        </div>

        <span className=" w-full h-1 bg-[#7cfc00] rounded-sm"></span>
      </div>
    </div>
  );
}
