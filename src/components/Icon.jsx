
const Icon = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center bg-[#f8f8f8] p-5 rounded-lg">
      <img src={icon} alt={name} className="h-12 w-12 bg-center bg-cover object-contain" />
      <span className="text-center text-[#222] mt-2">{name}</span>
    </div>
  );
};

export default Icon;

