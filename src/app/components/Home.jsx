import Image from "next/image";
import Link from "next/link";
import saiful from "../../../public/saiful-Photoroom.png";
import {
  FaFacebook,
  FaSquareXTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export default function Home() {
  return (
    <div className="sm:height max-w-screen-2xl mx-auto px-6 md:px-12 flex sm:flex-row flex-col justify-center items-center mt-24 z-0">
      <div className=" w-full pt-16 pb-6 sm:py-5 sm:w-1/2 flex flex-col gap-3 sm:gap-5 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl ">
          I'm{" "}
          <span className="mohona text-[#7cfc00] text-3xl sm:text-4xl md:text-6xl">
            Saiful Islam
          </span>
        </h1>
        <p className=" text-xl sm:text-2xl md:text-3xl">
          JavaScript Developer & Backend Developer.
        </p>
        <Link
          href="#"
          className=" w-fit px-5 py-3 text-[#7CFC00] border-4	border-[#7CFC00]  rounded-lg"
        >
          Contact Me
        </Link>
      </div>
      <div className="w-full relative sm:w-1/2">
        <Image src={saiful} className="height object-cover"></Image>
        <div className=" absolute bottom-14 right-0 flex flex-col justify-center items-center gap-3">
        {" "}
        <span className=" inline-block h-16 w-1 bg-[#7cfc00] rounded"></span>
        <Link href="#">
          <FaFacebook size={24} />{" "}
        </Link>
        <Link href="#">
          <FaSquareXTwitter size={24} />{" "}
        </Link>
        <Link href="#">
          <FaLinkedin size={24} />{" "}
        </Link>
        <Link href="#">
          <FaGithub size={24} />{" "}
        </Link>
      </div>
      </div>

    </div>
  );
}
