import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/singleProperty/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        console.log(data);
      });
  }, [id]);

  const handleAddToWishlist = () => {
    // Logic for adding to wishlist goes here
    alert(`${property?.title} has been added to your wishlist!`);
  };

  return (
    <>
      <title>Property title: {property?.title}</title>
      {property && (
        <div className="max-w-screen-lg pt-6 mx-auto">
          {/* Header */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="w-full md:h-[60vh] overflow-hidden rounded-xl mb-2">
                <img
                  className="object-cover w-full"
                  src={property?.property_image}
                  alt="header image"
                />
              </div>
              <h1 className="text-2xl font-bold">Property title:{property?.property_title}</h1>
              <p className="font-bold text-gray-600"> property location: {property?.property_location}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 mt-6 md:grid-cols-7 md:gap-10">
            {/* Property Info */}
            <div className="flex flex-col col-span-4 gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-2 text-xl font-semibold">
                  <div>Agent: {property?.agent_name}</div>
                  <img
                    className="rounded-full"
                    height="30"
                    width="30"
                    alt="Avatar"
                    src={property?.agent_image}
                  />
                </div>
                <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
                  Price range: {property.price_range}
                </div>
              </div>

              <hr />
              <div className="text-lg font-light text-neutral-500">
               description: {property?.description}
              </div>
              <hr />

              {/* Add to Wishlist Button */}
              <button
                className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={handleAddToWishlist}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
