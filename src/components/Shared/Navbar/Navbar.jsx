import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import toast from "react-hot-toast";


const Navbar = () => {

const{user,userLogOut} = useAuth();

const handlerSignOut = ()=>{
  userLogOut()
  .then(()=>{
    toast.success("User Sign Out Successfully")
  })
}
 const items = <>
          <li> <NavLink to="/"
           className={({isActive})=>
           isActive ? "text-green-600": " "}
          > Home </NavLink> </li>

          <li> <NavLink to="/all_Jobs"
           className={({isActive})=>
           isActive ? "text-green-600": " "}
          > All Jobs</NavLink> </li>

         {
          user?  <> <li> <NavLink to="/applied_jobs"
          className={({isActive})=>
          isActive ? "text-green-600": " "}

         > Applied Jobs </NavLink> </li>

         <li> <NavLink to="/add_A_Job"
          className={({isActive})=>
          isActive ? "text-green-600": " "}

         > Add A Job</NavLink> </li>
         <li> <NavLink to="/myJobs"
          className={({isActive})=>
          isActive ? "text-green-600": " "}
         > My Jobs</NavLink> </li> </> : " "
         }

         <li> <NavLink to="/blog"
          className={({isActive})=>
          isActive ? "text-green-600": " "}
         > Blogs</NavLink> </li>
 </>
    return (
        <div className="bg-white py-2 shadow-2xl">
       <div className="max-w-7xl mx-auto navbar ">
       <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="space-x-5 font-bold menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
               {items}
            </ul>
          </div>
          <a className=" text-xl font-bold"> <img className="w-16" src="https://i.ibb.co/MggRsBQ/jobLogo.png" alt="" /> JobNestle </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="space-x-5 text-[17px] font-bold menu-horizontal px-1">
           
          {items}
          </ul>
        </div>
        <div className="navbar-end ">
          {
            user? <span className="flex items-center space-x-7"> <span onClick={handlerSignOut} className="cursor-pointer btn capitalize" > Sign out</span> <div className="tooltip tooltip-left " data-tip={user?.displayName}> <div className="avatar cursor-pointer">
            <div className="w-12 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div> </div>  </span> 
          
          : <Link to="/login" className="btn capitalize"> Login </Link>
          }
        </div>
       </div>
      </div>  
    );
};

export default Navbar; 