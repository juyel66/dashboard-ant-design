import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import About from "../pages/About";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import AdminLayout from "../components/layout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

//   admin routes  
  {
    path: "/admin",
    element: <App />,
    // element: <AdminLayout />,
    children: [
      {
        index: true, 
        element: <AdminDashboard />,
      },
      {
        path: "dashboard", 
        element: <AdminDashboard />,
      },
      {
        path: "createStudent",
        element: <CreateStudent/>,
      },
    ],
  },


  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
