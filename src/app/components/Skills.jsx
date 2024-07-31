import Icon from "./Icon";

export default function Skills() {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 pt-12 md:px-12">
        <h1 className="text-center text-7xl text-[#7CFC00] pb-7">My Skills</h1>
        <div className=" flex flex-col justify-center items-center gap-6">
        <div className="flex gap-9 lg:flex-nowrap flex-wrap justify-center">
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </div>
      <div className="flex gap-7 lg:flex-nowrap flex-wrap justify-center">
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </div>

      <div className="flex gap-7 lg:flex-nowrap flex-wrap justify-center">
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </div>
 
      <div className="flex gap-7 lg:flex-nowrap flex-wrap justify-center">
        <Icon></Icon>
        <Icon></Icon>
        <Icon></Icon>
      </div>
        </div>
    </div>
  );
}
