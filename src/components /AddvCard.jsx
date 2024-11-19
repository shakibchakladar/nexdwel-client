// import { Link } from "react-router-dom";

const AddvCard = ({add}) => {
    // console.log(add);
    const {image,location,priceRange,verificationStatus}=add;
  return (
    <div className="shadow-xl card bg-slate-300 w-90 hover:scale-[1.05] transition-transform duration-300 delay-150 rounded-lg hover:shadow-2x">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Location: {location}</h2>
    <p>price range: {priceRange}</p>
    <p>{verificationStatus}</p>
    <div className="justify-end card-actions">
      {/* <button className="btn btn-primary">Details</button> */}
    </div>
  </div>
</div>
  );
};

export default AddvCard;
