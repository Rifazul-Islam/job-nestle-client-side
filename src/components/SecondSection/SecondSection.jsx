import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const SecondSection = () => {
const[isLoading ,setIsLoading] = useState(true)
const[logos ,setLogos] = useState([])

useEffect( ()=>{
    setIsLoading(true)
axios.get("http://localhost:5000/api/v1/company-logo")
.then(res => {
    setLogos(res?.data)
    setIsLoading(false)
})
},[])

    return (
        <div className="my-40 px-2 md:px-0">
            <h2 className="text-4xl text-center py-14  font-bold text-green-500">Our Top Recruiters</h2>
           
            {isLoading ? <div className=" ml-[600px] my-28  text-green-600">   <span className="loading loading-dots loading-lg"></span></div> :
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                    {
                      logos?.map(logo => <Card key={logo._id}  logo={logo}></Card>)
                    }
                </div>
            }
           
        </div>
    );
};

export default SecondSection;