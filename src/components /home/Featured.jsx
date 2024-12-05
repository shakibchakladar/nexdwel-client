import { useEffect, useState } from "react";
import SectionTitle from "../../pages/shared/SectionTitle";
import PropertyCard from "../PropertyCard";
import { Link } from "react-router-dom";

const Featured = () => {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/properties")
      .then((res) => res.json())
      .then((data) => {
       setFeatured(data.slice(0,6));
      });
  }, []);
  return (
    <div>
      <SectionTitle
        heading={"Featured Properties"}
        subHeading={
          "---Explore the Best Deals and Exclusive Listings Tailored for You---"
        }
      />
      <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
        {
            featured.map(singleProperty=><PropertyCard key={singleProperty._id} singleProperty={singleProperty}/>)
        }
      </div>
      <div className="py-2 text-center">
      <Link to="allproperty">
      <button className="btn btn-success">See More</button>
      </Link>
      </div>
    </div>
  );
};

export default Featured;
