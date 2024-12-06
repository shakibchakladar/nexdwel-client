import axios from "axios";
import BookingDataRow from "../../../components /BookingDataRow";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

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

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/offered/${id}`)
      .then(() => {
        setProperty((prevProperty) =>
          prevProperty.filter((property) => property._id !== id)
        );
        toast.success('Property successfully removed!');
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
        toast.error('Failed to remove the property. Please try again.');
      });
  };

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
              <th
                scope="col"
                className="py-3 mr-10 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 "
              >
               Status
              </th>
              <th
                scope="col"
                className="py-3 mr-10 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200 "
              >
               pay
              </th>
            </tr>
          </thead>
          <tbody>
            {property.map((p) => (
              <BookingDataRow key={p._id} p={p} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropertyBought;
