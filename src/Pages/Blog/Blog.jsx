import PageTitle from "../../components/Shared/PageTitle/PageTitle";

const Blog = () => {
    return (
        <div>
             <PageTitle title="Blog Page"/>
            <div> 
                <img className="w-full h-96 object-cover" src="https://i0.wp.com/linkskorner.com/wp-content/uploads/2018/12/question-answer-sites-list.jpg?fit=2560%2C1440&ssl=1" alt="" />
            </div>
            
            <div className="px-2">
                <div className="card w-full mt-24 bg-base-100 shadow-xl border-2 border-green-600">
                <div className="card-body">
                    <h2 className="card-title font-bold"> 01.What is an access token and refresh token? How do they work and where should we
                   store them on the client-side? </h2>
                    <p> <strong> Answer</strong> : The difference between access token and refresh token is that access token is stored for a limited time and refresh token is stored for a longer period of time.jwt json web token It is usually used by us to secure the API of the server site and we need to use with credentials to store the client set. </p>
                    
                   <div className="card-actions justify-end">
                    <button className="btn btn-success capitalize">Read More</button>
                    </div>
                </div>
                </div>
            </div>

            <div className="px-2">
                <div className="card w-full mt-5 bg-base-100 shadow-xl border-2 border-green-600">
                <div className="card-body">
                    <h2 className="card-title font-bold"> 02.What is express js? What is Nest JS ? </h2>
                    <p> <strong> Answer</strong> : NestJS offers cross-platform support, allowing developers to build applications for various platforms. Express. js is platform-independent and can be used on different operating systems. </p>
                    
                   <div className="card-actions justify-end">
                    <button className="btn btn-success capitalize">Read More</button>
                    </div>
                </div>
                </div>
            </div>
            <div className="px-2">
                <div className="card w-full mt-5 bg-base-100 shadow-xl border-2 border-green-600">
                <div className="card-body">
                    <h2 className="card-title font-bold"> 03.Explain your code? </h2>
                    <p> <strong> Answer</strong> : My main purpose of the site is that user can come here and post jobs if he wants to apply if I talk about home page data I use use effect in job category.And with the help of get method of Axios, I saw the home page data from MongoDB. </p>
                    
                   <div className="card-actions justify-end">
                    <button className="btn btn-success capitalize">Read More</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;