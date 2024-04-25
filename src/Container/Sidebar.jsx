// Dashboard Icons
import { CgProfile } from "react-icons/cg";
import { FiDatabase } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { BsShop } from "react-icons/bs";

// Process Icons
import { GrNotes } from "react-icons/gr";
import { RiContactsBook3Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { GrCurrency } from "react-icons/gr";
// Container
import { SidebarCard } from "./";

const dashboardDatas = [
  {
    name: "Patients",
    icon: CgProfile,
    position: "top",
  },
  {
    name: "HR",
    icon: FiDatabase,
    position: "none",
  },
  {
    name: "Labs",
    icon: CiFilter,
    position: "none",
  },
  {
    name: "Pharma",
    icon: BsShop,
    position: "bottom",
  },
];

const processesDatas = [
  {
    name: "Registration",
    icon: GrNotes,
    position: "top",
  },
  {
    name: "Consultation",
    icon: RiContactsBook3Line,
    position: "none",
  },
  {
    name: "Tests & Reports",
    icon: HiOutlinePencil,
    position: "none",
  },
  {
    name: "Billing",
    icon: GrCurrency,
    position: "bottom",
  },
];

const Sidebar = () => {
  return (
    <div className=" h-[90vh] p-3 ">
      <div className="mb-4">
        <h2 className="font-semibold text-sm mb-3 text-gray-400">Dashboards</h2>
        {dashboardDatas.map((data, index) => {
          return (
            <SidebarCard
              key={index}
              name={data.name}
              position={data.position}
              icon={data.icon}
            />
          );
        })}
      </div>
      <div className="mb-4">
        <h2 className="font-semibold text-sm mb-3 text-gray-400">Processes</h2>
        {processesDatas.map((data, index) => {
          return (
            <SidebarCard
              key={index}
              name={data.name}
              position={data.position}
              icon={data.icon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
