import axios from "axios";
import BookingDataRow from "../../../components /BookingDataRow";
import { useState, useEffect } from "react";
const PropertyBought = () => {
  const [loading, setLoading] = useState(true);
  const [property, setProperty] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/all-offered")
      .then((response) => {
        setProperty(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch properties.");
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2 className="text-red-500">{error}</h2>
      ) : (
        <h2>Property Bought: {property.length}</h2>
      )}
      <div>
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Location
              </th>
              <th
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                Offered Price
              </th>
            </tr>
          </thead>
          <tbody>
            {property.map((p) => (
              <BookingDataRow key={p._id} p={p} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyBought;
