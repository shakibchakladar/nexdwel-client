import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useState } from "react";
import DeleteModal from "./Modal/DeleteModal";
import UpdateRoomModal from "./Modal/UpdateRoomModal";

const RoomDataRow = ({ property, handleDelete}) => {
  // Separate state for each modal
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
  };

  const openUpdateModal = () => {
    setIsUpdateOpen(true);
  };

  const closeUpdateModal = () => {
    setIsUpdateOpen(false);
  };

  return (
    <tr>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative block">
              <img
                alt="profile"
                src={property?.property_image}
                className="object-cover h-10 mx-auto rounded w-15 "
              />
            </div>
          </div>
          <div className="ml-3">
            <p className="text-gray-900 whitespace-no-wrap">
              {property?.property_title}
            </p>
          </div>
        </div>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
          {property?.property_location}
        </p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
          ${property?.price_range}
        </p>
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button
          onClick={() => setIsDeleteOpen(true)}
          aria-label="Delete property"
          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-red-200 rounded-full opacity-50"
          ></span>
          <span className="relative">Delete</span>
        </button>
        {/* Delete modal */}
        <DeleteModal
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModal}
          handleDelete={handleDelete}
          id={property?._id} // Ensure using `_id` for consistency
        />
      </td>
      <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <button
          onClick={openUpdateModal}
          aria-label="Update property"
          className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900 cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-green-200 rounded-full opacity-50"
          ></span>
          <span className="relative">Update</span>
        </button>
        {/* Update Modal */}
        <UpdateRoomModal
          isOpen={isUpdateOpen}
          closeUpdateModal={closeUpdateModal}
          property={property}
        />
      </td>
    </tr>
  );
};

RoomDataRow.propTypes = {
  property: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func,
};

export default RoomDataRow;
