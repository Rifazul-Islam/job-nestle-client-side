import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";

const UpdateJobs = () => {
const job = useLoaderData() ; 

const {name,photo,category,title,salary,description,postDate:dates,deadline:deadlines,defaultNum,_id} = job 

const [startDate, setStartDate] = useState(new Date(deadlines));  
const [postDate, setPostDate] = useState(new Date(dates));

  // date convert 
  let publishedDate = (startDate.toLocaleDateString());
  let postDated = (postDate.toLocaleDateString());


// Update Jobs 

const handlerUpdateJobs = (e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const title = form.title.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const defaultNum= form.number.value;
    const deadline = publishedDate ;
    const postDate = postDated ;
  
    

const updateJob = {name,title,photo,category, deadline, postDate, salary,description,defaultNum};

  axios.put(`http://localhost:5000/api/v1/update-job/${_id}`,updateJob)
  .then(res =>{
    if(res?.data?.modifiedCount > 0){
        toast.success("Your job Update Successfully")
        console.log(res.data);
    }
  })
}
    return (
      <div>
          <PageTitle  title="Update job route"/>
         <div>
        <div>
         <img className="h-96 rounded-lg w-full" src="https://easy.jobs/wp-content/uploads/2021/04/How-To-Write-A-Great-Job-Posting-With-Examples.png" alt="" />
        </div>

       <div className="bg-blue-100 mt-10 p-4 rounded-md">
        <h2 className="text-center text-2xl font-bold text-orange-500"> Update Jobs </h2>
      
        <form onSubmit={handlerUpdateJobs} > 

         <div className="flex gap-3 pt-5">

             <div className="form-control w-1/2 ">
             <label className="label">
             <span className="label-text">Job Title</span>
             </label>
             <label className="input-group">
             <input type="text" name="title" defaultValue={title}  placeholder="Job Title" className="input input-bordered w-full" required />
             </label>
         </div>

         <div className="form-control w-1/2">
             <label className="label">
             <span className="label-text">Logged In User Name</span>
             </label>
             <label className="input-group">
             <input type="text" defaultValue={name}  name="name" placeholder="Product Photo" className="input input-bordered w-full" readOnly />
             </label>
         </div>
         
         </div>  


         <div className="flex gap-3 pt-5">

         <div className="form-control w-1/2 ">
             <label className="label">
             <span className="label-text">Job Category</span>
             </label>
             <label className="input-group">

             <select name="category"  className="select select-bordered w-full " required >
             <option defaultValue={category}>{category}</option>
             <option>OnSite Jobs</option>
             <option>Remote Job</option>
             <option>Hybrid Jobs</option>
             <option>Part Time</option>
         
         </select>

             
             </label>
         </div>

         <div className="form-control w-1/2">
                     <label className="label">
                     <span className="label-text"> Job Posting Date </span>
                     </label>
                     <label className="input-group">
                     <DatePicker className="input input-bordered md:w-[615px]" required selected={postDate} onChange={(date) => setPostDate(date)} />
                     </label>
                 </div>
         
         </div>  

     <div className="flex gap-3 pt-5">

     <div className="form-control w-1/2 ">
         <label className="label">
         <span className="label-text">Salary range</span>
         </label>
         <label className="input-group">
         <input type="text" name="salary" defaultValue={salary}  placeholder="Salary range" className="input input-bordered w-full" required />
         </label>
     </div>

     <div className="form-control w-1/2">
     <label className="label">
     <span className="label-text">Picture URL of the Job Banner</span>
     </label>
     <label className="input-group">       
     <input type="text" name="photo" defaultValue={photo} placeholder="Product Photo" className="input input-bordered w-full" required />      </label>
 </div>
     </div>  

     <div className="flex gap-3 pt-5">
     <div className="form-control w-1/2">
     <label className="label">
     <span className="label-text">Application Deadline Use</span>
     </label>
     <label className="input-group ">       
     <DatePicker className="input input-bordered md:w-[615px]" required selected={startDate} onChange={(date) => setStartDate(date)} />
     </label>
 </div>


    <div className="form-control w-1/2">
      <label className="label">
        <span className="label-text">Job Applicants Number</span>
      </label>
      <label className="input-group">
        <input type="number" name="number" defaultValue={defaultNum}  placeholder="Product Rating" className="input input-bordered w-full" readOnly />
      </label>
    </div>
  </div>

 <div className="flex gap-3 pt-5">


 <div className="form-control w-full">
      <label className="label">
        <span className="label-text">Job Description</span>
      </label>
      <label className="input-group">
        <input type="text" defaultValue={description} name="description" placeholder="Job Description" className="input input-bordered w-full" required />
      </label>
    </div>

   
 </div>


 <div className="">
 <input className="btn btn-success  w-40 my-7 hover:bg-secondary capitalize" type="submit" value="Update Job" />
 </div>

</form>  
                               
    
    </div>
       </div> 

      </div>
    );
};

export default UpdateJobs;