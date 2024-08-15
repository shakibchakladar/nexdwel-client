//
import { useContext, useEffect, useState } from "react";
// import { AuthContext } from '../provider/AuthProvider';
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [property, setProperty] = useState({});
  // const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/singleProperty/${id}`)
      // fetch(`http://localhost:5000/propertyDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProperty(data);
        console.log(property);
      });
  }, [id]);

  return (
    <div className="p-12">
      <div className="max-w-2xl p-10 mt-5 overflow-hidden bg-white rounded-lg shadow-md pt-36 dark:bg-gray-800">
        <img
          className="object-cover w-full h-64"
          src={property?.property_image}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {property?.property_title}
            </span>
            <a
              href="#"
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              <div className="flex justify-between gap-5">
                <p>Location : {property?.property_location}</p>
                <p>price:{property?.price_range}</p>
              </div>
              <p>Verification status: {property?.verification_status}</p>
              {/* <h2>Agent</h2> */}
              {/* <hr /> */}
              <div>{/* <p>Origine: {food?.origin}</p> */}</div>
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {/* {food?.description} */}
            </p>
          </div>

          <div className="mt-4">
            <h2 className="text-2xl text-white">agent</h2>
            <hr />
            <div className="flex items-center">
              <div className="flex items-center">
                {/* <p className="text-white">made by: </p> <br /> */}
                <img
                  className="object-cover h-10 rounded-full"
                  src={user?.photoURL}
                  alt="Avatar"
                />
                <a
                  href="#"
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {user?.displayName ||'no name'}
                </a>
              </div>
              {/* <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                21 SEP 2023
              </span> */}
            </div>
          </div>
        </div>
        {/* <Link to={`/checkout/${food?._id}`}> <button className="ml-[520px] p-2 m-5 btn bg-[#ae461d] border-none text-fuchsia-100">Wishlist</button></Link> */}
        <Link> <button className="ml-[520px] p-2 m-5 btn bg-[#ae461d] border-none text-fuchsia-100">Wishlist</button></Link>
      </div>
      <div>
        <h2 className="text-5xl text-center text-orange-400">Reviews</h2>
      </div>
    </div>
  );
};

export default Details;
