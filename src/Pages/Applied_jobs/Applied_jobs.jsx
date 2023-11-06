import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import CardTable from "./CardTable";

const Applied_jobs = () => {
const[applies,setApplies] = useState([]) ;
const {user}= useAuth()  
useEffect(()=>{
 axios.get(`http://localhost:5000/api/v1/applied?email=${user?.email}`)
 .then(res =>{
    setApplies(res?.data)
 })
},[user?.email])
    return (
        <div>
            <div  className="bg-blue-300 w-full h-60 rounded-lg ">
            <div className="text-center pt-24">
                        <form >
                        <input className="w-1/2 py-2 pl-4" type="text" name="name" placeholder="Please Search your job Title" id="" />
                        </form>
                    </div>
                
            </div>

    
{/* // Table  */}

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

        </div>





        </div>
    );
};

export default Applied_jobs;