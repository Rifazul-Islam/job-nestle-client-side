import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
          <img className="h-60  mx-auto mt-32" src="https://i.ibb.co/8rLPHTX/errorspng.png" alt="" />
           <Link to="/"><button className=" font-bold btn btn-success mt-7 "> Go to Home</button></Link>
        </div>
    );
};

export default ErrorPage;