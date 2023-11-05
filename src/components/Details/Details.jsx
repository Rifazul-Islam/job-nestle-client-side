import { useLoaderData } from "react-router-dom";


const Details = () => {
 const job = useLoaderData()
const {title} = job
    return (
        <div>
            <h1> View Details {title} </h1>
        </div>
    );
};

export default Details;