import { Link } from "react-router-dom";


const MyCard = ({job}) => {
    const {name,photo,category,title,salary,description,postDate,deadline,defaultNum,_id} = job 

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
            
       
           <div className="card-actions my-2">
             <Link to={`/details/${_id}`}><button  className="btn btn-success capitalize" >Update</button></Link>
             <Link to={`/details/${_id}`}><button  className="btn btn-success capitalize" >Delete</button></Link>
           
           </div>
         </div>
       </div>
    );
};

export default MyCard;