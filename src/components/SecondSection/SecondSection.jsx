import axios from "axios";
import { useState } from "react";
import Card from "./Card";

const SecondSection = () => {
const[logos ,setLogos] = useState([])

axios.get("http://localhost:5000/api/v1/company-logo")
.then(res => {
    console.log(res?.data);
    setLogos(res?.data)
})

    return (
        <div className="my-40 px-2 md:px-0">
            <h2 className="text-4xl text-center py-14  font-bold text-green-500">Our Top Recruiters</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                {
                  logos?.map(logo => <Card key={logo._id}  logo={logo}></Card>)
                }
            </div>
        </div>
    );
};

export default SecondSection;