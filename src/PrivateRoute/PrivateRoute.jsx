import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
 const {user,loading} = useAuth();
 const location = useLocation();

 if(loading){
    return <div> <p className="text-3xl"> Loading ...</p></div>
 }

 if(user){
  return children ;
 }

 return <Navigate state={location?.pathname} to="/login"  />


};

export default PrivateRoute;