import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState({});
  // const [reviews, setReviews] = useState([]);
  // const [showReviewModal, setShowReviewModal] = useState(false);
  // const [reviewText, setReviewText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [wishlistMessage, setWishlistMessage] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:5000/singleProperty/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id, user, navigate]);

  const handleAddToWishlist = async () => {
    setIsLoading(true);
    try {
      console.log("Sending data to backend:", {
        propertyId: property._id,
        userEmail: user?.email,
      });

      // console.table(propertyData);

      const response = await fetch("http://localhost:5000/add-wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          propertyId: property._id,
          userEmail: user?.email,
          property_title: property.property_title,
          property_location: property.property_location,
          price_range: property.price_range,
          property_image: property.property_image,
          description: property.property_discription,
          agent_name: property.agent_name,
          agent_image: property.agent_image,
          agent_emai: property.agent_email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add property to wishlist");
      }

      const data = await response.json();
      console.log("Backend response:", data);

      if (data.insertedId) {
        Swal.fire({
          title: "Success",
          text: "Property added successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
        setWishlistMessage("Property added to wishlist!");
      }
    } catch (err) {
      console.error("Error in wishlist API:", err);
      toast.error("Failed to add property. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-lg px-4 py-10 pt-20 mx-auto mt-2">
      <title>Property title: {property?.title}</title>
      {property && (
        <>
          {/* Header Section */}
          <div className="flex flex-col gap-10 md:flex-row">
            {/* Left Column - Property Image */}
            <div className="w-full md:w-1/2 lg:w-3/5">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  src={property?.property_image}
                  alt="Property"
                />
              </div>
            </div>

            {/* Right Column - Property Summary */}
            <div className="flex flex-col w-full space-y-4 md:w-1/2 lg:w-2/5">
              <h1 className="text-4xl font-bold text-gray-800">
                {property?.property_title}
              </h1>
              <p className="text-lg font-medium text-gray-600">
                <strong>Location:</strong> {property?.property_location}
              </p>
              <p className="text-2xl font-semibold text-blue-600">
                Price Range: {property?.price_range}
              </p>

              {/* Agent Info */}
              <div className="flex items-center gap-4 mt-4 text-lg font-medium text-gray-700">
                <span>Agent: {property?.agent_name}</span>
                <img
                  className="w-12 h-12 border-2 border-blue-500 rounded-full shadow-sm"
                  src={property?.agent_image}
                  alt="Agent"
                />
              </div>

              {/* Wishlist Button */}

              <button
                className={`mt-6 px-6 py-3 w-full text-lg font-semibold rounded-md transition-all duration-300 ${
                  isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
                onClick={handleAddToWishlist}
                disabled={isLoading}
              >
                {isLoading ? "Adding..." : "Add to Wishlist"}
              </button>
              {wishlistMessage && (
                <p className="mt-2 font-medium text-green-500">
                  {wishlistMessage}
                </p>
              )}
            </div>
          </div>

          {/* Tabbed Information Section */}
        </>
      )}
    </div>
  );
};

export default Details;
