import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "../components /PropertyCard";

const AllProperties = () => {
  const [property, setProperty] = useState([]);
  //   const [records, setRecods] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/properties")
      .then((res) => {
        setProperty(res.data);
        // setRecods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="pt-12">
      <h2>All properties {property.length}</h2>
      <div className="grid grid-cols-1 gap-5 px-5 m-2 md:grid-cols-3">
        {property?.map((singleProperty) => (
          <PropertyCard
            key={singleProperty._id}
            singleProperty={singleProperty}
          ></PropertyCard>
        ))}
      </div>
    </div>
  );
};

export default AllProperties;
