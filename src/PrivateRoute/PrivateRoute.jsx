import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({children}) => {
 const {user,loading} = useAuth()

 if(loading){
    return <div> <p className="text-3xl"> Loading ...</p></div>
 }

 if(user){
  return children ;
 }

 return <Navigate to="/login" />


};

export default PrivateRoute;