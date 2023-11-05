
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";


const Login = () => {

const {userLogin} = useAuth()


    const handlerLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password= form.password.value;
    
     console.log(email, password);
     userLogin(email, password)
     .then(result =>{
      const userInfo = result.user;
      console.log(userInfo);
      toast.success("User Login Successfully")
     })
     .catch(error =>{
      toast.error(error.message)
     })




    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-[500px]">
          <div className="text-center ">
            <h1 className="text-4xl font-bold text-green-600">Login Now !</h1>
          
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handlerLogin} className="card-body">
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
      </div>
      
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
      
      </div>
      
      <div className="form-control mt-6">
        <button className="btn btn-success capitalize">Login</button>
      </div>
      </form>
       <p className="pb-10 text-center text-indigo-600"> Are you New Please <Link className="text-orange-500" to="/register">Register</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;