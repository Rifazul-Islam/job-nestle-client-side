import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import MyCard from "./MyCard";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";
import useAxios from "../../hooks/useAxios";



const MyJobs = () => {
const[isLoading ,setIsLoading] = useState(true)
const{user} = useAuth();
const name = user?.displayName;
const axiosSecure = useAxios()

const[jobs,setJobs] = useState([])  
// My Jobs Name through Data Load  
useEffect(()=>{
    setIsLoading(true)
    axiosSecure.get(`/api/v1/jobs-UserName?name=${name}`)
    .then(res => setJobs(res?.data))
    setIsLoading(false)
    } ,[axiosSecure,name])

    return (
        <div>
            <PageTitle  title="My jobs Page"/>

            <div className="bg-[#F1B6BC] w-full h-72 mt-1">
                    <div className="text-center pt-24">

                        <h1 className="text-center text-3xl font-bold"> My Posting All Jobs </h1>
                       
                    </div>

                    
              </div>

         {
            jobs?.length > 0 ? 
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
            { isLoading ? <div className=" ml-[600px] my-28  text-green-600">   <span className="loading loading-dots loading-lg"></span></div> :
                jobs?.map(job =><MyCard key={job?._id} job={job}
               
                    jobs={jobs}
                    setJobs={setJobs}
                    ></MyCard>)
            }
          </div>

          : <div> <h2 className="text-center my-10 text-3xl text-orange-500 font-bold">No Data Available </h2> </div>
         }
        </div>
    );
};

export default MyJobs;