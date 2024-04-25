import { Navbar } from "../Components";

import { Sidebar, MainSection } from "../Container";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <MainSection />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
