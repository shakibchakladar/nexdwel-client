import { Link } from "react-router-dom";

const PropertyCard = ({ singleProperty }) => {
  // console.log(singleProperty);
  const {
    property_image,
    agent_name,
    agent_email,
    price_range,
    property_location,
    property_title,
    verification_status,
  } = singleProperty;
  // console.log(singleProperty._id);
  return (
    <div className="shadow-xl card bg-slate-300 w-90 hover:scale-[1.05] transition-transform duration-300 delay-150 rounded-lg hover:shadow-2xl">
    <figure>
      <img src={property_image} alt="Property" className="rounded-t-lg" />
    </figure>
    <div className="p-4 card-body">
      <h2 className="text-lg font-bold card-title">{property_title}</h2>
      <p className="text-sm text-gray-600">Location: {property_location}</p>
      <p className="text-sm text-gray-600">Price range: {price_range}</p>
      <p className="text-sm text-gray-600">Agent name: {agent_name}</p>
      <p className="text-sm text-gray-600">Agent email: {agent_email}</p>
      <p className="text-sm text-gray-600">Verification status: {verification_status}</p>
      <div className="justify-end mt-4 card-actions">
        <Link to={`/details/${singleProperty?._id}`}>
          <button className="transition-transform duration-300 btn btn-primary hover:scale-105">
            View details
          </button>
        </Link>
      </div>
    </div>
  </div>
  
  );
};

export default PropertyCard;
