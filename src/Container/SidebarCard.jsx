// eslint-disable-next-line react/prop-types
const CardSection = ({ name, icon: IconComponent, position }) => {
  return (
    <div
      className={`flex px-7 py-3 mb-2 shadow-md gap-1  hover:text-white flex-col justify-center items-center hover:bg-emerald-800 transition-all duration-200 hover:shadow-xl cursor-pointer ${
        position === "top"
          ? "rounded-t-lg"
          : position === "bottom"
          ? "rounded-b-lg"
          : ""
      } ${
        name === "HR" ? "bg-emerald-800 text-white" : "text-[#777] bg-slate-100"
      }`}
    >
      <IconComponent size={35} />
      <p className="font-semibold text-sm ">{name}</p>
    </div>
  );
};

export default CardSection;
