import axios from "axios";
import { useState } from "react";
import BookingDataRow from "../../../components /BookingDataRow";

const PropertyBought = () => {
    const [loading,setLoading]=useState(true)
    const [property,setProperty]=useState([])
    axios.get("http://localhost:5000/all-offered")
    .then(data=>{
        setProperty(data.data);
        setLoading(false)
    })
    return (
        <div>
           {loading? <h2>loading...</h2>:<h2>Property bought {property.length} </h2> }
           <div>
           <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                   
                    <th
                      scope='col'
                      className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                    >
                      Location
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200'
                    >
                     Offered Price
                    </th>
                
                  
                   
                   
                  </tr>
                </thead>
                <tbody>
                    {/* <BookingDataRow property={property}/> */}
                    {
                        property.map(p=><BookingDataRow key={p._id} p={p}/>)
                    }
                </tbody>
              </table>
           </div>
        </div>
    );
};

export default PropertyBought;