import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MyCard from "./MyCard";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";
import useAxios from "../../hooks/useAxios";



const MyJobs = () => {
const{user} = useAuth();
const name = user?.displayName;
const axiosSecure = useAxios()

const[jobs,setJobs] = useState([])   
useEffect(()=>{
    axiosSecure.get(`/api/v1/jobs-UserName?name=${name}`)
    .then(res => setJobs(res?.data))
    } ,[axiosSecure,name])

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