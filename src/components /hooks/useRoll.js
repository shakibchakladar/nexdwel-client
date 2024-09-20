// import { useContext } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const useRoll = () => {
//   const { user,loading } = useContext(AuthContext);
// //   const [role, setRole] = useState();

//   const {data:role ,isLoading}=useQuery({
//     queryKey:['role',user?.email],
//     enabled:!loading &&user?.email,
//     queryFn:async ()=>{
//         const {data}= await axios(`http://localhost:5000/user/{user?.email}`)
//         return data.role;
//     }
//   })
// //   fetch user info using logged in user email
//   return [role,isLoading];
// };

// export default useRoll;


import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../provider/AuthProvider";

const useRoll = () => {
  const { user, loading: authLoading } = useContext(AuthContext); // Get user and loading from AuthContext
  const [role, setRole] = useState(null); // State to store the role
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    // Fetch user role only if auth is not loading and user is available
    if (!authLoading && user?.email) {
      const fetchUserRole = async () => {
        try {
          const { data } = await axios.get(`http://localhost:5000/user/${user.email}`);
          setRole(data.role); // Set the role from the response
        } catch (error) {
          console.error("Failed to fetch user role:", error);
        } finally {
          setLoading(false); // Set loading to false after fetching
        }
      };

      fetchUserRole();
    } else {
      setLoading(false); // No user, so stop loading
    }
  }, [user, authLoading]);

  // Return role and loading status
  return [role, loading];
};

export default useRoll;
