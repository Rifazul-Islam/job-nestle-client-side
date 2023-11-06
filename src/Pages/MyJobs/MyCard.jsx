import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCard = ({job,jobs,setJobs}) => {

    const {name,photo,category,title,salary,description,postDate,deadline,defaultNum,_id} = job 

    const handlerDelete=(id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "Your Job Post deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/api/v1/jobs-title/${id}`)

                .then(res =>{
                   if(res?.data?.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your Job Post has been deleted.",
                        icon: "success"
                      });
    
                const remaining = jobs.filter(item => item?._id !== id) 
                 setJobs(remaining)


                   }
                })
            }
          });  
       }
       





    return (
        <div className="card card-compact bg-base-100 shadow-xl border-2 border-green-400
        rounded-[15px] overflow-hidden transition-all hover:scale-105 hover:shadow-2xl group">
         <figure><img className="h-[200px]" src={photo} alt="Shoes" /></figure>
         <div className="card-body">
           <h2 className="card-title"> {title}</h2>
            <p>Publisher Name : {name} </p>
            <p> Post Date : {postDate} </p>
            <p>Apple Deadline: {deadline} </p>
            <p>Salary range: ${salary} </p>
            
       
           <div className="card-actions my-2">
             <Link to={`/updateJobs/${_id}`}><button  className="btn btn-success capitalize" >Update</button></Link>
             <button onClick={()=>handlerDelete(_id)}  className="btn btn-success capitalize" >Delete</button>
           
           </div>
         </div>
       </div>
    );
};

export default MyCard;