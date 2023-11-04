import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
 const[user,setUser] = useState(null);
 const[loading,setLoading] = useState(true);

 // create A new User 
 const createNewUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 // User Login 
 const userLogin = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }

 // user LogOut 
 const userLogOut = ()=>{
    setLoading(true)
    return signOut(auth)
 }



const authInfo = {
 user,
 loading,
 createNewUser,
 userLogin,
 userLogOut
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;