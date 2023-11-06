import { BsBookmark } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";

const FirstSection = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row  my-32 p-2 ">
            <div className="flex-1">
                <h1 className="text-4xl font-bold pb-5"> Suits Jobs For You .</h1>
                <p className=" py-3 border-l-4 border-green-600 pl-4 ">
                There are many variations of passages of Lorem Ipsum Fasts Fastsby humour, by injected humour, or coved ceilings.
                </p>
                <div className="pt-7 text-2xl ">
                    <div className="flex items-center gap-6">
                    <BsBookmark className="text-green-500"/>
                    <span className="text-slate-500"> BooKMark Jobs</span>
                    </div>
                </div>
                <div className="pt-7 text-2xl ">
                    <div className="flex items-center gap-7">
                    <ImProfile className="text-green-500"/>
                    <span className="text-slate-500">Apply with your Resume</span>
                    </div>
                </div>
                <div className="pt-7 text-2xl ">
                    <div className="flex items-center gap-6">
                    <AiOutlineMail className="text-green-500"/>
                    <span className="text-slate-500"> Get Notified</span>
                    </div>
                </div>

                <button className="btn btn-success my-7 capitalize"> Browse Jobs </button>

            </div>
            <div className="flex-1">
                <img src="https://i.ibb.co/xXp8Y8V/first-Section.png" alt="" />
            </div>
        </div>
    );
};

export default FirstSection;
