import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

// import { categories } from '../Categories/categoriesData'
const UpdateRoomForm = ({ property }) => {
  console.log(property.property_image);
  // console.log(property);
  const { user } = useContext(AuthContext);
  // Local state to manage the item
//   const [updatedItem, setUpdatedItem] = useState(property);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const property_title = form.title.value;
    const property_location = form.location.value;
    const property_image = form.image.value;
    const price_range = form.price.value;
    const agent_email = form.email.value;
    const agent_name = form.name.value;

    const updatedProperty = {
      property_title,
      property_location,
      property_image,
      price_range,
      agent_email,
      agent_name,
      user,
    };
    fetch(`http://localhost:5000/properties/${property._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProperty),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0 || data.acknowledged) {
          Swal.fire({
            title: "Success",
            text: "Craft updated successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error updating property:", error);
        // Handle error, for example, display an error message
      });
  };
  return (
    <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <form onSubmit={handleUpdate} className="w-full p-10">
        {/* <div className="w-full"> */}
        <div className="w-full space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="title" className="block text-gray-600">
              Title
            </label>
            <input
              className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
              name="title"
              id="title"
              type="text"
              placeholder="Title"
              required
              defaultValue={property?.property_title}
            />
          </div>
          <div className="space-y-6">
            <div className="w-full space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                required
                defaultValue={property?.property_location}
              />
            </div>
            <div className="w-full space-y-1 text-sm">
              <label htmlFor="image" className="block text-gray-600">
                Image URL
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                name="image"
                id="image"
                type="text"
                required
                defaultValue={property?.property_image}
              />
            </div>

            {/* <div className="flex justify-between gap-2"> */}
            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Price Range
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                name="price"
                id="price"
                type="text"
                placeholder="Price"
                defaultValue={property?.price_range}
                required
              />
            </div>
            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label htmlFor="price" className="block text-gray-600">
                  Agent Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                  name="name"
                  id="agent-name"
                  type="text"
                  value={user?.displayName}
                  readOnly
                />
              </div>
              <div className="w-full">
                <label htmlFor="price" className="block text-gray-600">
                  Agent email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                  name="email"
                  id="agent-email"
                  type="text"
                  value={user?.email}
                  readOnly
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-3 mt-5 font-medium text-center text-white transition duration-200 bg-purple-500 rounded shadow-md"
        >
          Update Property
        </button>
      </form>
    </div>
  );
};

export default UpdateRoomForm;


