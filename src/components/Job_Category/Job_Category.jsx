import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import axios from 'axios';


const Job_Category = () => {
const[isLoading ,setIsLoading] = useState(true)
const[category,setCategory] = useState("")
const[allItems ,setAllItems] = useState([])
const[jobs ,setJobs] = useState([])

useEffect(()=>{
fetch(`http://localhost:5000/api/v1/jobs?category=${category}`)
.then(res => res.json())
.then( data => setJobs(data) )

} ,[category])



 const handlerLoad = () =>{
 
   axios.get("http://localhost:5000/api/v1/jobs")
   .then(res => {
    setJobs(res.data)
   
   })
 }
 


useEffect(()=>{
  setIsLoading(true)
  fetch("http://localhost:5000/api/v1/category")
  .then(res => res.json())
  .then(data => {
    setAllItems(data)
    setIsLoading(false)
  })
} ,[])


return (
<div>
  
    <h1 className="text-orange-600 text-3xl font-bold text-center pt-8"> All Job Category </h1>
        
    <Tabs className="pt-6" prop={1}>
    <TabList className='text-center w-1/2 mx-auto'>
    <Tab onClick={handlerLoad} prop={0} > All Jobs</Tab>
    {
      allItems?.map(job =>{

       return <Tab onClick={()=>setCategory(job?.category)} key={job._id}> {job?.category} </Tab>
      })
    }
    </TabList>  
    {isLoading ? <div className=" ml-[600px] my-28  text-green-600">   <span className="loading loading-dots loading-lg"></span></div>  : 
      (<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-28'>
      { jobs?.map(job => <JobCard key={job?._id} job={job} > </JobCard>)}
         
       
       </div>)
    }

    
    
  </Tabs>
        
        </div>
    );
};

export default Job_Category;
