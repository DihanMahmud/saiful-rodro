"use client";
import { useState } from "react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const sidenav = () => setIsMenuOpen(false)

  return (
    <div className="w-full fixed top-0 bg-[#333] z-50">
      <div className="max-w-screen-2xl mx-auto h-24 flex justify-between items-center px-6 md:px-12">
        <h1 className="text-4xl font-semibold"><Link href='/'>Saiful Islam</Link></h1>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? (
              <MdOutlineCancel className=" relative z-20 text-3xl" />
            ) : (
              <CiMenuFries className=" text-3xl" />
            )}
          </button>
        </div>
        <div
          className={`flex flex-col gap-3 font-medium md:flex-row md:flex md:gap-5  ${
            isMenuOpen
              ? " absolute top-0 w-2/3 h-screen bg-[#111111c0] right-0 flex flex-col items-center justify-center text-xl backdrop-blur-lg"
              : "hidden"
          }`}
        >
          <Link onClick={sidenav} href="#about">
            <span className="hover:text-gray-400 w-fit">About</span>
          </Link>
          <Link onClick={sidenav} href="#portfolio">
            <span className="hover:text-gray-400 w-fit">Portfolio</span>
          </Link>
          <Link onClick={sidenav} href="#contact">
            <span className="hover:text-gray-400 w-fit">Contact</span>
          </Link>
          <Link onClick={sidenav} href="#" className=" md:hidden block w-fit hover:text-gray-400">
            Scheduale
          </Link>
        </div>
        <span className="w-fit hidden md:block px-4 py-2 rounded-md text-[#333] font-medium text-lg bg-[#7cfc00]">
          Scheduale
        </span>
      </div>
    </div>
  );
}
