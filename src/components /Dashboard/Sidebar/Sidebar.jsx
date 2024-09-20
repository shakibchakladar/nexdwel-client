import { useContext, useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFingerprint, BsGraphUp, BsFillHouseAddFill } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { MdHomeWork } from "react-icons/md";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import useRoll from "../../hooks/useRoll";
import MenuItem from "../menu/MenuItem";

const Sidebar = () => {
  const { logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const [role] = useRoll();
  console.log(role);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="flex justify-between text-gray-800 bg-gray-100 md:hidden">
        <div>
          <div className="block p-4 font-bold cursor-pointer">
            <Link to="/">
              <img
                // className='hidden md:block'
                src="https://i.ibb.co/4ZXzmq5/logo.png"
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 mobile-menu-button focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="w-5 h-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="items-center justify-center hidden w-full px-4 py-2 mx-auto rounded-lg shadow-lg md:flex bg-rose-100">
              <Link to="/">
                {/* <img
                  // className='hidden md:block'
                  src="https://i.ibb.co/4ZXzmq5/logo.png"
                  alt="logo"
                  width="100"
                  height="100"
                /> */}
                NextDwell
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <MenuItem
                label="Statistics"
                address="/dashbord"
                icon={BsGraphUp}
              />

              {/* Profile Menu */}
              {/* <MenuItem
                label="Profile"
                address="/dashboard/profile"
                icon={FcSettings}
              /> */}
              {/* Add Room */}
              <MenuItem
                label="Add Property"
                address="add-property"
                icon={BsFillHouseAddFill}
              />

              {/* My Listing */}
              <MenuItem
                label="My Addded properties"
                address="my-added"
                icon={MdHomeWork}
              />
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            label="Profile"
            address="profile"
            icon={FcSettings}
          />
          <button
            onClick={logOut}
            className="flex items-center w-full px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform hover:bg-gray-300 hover:text-gray-700"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;