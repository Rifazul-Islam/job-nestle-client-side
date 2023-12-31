import { Link } from "react-router-dom";

const JobCard = ({job}) => {
const {name,photo,category,title,salary,description,postDate,deadline,defaultNum,_id} = job ;

// const handler = ()=>{
//   if(!user?.displayName){
//     return toast.success("Please Login First")
//   }
// }

return (
<div className="card card-compact bg-base-100 shadow-xl border-2 border-green-400
 rounded-[15px] overflow-hidden transition-all hover:scale-105 hover:shadow-2xl group
">
  <figure><img className="h-[200px]" src={photo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {title}</h2>
     <p>Publisher Name : {name} </p>
     <p> Post Date : {postDate} </p>
     <p>Apple Deadline: {deadline} </p>
     <p>Salary range: ${salary} </p>
     <p> job Applied : {defaultNum} </p>

    <div  className="card-actions justify-end">
    
      <Link to={`/details/${_id}`}><button  className="btn btn-success capitalize">View Details</button></Link>
    </div>
  </div>
</div>
    );
};

export default JobCard;