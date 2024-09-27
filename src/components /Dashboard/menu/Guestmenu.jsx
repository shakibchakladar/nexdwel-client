import { BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import MenuItem from ".//MenuItem";
import useRoll from "../../hooks/useRoll";
import HostModal from "../../Modal/HostRequestModal";
import { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";

const GuestMenu = () => {
  const{user}=useContext(AuthContext)
  const [role] = useRoll();
  // for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalHandler = async () => {
    console.log("I want to be a host");
    try {
      const currentUser = {
        email: user?.email,
        role: "guest",
        status: "Requested",
      };
      const { data } = await axios.put(
        `http://localhost:5000/user`,
        currentUser
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation");
      } else {
        toast.success("Please!, Wait for admin approval👊");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      closeModal();
    }
  };
  return (
    <>
      <MenuItem
        icon={BsFingerprint}
        label="My Bookings"
        address="my-bookings"
      />

      {role === "user" && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform cursor-pointer hover:bg-gray-300 hover:text-gray-700"
        >
          <GrUserAdmin className="w-5 h-5" />

          <span className="mx-4 font-medium">Become A Host</span>
        </div>
      )}
      <HostModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        modalHandler={modalHandler}
      />
    </>
  );
};

export default GuestMenu;
