import { LuChevronDown } from "react-icons/lu";
import { GiCircle } from "react-icons/gi";

const Filter = () => {
  return (
    <div className="bg-white mt-5 rounded-xl flex gap-10">
      <div className="relative px-5 py-3 bg-emerald-800 rounded-l-xl text-white font-semibold text-[17px] cursor-default">
        <p>Filters</p>
        <div className="w-[15px] h-[15px] rotate-45 absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[100%] bg-emerald-800"></div>
      </div>
      <div className=" flex justify-between gap-7 items-center border rounded-full my-1 px-3 cursor-pointer">
        <p>Search Range</p>
        <LuChevronDown size={20} />
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <GiCircle size={30} color="#777" />
        <p>Summary</p>
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <GiCircle size={30} color="#777" />
        <p>Branch Wise</p>
      </div>
    </div>
  );
};

export default Filter;
