import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";
import { IoMdAdd } from "react-icons/io";

import { IoNotifications } from "react-icons/io5";

import Profile from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="w-ful bg-cyan-950 py-3 flex justify-between items-center">
      <div className=""></div>
      <div className="flex justify-center items-center gap-3">
        <div className="bg-white max-w-full ml-7 gap-3 flex justify-center items-center  rounded-full  ">
          <div className="flex justify-center items-center text-lg cursor-pointer font-medium py-2 px-3  rounded-l-full bg-slate-300">
            <p>Patients</p>
            <RiArrowDropDownLine size={30} />
          </div>
          <div className="mr-[50px]">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none text-gray-500 font-normal space-x-10"
            />
          </div>
          <div className="flex justify-center items-center mr-2 cursor-pointer">
            <IoIosSearch size={30} color="#777" />
          </div>
        </div>
        <div className="flex justify-center gap-1 items-center cursor-pointer bg-emerald-700 px-4 py-3 rounded-full text-white font-medium">
          <IoMdAdd size={23} />
          <p>Add New</p>
        </div>
      </div>
      <div className="flex gap-5 pr-10">
        <div className="rounded-full bg-slate-400 w-[40px] h-[40px] flex justify-center items-center p-1 cursor-pointer hover:bg-slate-200 transition-all duration-300">
          <IoNotifications size={30} className="" />
        </div>
        <div className="rounded-full bg-slate-400 w-[40px] h-[40px]  cursor-pointer transition-all duration-200 hover:p-1">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
