import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";
const Add_A_Job = () => {
    const[error,setError] = useState("")
    const [startDate, setStartDate] = useState(new Date());
    const [postDate, setPostDate] = useState(new Date());

    const{user} = useAuth();

  // date convert 
    let deadline = (startDate.toLocaleDateString());
    let postDated = (postDate.toLocaleDateString());
  
// job Post form value ;
    const handlerAddProduct =(e)=>{
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const title = form.title.value;
      const photo = form.photo.value;
      const category = form.category.value;
      const salary = form.salary.value;
      const postDate = postDated ;
      const description = form.description.value;
      const defaultNum= form.number.value;
      deadline
      
     
   
       
      if(category === "Please Select Job Category"){
        return setError("Please Select Job Category")
      }
     else(
        setError("")
     )
    
      const job = {name,photo,category,title,salary,description,postDate,deadline,defaultNum}
      

    axios.post("https://job-nestle-server-side.vercel.app/api/v1/insert-jobs", job)
    .then(res =>{
        if(res?.data?.insertedId)
        toast.success("Your Job Post MongoDB Inserted Successfully")
        form.reset()
    })
    }

    return (
        <div>
          <PageTitle  title="Add A job Page"/>
           <div>
            <img className="h-96 rounded-lg w-full" src="https://easy.jobs/wp-content/uploads/2021/04/How-To-Write-A-Great-Job-Posting-With-Examples.png" alt="" />
           </div>

          <div className="bg-blue-100 mt-10 p-4 rounded-md">
           <h2 className="text-center text-2xl font-bold text-orange-500"> Add New Jobs </h2>
          <p className="text-red-500"> {error} </p>
           <form onSubmit={handlerAddProduct}> 

            <div className="flex gap-3 pt-5">

                <div className="form-control w-1/2 ">
                <label className="label">
                <span className="label-text">Job Title</span>
                </label>
                <label className="input-group">
                <input type="text" name="title"  placeholder="Job Title" className="input input-bordered w-full" required />
                </label>
            </div>

            <div className="form-control w-1/2">
                <label className="label">
                <span className="label-text">Logged In User Name</span>
                </label>
                <label className="input-group">
                <input type="text" defaultValue={user?.displayName}  name="name" placeholder="Product Photo" className="input input-bordered w-full" readOnly />
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
                <option defaultValue={"Please Select Job Category"}>Please Select Job Category</option>
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
            <input type="text" name="salary"  placeholder="Salary range" className="input input-bordered w-full" required />
            </label>
        </div>

        <div className="form-control w-1/2">
        <label className="label">
        <span className="label-text">Picture URL of the Job Banner</span>
        </label>
        <label className="input-group">       
        <input type="text" name="photo" placeholder="Product Photo" className="input input-bordered w-full" required />      </label>
    </div>
        </div>  

        <div className="flex gap-3 pt-5">
        <div className="form-control w-1/2">
        <label className="label">
        <span className="label-text">Application Deadline Use</span>
        </label>
        <label className="input-group w-full">       
        <DatePicker className="input input-bordered md:w-[615px]" required selected={startDate} onChange={(date) => setStartDate(date)} />
        </label>
    </div>


       <div className="form-control w-1/2">
         <label className="label">
           <span className="label-text">Job Applicants Number</span>
         </label>
         <label className="input-group">
           <input type="number" name="number" defaultValue={0}  placeholder="Product Rating" className="input input-bordered w-full" readOnly />
         </label>
       </div>
     </div>

    <div className="flex gap-3 pt-5">
   

    <div className="form-control w-full">
         <label className="label">
           <span className="label-text">Job Description</span>
         </label>
         <label className="input-group">
           <input type="text" name="description" placeholder="Job Description" className="input input-bordered w-full" required />
         </label>
       </div>

      
    </div>


    <div className="">
    <input className="btn btn-success  w-40 my-7 hover:bg-secondary capitalize" type="submit" value="Add Job" />
    </div>

</form>  
                                  
       
       </div>






        </div>
    );
};

export default Add_A_Job;