
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CardTable from "./CardTable";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";
import useAxios from "../../hooks/useAxios";


const Applied_jobs = () => {
const[applies,setApplies] = useState([]) ;
const {user}= useAuth()  
const axiosSecure = useAxios();
useEffect(()=>{
  axiosSecure.get(`/api/v1/applied?email=${user?.email}`)
 .then(res =>{
    setApplies(res?.data)
 })
},[axiosSecure,user?.email])


    return (
        <div>
            <PageTitle  title="Applied jobs Page"/>

            <div  className="bg-blue-300 w-full h-60 rounded-lg ">
            <div className="text-center pt-24">
                
                <select name="category" className="select select-bordered w-1/2 mx-auto" required >
                <open>Please Selected Category</open>
                <option>OnSite Jobs</option>
                <option>Remote Job</option>
                <option>Hybrid Jobs</option>
                <option>Part Time</option>
            
            </select>
                     
                    </div>
                
            </div>

    
{/* // Table  */}

{
  applies.length > 0 ? 
  <div className="bg-zinc-200 my-10" >

  <div className="overflow-x-auto ">
    <table className="table">
      {/* head */}
      <thead >
        <tr className="text-xl font-bold">
          <th>
            <h1>idx</h1>
          </th>
          <th>Image</th>
          <th>Title</th>
          <th>Email</th>
          <th>Sallary</th>
          <th> Action</th>
        </tr>
      </thead>
      <tbody>
       
    {
     applies?.map((apply,idx) => <CardTable key={apply?._id} apply={apply} idx={idx} ></CardTable> )
    }
  
      </tbody>
   
    </table>
  </div>
   </div> : <div> <h1 className="text-center py-10 text-3xl font-bold">Please Data Add </h1>  </div>
}







        </div>
    );
};

export default Applied_jobs;