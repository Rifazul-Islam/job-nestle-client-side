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
import UpdateJobs from "../Pages/MyJobs/UpdateJobs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
 {
    path:"/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
      element: <PrivateRoute><Applied_jobs></Applied_jobs></PrivateRoute>
     },
     {
      path:"/add_A_Job",
      element: <PrivateRoute><Add_A_Job></Add_A_Job> </PrivateRoute>
     },
     {
      path:"/myJobs",
      element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
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
       loader:({params})=>fetch(`https://job-nestle-server-side.vercel.app/api/v1/jobs/${params.id}`)
     },
     {
       path:"/updateJobs/:id",
       element: <PrivateRoute><UpdateJobs></UpdateJobs></PrivateRoute>,
       loader:({params})=>fetch(`https://job-nestle-server-side.vercel.app/api/v1/jobs/${params.id}`)
     }
  
    ]
 }
])

export default router ;