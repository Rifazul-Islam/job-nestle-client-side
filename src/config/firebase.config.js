// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHUmBSe19K7an0zL5tX-EhiBMJ3H_Fr80",
  authDomain: "jobnestle-client-side.firebaseapp.com",
  projectId: "jobnestle-client-side",
  storageBucket: "jobnestle-client-side.appspot.com",
  messagingSenderId: "1082477213284",
  appId: "1:1082477213284:web:42e3c2d4fb8dee7a641171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth