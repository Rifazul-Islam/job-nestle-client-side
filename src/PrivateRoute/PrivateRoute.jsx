import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Shared/Loader/Loader";

const PrivateRoute = ({children}) => {
 const {user,loading} = useAuth();
 const location = useLocation();

 if(loading){
    return <div className=" ml-[600px] my-28  text-green-600"> <Loader/> </div>
 }

 if(user){
  return children ;
 }

 return <Navigate state={location?.pathname} to="/login"  />


};

export default PrivateRoute;
