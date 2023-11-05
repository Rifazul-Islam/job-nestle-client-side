import { useLoaderData } from "react-router-dom";


const Details = () => {
 const job = useLoaderData()
const {name,photo,category,title,salary,description,postDate,deadline,defaultNum} = job
    return (
        <div className="px-2">
            <div>
            <img className=" rounded-lg pt-1" src="https://i.ibb.co/rc91MFm/Career2.jpg" alt="" />
            </div>
            <h1 className="text-3xl text-center py-6 font-bold text-orange-600"> Job Details </h1>
            <div>

            <div className="card flex flex-col md:flex-row  card-side bg-base-100 shadow-xl border-2 border-green-400">
            <figure><img src={photo} alt="Movie"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title} !</h2>
                <p>{description}</p>
                <p> salary range : {salary}</p>
                <p> Job Applied : {defaultNum}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-success  capitalize"> Apply Now </button>
                </div>
            </div>
           </div>

            </div>
        </div>
    );
};

export default Details;