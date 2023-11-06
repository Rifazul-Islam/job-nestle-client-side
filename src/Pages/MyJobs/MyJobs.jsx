import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MyCard from "./MyCard";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";


const MyJobs = () => {
const{user} = useAuth();
const name = user?.displayName;

const[jobs,setJobs] = useState([])   
useEffect(()=>{
    fetch(`http://localhost:5000/api/v1/jobs-title?name=${name}`)
    .then(res => res.json())
    .then( data => setJobs(data) )
    
    } ,[name])


   








    return (
        <div>
            <PageTitle  title="My jobs Page"/>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
            {
                jobs?.map(job =><MyCard key={job?._id} job={job}
               
                    jobs={jobs}
                    setJobs={setJobs}
                    ></MyCard>)
            }
        </div>
        </div>
    );
};

export default MyJobs;