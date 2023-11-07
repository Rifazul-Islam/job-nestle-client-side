import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../config/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const gitHubProvider = new GithubAuthProvider();
const AuthProvider = ({children}) => {
 const[user,setUser] = useState(null);
 const[loading,setLoading] = useState(true);

 // create A new User 
 const createNewUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 // User Profile Update 
 const UpdateProfile = (profile , userInfo) =>{
    setLoading(true)
    return updateProfile(profile,userInfo)
 }

 // User Login 
 const userLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 // GitHub Login System
  const gitHubLoginSystem = ()=>{
    setLoading(true)
    return signInWithPopup(auth,gitHubProvider)
  }

 // user LogOut 
 const userLogOut = ()=>{
    setLoading(true)
    return signOut(auth)
 }




// on Auth State change 
useEffect( ()=>{
const unSubscribe = onAuthStateChanged(auth, currentUser =>{
   const loggedUser = currentUser?.email || user?.email ;
   const userEmail = {email : loggedUser}
    setUser(currentUser)
    setLoading(false)
 if(currentUser){
    axios.post("http://localhost:5000/api/v1/jwt",userEmail,{withCredentials : true} )
    .then(res =>{
      console.log(res.data);
      toast.success("Token Create Successfully")
    })
 }else{
    axios.post("http://localhost:5000/api/v1/singOut",userEmail, {withCredentials: true})
    .then(res =>{
      console.log(res.data);
    })
 }



   
})

return () =>{
  return unSubscribe()
}
},[])



const authInfo = {
 user,
 loading,
 createNewUser,
 userLogin,
 userLogOut,
 UpdateProfile,
 setUser,
 gitHubLoginSystem
}

useEffect(()=>{
  if(user){
    return setLoading(false)
   }
   
} ,[user])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
