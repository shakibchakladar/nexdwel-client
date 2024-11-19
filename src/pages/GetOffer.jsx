import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
const GetOffer = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const { user } = useContext(AuthContext);

  console.log(property);

  useEffect(() => {
    fetch(`http://localhost:5000/offer/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, []);

  return (
    <div>
      <h2 className="pt-5 text-2xl font-bold text-center">Get Offer For Property</h2>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form className="w-full p-10">
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
                value={property.property_title}
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
                  value={property.property_location}
                  readOnly
                />
              </div>

              <div className="flex justify-between gap-2">
                <div className="w-full">
                  <label htmlFor="price" className="block text-gray-600">
                    Agent Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                    name="Agent Name"
                    id="agent-name"
                    type="text"
                    value={property?.agent_name}
                    readOnly
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="price" className="block text-gray-600">
                    Agent email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                    name="Agent Name"
                    id="agent-name"
                    type="text"
                    value={property?.agent_emai}
                    readOnly
                  />
                </div>
              </div>

              {/* <div className="flex justify-between gap-2"> */}
              <div className="space-y-1 text-sm">
                <label htmlFor="price" className="block text-gray-600">
                  offered price
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                  name="price"
                  id="price"
                  type="text"
                  placeholder=" Offered Price"
                  //   value={property?.price_range}
                  required
                />
              </div>

              <div className="flex justify-between gap-2">
                <div className="w-full">
                  <label htmlFor="price" className="block text-gray-600">
                    Buyer Name
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                    name="Buyer Name"
                    id="agent-name"
                    type="text"
                    value={user?.displayName}
                    readOnly
                  />
                </div>
                <div className="w-full">
                  <label htmlFor="price" className="block text-gray-600">
                    Buyer email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500 "
                    name="Buyer Name"
                    id="buyer-name"
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
            Offer
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetOffer;
