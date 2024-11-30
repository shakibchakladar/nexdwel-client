/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components /form/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const GetOffer = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const { user } = useContext(AuthContext);
  

  // Fetch property data
  useEffect(() => {
    fetch(`http://localhost:5000/offer/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form data
    const offeredPrice = e.target.price.value;
    const propertyLocation = e.target.location.value;
    const propertyTitle = e.target.title.value;
    const propertyImage = property.property_image;
    const agentName = e.target.agentname.value;
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;

    const bookingData = {
      offeredPrice,
      propertyLocation,
      propertyTitle,
      propertyImage,
      agentName,
      buyerName,
      buyerEmail,
    };
    console.log(bookingData);
  };

  return (
    <div>
      <h2 className="pt-5 text-2xl font-bold text-center">
        Get Offer For Property
        <Elements stripe={stripePromise}>
          <CheckoutForm/>
        </Elements>
      </h2>
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form onSubmit={handleSubmit} className="w-full p-10">
          <div className="w-full space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="title" className="block text-gray-600">
                Title
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                value={property.property_title || ""}
                readOnly
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="location" className="block text-gray-600">
                Location
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                name="location"
                id="location"
                type="text"
                placeholder="Location"
                value={property.property_location || ""}
                readOnly
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label htmlFor="agentname" className="block text-gray-600">
                  Agent Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                  name="agentname"
                  id="agent-name"
                  type="text"
                  value={property.agent_name || ""}
                  readOnly
                />
              </div>
              <div className="w-full">
                <label htmlFor="agentemail" className="block text-gray-600">
                  Agent Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                  name="agentemail"
                  id="agent-email"
                  type="text"
                  value={property.agent_email ||"shakibchakladar@gmail.com"}
                  readOnly
                />
              </div>
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="price" className="block text-gray-600">
                Offered Price
              </label>
              <input
                className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                name="price"
                id="price"
                type="number"
                placeholder="Enter your offer"
                required
              />
            </div>

            <div className="flex justify-between gap-2">
              <div className="w-full">
                <label htmlFor="buyername" className="block text-gray-600">
                  Buyer Name
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                  name="buyername"
                  id="buyer-name"
                  type="text"
                  value={user?.displayName || ""}
                  readOnly
                />
              </div>
              <div className="w-full">
                <label htmlFor="buyeremail" className="block text-gray-600">
                  Buyer Email
                </label>
                <input
                  className="w-full px-4 py-3 text-gray-800 border rounded-md border-rose-300 focus:outline-rose-500"
                  name="buyeremail"
                  id="buyer-email"
                  type="text"
                  value={user?.email || ""}
                  readOnly
                />
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
