import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from ".//MenuItem";
import useRoll from "../../hooks/useRoll";

const GuestMenu = () => {
  const [role] = useRoll();
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />

      {role === "user" && (
        <div className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform cursor-pointer hover:bg-gray-300 hover:text-gray-700">
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
    </>
  );
};

export default GuestMenu;
