// import { Link } from "react-router-dom";

const AddvCard = ({add}) => {
    console.log(add);
    const {image,location,priceRange,verificationStatus}=add;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Location: {location}</h2>
    <p>price range: {priceRange}</p>
    <p>{verificationStatus}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
  );
};

export default AddvCard;
