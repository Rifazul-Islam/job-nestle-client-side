
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { AiFillGithub } from "react-icons/ai";
import PageTitle from "../../components/Shared/PageTitle/PageTitle";

const Login = () => {

const {userLogin,gitHubLoginSystem} = useAuth()
const location = useLocation();
const navigate = useNavigate()

    const handlerLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password= form.password.value;
    
  
     userLogin(email, password)
     .then(result =>{
      const userInfo = result.user;
      console.log(userInfo);
      toast.success("User Login Successfully")

        navigate(`${location?.state ? location?.state : "/"}`)
     })
     .catch(error =>{
      toast.error(error.message)
     })

    }

    const handlerGithubLogin = ()=>{
      gitHubLoginSystem()
      .then(()=>{
        toast.success("Github Login Successfully")
      })
      .catch(error =>{
        toast.error(error.message)
       })
    }





    return (
        <div className="hero min-h-screen bg-base-200">
           <PageTitle  title="Login Page"/>
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
       <div onClick={handlerGithubLogin} className="text-center">
       <button  className="btn btn-success capitalize px-[90px]"> <AiFillGithub/> Github with Login</button>
       </div>
          <p className="pb-10 pt-2 text-center text-indigo-600"> Are you New Please <Link className="text-orange-500" to="/register">Register</Link> </p>


          </div>
       

        </div>
      </div>
    );
};

export default Login;