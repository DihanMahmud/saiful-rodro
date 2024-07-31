import Image from "next/image";

export default function Icon() {
  return (
    <div className="hover:bg-[#7c7c7c] flex flex-col justify-center items-center p-5 gap-2 h-auto w-fit rounded-md bg-[#585757]">
        
        <Image src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height='50' width='50' />
          
        <h3>JavaScript</h3>
    </div>
  )
}
