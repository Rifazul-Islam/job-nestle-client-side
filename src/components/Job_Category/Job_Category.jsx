import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Job_Category = () => {
const[category,setCategory] = useState(" ")
const[AllItems ,setAllItems] = useState([])
const[jobs ,setJobs] = useState([])

useEffect(()=>{
fetch(`http://localhost:5000/api/v1/jobs?category=${category}`)
.then(res => res.json())
.then( data => setJobs(data) )

} ,[category])




useEffect(()=>{
  fetch("http://localhost:5000/api/v1/category")
  .then(res => res.json())
  .then(data => setAllItems(data))
} ,[])





return (
<div>
    <h1 className="text-orange-600 text-3xl font-bold text-center pt-8"> All Job Category </h1>
        
    <Tabs className="pt-6">
    <TabList className='text-center w-1/2 mx-auto'>
      <Tab> All Jobs</Tab>
    {
      AllItems?.map(job =>{

       return <Tab onClick={()=>setCategory(job?.category)} key={job._id}> {job?.category} </Tab>
      })
    }
    </TabList>  

    <div className='text-2xl'>

    {
      jobs?.map(job =><div key={job?._id}>{job?.title}</div>)
    }
    </div>
    
  </Tabs>
        
        </div>
    );
};

export default Job_Category;
