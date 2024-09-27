

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
