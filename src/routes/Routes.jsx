import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import All_jobs from "../Pages/All_jobs/All_jobs";
import Applied_jobs from "../Pages/Applied_jobs/Applied_jobs";
import Add_A_Job from "../Pages/Add_A_Job/Add_A_Job";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Details from "../components/Details/Details";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
 {
    path:"/",
    element: <MainLayout></MainLayout>,
    children: [
     {
        path:"/",
        element: <Home></Home>
     },
     {
      path: "/all_Jobs",
      element: <All_jobs></All_jobs>
     },
     {
      path:"/applied_jobs",
      element: <Applied_jobs></Applied_jobs>
     },
     {
      path:"/add_A_Job",
      element: <Add_A_Job></Add_A_Job>
     },
     {
      path:"/myJobs",
      element: <MyJobs></MyJobs>
     },
     {
      path:"/blog",
      element: <Blog></Blog>
     },
     {
      path: "/register",
      element: <Register></Register>
     },
     {
      path: "/login",
      element: <Login></Login>
     },
     {
       path:"/details/:id",
       element: <PrivateRoute><Details></Details></PrivateRoute>,
       loader:({params})=>fetch(`http://localhost:5000/api/v1/jobs/${params.id}`)
     }
  
    ]
 }
])

export default router ;