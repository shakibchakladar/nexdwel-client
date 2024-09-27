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
    <div className="shadow-xl card bg-slate-300 w-96">
      <figure>
        <img src={property_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{property_title}</h2>
        <p>Location :{property_location}</p>
        <p>Price range:{price_range}</p>
        <p>Agent name:{agent_name}</p>
        <p>Agent email: {agent_email}</p>
        <p>Verification status: {verification_status}</p>
        <div className="justify-end card-actions">
          {/* <Link to={`/details/${food?._id}`}> */}
         <Link to={`/details/${singleProperty?._id}`}>
         <button className="btn btn-primary">View details</button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
