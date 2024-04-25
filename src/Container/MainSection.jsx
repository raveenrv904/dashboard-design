import { BsBackpack2 } from "react-icons/bs";

import { IoPeople } from "react-icons/io5";
import { TbNotebook } from "react-icons/tb";
import { CiMoneyBill } from "react-icons/ci";
import { PiHoodieThin } from "react-icons/pi";

// Components
import { Filter } from "../Components";

// Container
import { CardSection, TableSection } from "./";

const cardDatas = [
  {
    title: "Consultant Count",
    count1: 90,
    count2: 900,
    icon: IoPeople,
    color: "bg-[#fef9c3]",
    bColor: "border-[#fef9c3]",
  },
  {
    title: "Consultations",
    count1: 11,
    count2: 25,
    icon: TbNotebook,
    color: "bg-[#ede9fe]",
    bColor: "border-[#ede9fe]",
  },
  {
    title: "Labs",
    count1: 25,
    count2: "560",
    icon: CiMoneyBill,
    color: "bg-[#dcfce7]",
    bColor: "border-[#dcfce7]",
  },
  {
    title: "DietPlans",
    count1: 25,
    count2: 250,
    icon: PiHoodieThin,
    color: "bg-[#fae8ff]",
    bColor: "border-[#fae8ff]",
  },
];

const MainSection = () => {
  return (
    <div className=" bg-slate-100  p-2 pl-4">
      <div className="bg-white rounded-xl">
        <div className="flex text-lg gap-2 items-center border-emerald-700 border-b-2 w-36 ml-2 text-emerald-700 p-2 ">
          <BsBackpack2 size={20} />
          <p className="">Consultants</p>
        </div>
      </div>
      <Filter />
      <div className="grid grid-cols-4 gap-5 my-4">
        {cardDatas.map((datas, index) => {
          return (
            <CardSection
              title={datas.title}
              key={index}
              count1={datas.count1}
              count2={datas.count2}
              color={datas.color}
              icon={datas.icon}
              bColor={datas.bColor}
            />
          );
        })}
      </div>
      <TableSection />
    </div>
  );
};

export default MainSection;
