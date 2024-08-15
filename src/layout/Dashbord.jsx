import { Outlet } from "react-router-dom";
import Sidebar from "../components /Dashboard/Sidebar/Sidebar";

const Dashbord = () => {
  return (
    <div className="relative min-h-screen md:flex">
      {/* sidebar */}
      <Sidebar></Sidebar>
      <div>sidebar</div>
      {/* outlet */}
      <div className="flex-1 md:ml-64">
        <div className="p5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
