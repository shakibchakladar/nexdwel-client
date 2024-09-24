// import {useEffect, useState } from "react";
// import UserDataRow from "../../../components /UserDataRow";

// const ManageUsers = () => {
// //   const { user } = useContext(AuthContext);
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     // if (user?.email) {
//       fetch(`http://localhost:5000/users`)
//         .then((res) => res.json())
//         .then((data) => {
//           setUser(data);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error);
//         });
    
//   }, []);
//   return (
//     <>
//     <h2>users:{user.length}</h2>
//       <div className="container px-4 mx-auto sm:px-8">
//         {/* <Helmet>
//           <title>Manage Users</title>
//         </Helmet> */}
//         <div className="py-8">
//           <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
//             <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
//               <table className="min-w-full leading-normal">
//                 <thead>
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
//                     >
//                       Email
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
//                     >
//                       Role
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
//                     >
//                       Status
//                     </th>

//                     <th
//                       scope="col"
//                       className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
//                     >
//                       Action
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                     {user.map(user=><UserDataRow key={user?._id} user={user}/>)}

//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ManageUsers;

import { useEffect, useState } from "react";
import UserDataRow from "../../../components /UserDataRow";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const updateUserRole = (email, updatedRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.email === email ? { ...user, ...updatedRole } : user
      )
    );
  };

  return (
    <>
      <h2>Users: {users.length}</h2>
      <div className="container px-4 mx-auto sm:px-8">
        <div className="py-8">
          <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
            <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Email
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Role
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Status
                    </th>
                    <th className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      updateUserRole={updateUserRole} // Pass the function down
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageUsers;
