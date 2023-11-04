import { Link } from "react-router-dom";

const Register = () => {

const handlerRegister = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password= form.password.value;

 console.log(name, photo, email, password);
}


return (
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col w-[500px]">
    <div className="text-center ">
      <h1 className="text-4xl font-bold text-green-600">Register Now !</h1>
    
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <form onSubmit={handlerRegister} className="card-body">

<div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text">Photo URL</span>
  </label>
  <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
</div>


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
  <button className="btn btn-success capitalize"> Register</button>
</div>
</form>
<p className="pb-10 text-center text-indigo-600"> You Have an Account Please  <Link to="/login" className="text-orange-500">Login</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Register;