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
    path:'/dashbord',
    element:<Dashbord></Dashbord>,
    children:[
      {
       index:true,
       element:<Staticks></Staticks>
      },
    {
      path:'add-property',
      element:<AddProperty></AddProperty>
    },
      {
       path:'my-added',
       element:<MyAdded></MyAdded>
      }
    ]
  }
]);
