import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CardTable from "./CardTable";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";


const Applied_jobs = () => {
const[applies,setApplies] = useState([]) ;
const {user}= useAuth()  
useEffect(()=>{
 axios.get(`http://localhost:5000/api/v1/applied?name=${user?.displayName}`)
 .then(res =>{
    setApplies(res?.data)
 })
},[user?.displayName])




const[allJobs,setAllJobs] = useState(" ")


useEffect( ()=>{
 axios.get(`http://localhost:5000/api/v1/applied?category=${allJobs}`) 
 .then(res =>{
  setApplies(res?.data)
 })
  
},[allJobs] )


    return (
        <div>
            <PageTitle  title="Applied jobs Page"/>

            <div  className="bg-blue-300 w-full h-60 rounded-lg ">
            <div className="text-center pt-24">
                
                <select name="category" defaultValue={allJobs} onChange={(e)=>setAllJobs(e.target.value)} className="select select-bordered w-1/2 mx-auto" required >
                
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