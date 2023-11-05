import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const All_jobs = () => {
const [allJobs,setAllJobs] = useState([])
const [title , setTitle] = useState(" ")

useEffect( () => {
    axios.get("http://localhost:5000/api/v1/jobs")
    .then(res => setAllJobs(res.data))
},[])
    

const handlerSearch =(e)=>{
    e.preventDefault();
    const form = e.target;
    const title = form.name.value;
    setTitle(title)
    form.reset()
   
}

useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/jobs-title?title=${title}`)
    .then(res => res.json())
    .then( data => setAllJobs(data) )
    
    } ,[title])


    return (
        <div className="mt-2">
            <div className="bg-[#F1B6BC] w-full h-60">
                    <div className="text-center pt-24">
                        <form onSubmit={handlerSearch}>
                        <input className="w-1/2 py-2 pl-4" type="text" name="name" placeholder="Please Search your job Title" id="" />
                        
                        </form>
                    </div>

                    
              </div>
              <h2 className="text-center pt-5 text-4xl font-bold text-orange-700"> All Jobs Show</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
                {
                    allJobs?.map(job => <Card key={job?._id} job={job} ></Card>)
                }
            </div>
        </div>
    );
};

export default All_jobs;