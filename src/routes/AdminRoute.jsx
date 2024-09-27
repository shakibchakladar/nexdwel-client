import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useRoll from "../components /hooks/useRoll";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRoll();
  if (isLoading) return <h2>Loading...</h2>;
  if (role === "admin") return children;
  return <Navigate to="/dashbord" />;
};

AdminRoute.propTypes = {
  children: PropTypes.element, // Correctly use PropTypes with capital 'P'
};
export default AdminRoute;
