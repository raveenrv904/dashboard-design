import { IoReloadSharp } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";

import { Table } from "../Components";

const TableSection = () => {
  return (
    <div className=" px-10 bg-white py-7 rounded-xl">
      <div className="flex justify-between items-center">
        <div className="">
          <h2 className="text-2xl font-bold text-gray-500">Consultants</h2>
        </div>
        <div className="flex gap-5">
          <div className="border p-2 rounded-full border-gray-300 cursor-pointer hover:bg-slate-100  transition-all duration-200">
            <IoReloadSharp size={25} />
          </div>
          <div className="border p-2 rounded-full border-gray-300 cursor-pointer hover:bg-slate-100 transition-all duration-200">
            <GoArrowDown size={25} />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <Table />
      </div>
    </div>
  );
};

export default TableSection;
