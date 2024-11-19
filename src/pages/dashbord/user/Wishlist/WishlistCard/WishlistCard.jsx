// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaHeart, FaHandshake } from "react-icons/fa"; // Icons for the buttons
import DeleteModal from "../../../../../components /Modal/DeleteModal";
import { Link } from "react-router-dom";

const WishlistCard = ({ wishItem, handleDelete }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
  };

  return (
    <div className="flex items-center p-4 mb-4 transition-shadow duration-150 bg-white border rounded-lg shadow-sm hover:shadow-md">
      {/* Property Image */}
      <img
        src={wishItem?.property_image}
        alt="Property"
        className="object-cover w-24 h-24 mr-4 rounded-md"
      />

      {/* Card Content */}
      <div className="flex flex-col flex-grow">
        {/* Property Title */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {wishItem?.property_title}
        </h3>

        {/* Location */}
        <p className="text-sm text-gray-500">{wishItem?.property_location}</p>

        {/* Price and Verification */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-gray-800">
            {wishItem?.price_range}
          </span>
          <span
            className={`text-xs font-medium rounded-full px-2 py-0.5 ${
              wishItem?.verified
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {wishItem?.verified ? "Verified" : "Unverified"}
          </span>
        </div>

        {/* Agent Info */}
        <div className="flex items-center mt-3 text-sm text-gray-600">
          <img
            src={wishItem?.agent_image}
            alt="Agent profile"
            className="object-cover w-6 h-6 mr-2 rounded-full"
          />
          <span>{wishItem?.agent_name}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col items-center ml-4 space-y-2">
        {/* Make an Offer Button */}
        <div className="flex items-center gap-2">
          <FaHandshake size={30} />
          <Link to={`/offer/${wishItem?._id}`}>
          <button className="transition-transform duration-300 btn btn-primary hover:scale-105">
            Make an offer
          </button>
        </Link>
        </div>

        {/* Remove Button */}
        <div className="flex items-center gap-2">
          <FaHeart size={30} />
          <button onClick={() => setIsDeleteOpen(true)} className="btn">
            Remove
          </button>
        </div>
        <DeleteModal
          isOpen={isDeleteOpen}
          closeModal={closeDeleteModal}
          handleDelete={handleDelete}
          id={wishItem?._id}
        />
      </div>
    </div>
  );
};

export default WishlistCard;
