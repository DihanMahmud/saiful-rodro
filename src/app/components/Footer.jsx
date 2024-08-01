import Link from "next/link";

export default function Footer() {
  return (
    <div className=" max-w-screen-2xl mx-auto px-2 md:px-12 flex justify-between py-7">
      <p className=" mt-5 text-xs text-[#d1d1d1]">
        &copy; {new Date().getFullYear()} Saiful Islam. All rights reserved.
      </p>
      <p className=" mt-5 text-xs text-[#d1d1d1]">Designed by <Link className=" underline" target="_blank" href='https://www.dihanmahmud.me/'> Dihan Mahmud.</Link></p>
    </div>
  );
}
