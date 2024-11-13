import { useEffect, useState } from "react";
import AddvCard from "./AddvCard";

const Addv = () => {
    const [addv, setAddv]=useState([])
    useEffect(()=>{
      fetch('http://localhost:5000/advertiesment')
      .then(res=>res.json())
      .then(data=>{
        setAddv(data);
      })
    },[])
    return (
        <div>
        <div className="m-10 space-y-5 text-center p-15 ">
          <h2 className="text-5xl font-extrabold text-purple-500 font-poppins">
          Advertisement section
          </h2>
          <p>Here you can see our top and new collections</p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-5 md:grid-cols-3">
         {
         addv?.map(add=><AddvCard key={add._id} add={add}></AddvCard>)
         }
        </div>
      </div>
    );
};

export default Addv;