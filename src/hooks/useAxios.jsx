import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const axiosSecure = axios.create({
    baseURL: 'https://job-nestle-server-side.vercel.app',
    withCredentials: true
    
  });

const useAxios = () => {
 const {userLogOut} = useAuth(); 
 const navigate = useNavigate()  
 useEffect( ()=>{
    axiosSecure.interceptors.response.use(function (response) {
    
        return response;
      }, function (error) {
        if(error.response.status  === 401  || error.response.status  === 403 ){
            userLogOut() 
            .then(()=>{
                return navigate("/login")
            })
          
        }
      
      }); 
    
    },[navigate,userLogOut])

    
    return axiosSecure
};

export default useAxios;