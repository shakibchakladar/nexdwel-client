import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Registration from "../components /Registration";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AllProperties from "../pages/AllProperties";
import Details from "../components /Details";
import Dashbord from "../layout/Dashbord";
import Staticks from "../pages/dashbord/common/Staticks";
import MyAdded from "../pages/dashbord/agent/MyAdded";
import AddProperty from "../pages/dashbord/agent/addProperty/AddProperty";
import Profile from "../components /Dashboard/common/Profile";
import ManageUsers from "../pages/dashbord/admin/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/allproperty",
        element: (
          <PrivateRoute>
            <AllProperties></AllProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashbord",
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Staticks></Staticks>
          </PrivateRoute>
        ),
      },
      {
        path: "add-property",
        element: (
          <PrivateRoute>
            <AddProperty></AddProperty>
          </PrivateRoute>
        ),
      },
      {
        path: "my-added",
        element: (
          <PrivateRoute>
            <MyAdded></MyAdded>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers></ManageUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
