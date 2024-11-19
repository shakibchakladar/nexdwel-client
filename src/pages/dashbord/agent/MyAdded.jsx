import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import RoomDataRow from "../../../components /RoomDataRow";
import toast from "react-hot-toast";
// import { Helmet } from "react-helmet-async";

const MyAdded = () => {
  const { user } = useContext(AuthContext);
  const [MyAdded, setMyAdded] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/my-added/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyAdded(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [user?.email]);

  // Handle delete
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/properties/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMyAdded((prevMyAdded) =>
          prevMyAdded.filter((property) => property._id !== id)
        );
        toast.success('Property successfully deleted!');
      })
      .catch((error) => {
        console.error("Error deleting property:", error);
      });
  };

  // handle upadate
  // const handleUpdate=(id)=>{
  //   console.log('click');
  // }
  return (
    <div>
      my added:{MyAdded?.length}
      <>
        <div className="container px-4 mx-auto sm:px-8">
          <div className="py-8">
            <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
              <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Title
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
                        Price
                      </th>
                      {/*  */}
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Delete
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                      >
                        Update
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {MyAdded?.map((property) => (
                      <RoomDataRow
                        key={property?._id}
                        property={property}
                        handleDelete={handleDelete}
                      ></RoomDataRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MyAdded;
