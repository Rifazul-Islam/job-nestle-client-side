import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Details = () => {
const {user} = useAuth();
const job = useLoaderData()
const {name:userName,photo,category,title,salary,description,postDate,deadline,defaultNum} = job;
const currentDate = new Date();
const myDate = (currentDate.toLocaleDateString())


const handlerModal = (e)=>{
    e.preventDefault();
    const form = e.target;
    const resume = form.resume.value;
    const name = user?.displayName;
    const email = user?.email;
    

   if(name === userName){
     return toast.error("Application is not allowed, because your own job")
   }
   if(myDate === deadline){
    return toast.error("Application is not allowed, because time is over")
   }
    
   console.log(name,email, resume);
}


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
                <p>deadline : {deadline}</p>
                <div className="card-actions justify-end">

                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-success  capitalize"> Apply Now </button>
                </div>
            </div>
           </div>

         </div>


        {/* You can open the modal using document.getElementById('ID').showModal() method */}
      
        <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
            <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <form onSubmit={handlerModal}>
                            
            <div className="flex gap-3 pt-5">
            <div className="form-control w-1/2">
            <label className="label">
            <span className="label-text">Logged In User Name</span>
            </label>
            <label className="input-group">
            <input type="text"  name="name" defaultValue={user?.displayName} placeholder="Logged In User Name" className="input input-bordered w-full" required />
            </label>
            </div>

            <div className="form-control w-1/2 ">
            <label className="label">
            <span className="label-text">Logged In User Email</span>
            </label>
            <label className="input-group">
            <input type="text" name="email" defaultValue={user?.email}  placeholder="Logged In User Email" className="input input-bordered w-full" required />
            </label>
            </div>

            </div>  

            <div className="form-control pt-7">
            <input type="text" name="resume" placeholder="Resume URL" className="input input-bordered" required />
            </div>
                <button className="btn btn-success capitalize mt-8"> Submit Now</button>
            </form>
        </div>
        </dialog>    

        </div>
    );
};

export default Details;


