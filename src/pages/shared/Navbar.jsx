import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { NavLink } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
    toast.success("Logged out successfully");
  };

  return (
    <div className="navbar shadow-sm container px-4 mx-auto  bg-black text-white fixed z-10 bg-opacity-30">
      <div className="flex-1">
        <div className="flex gap-2 items-center">
          <img className="w-auto h-7" src="" alt="" />
          <span className="font-bold">NextDwell</span>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">
              <div>Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/allproperty">
              <div>All properties</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">
              <div>Dashboard</div>
            </NavLink>
          </li>

          {!user && (
            <li>
              <NavLink to="/login">
                <div>Login</div>
              </NavLink>
            </li>
          )}
        </ul>

        {user && (
          <div className="dropdown dropdown-end z-50">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile Photo"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
            >
              <li>
                <div className="justify-between">Add Job</div>
              </li>
              <li>
                <div>My Posted Jobs</div>
              </li>
              <li>
                <div>My Bids</div>
              </li>
              <li>
                <div>Bid Requests</div>
              </li>
              <li className="mt-2">
                <button
                  onClick={handleLogOut}
                  className=" bg-black block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
