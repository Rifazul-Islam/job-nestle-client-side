
const Banner = () => {
return (
<div className="rounded-full">
<div className="hero min-h-[100vh]" style={{backgroundImage: 'url(https://i.ibb.co/bPvHNkM/banner1.jpg)'}}>
  <div className="hero-overlay bg-opacity-60 bg-[#36506F]  "></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5  text-5xl font-bold"> Find your next job</h1>
      <p className="mb-5 text-[18px]">Each month, more than 1 million job seekers turn to website in their search for work, making over 140,000 applications every single day.</p>
      <input className="py-3 text-black px-2 w-80 rounded" type="search" name="" id="" />
      <button className="btn-success py-3 px-7 capitalize rounded text-white">Search</button>
    </div>
  </div>
</div>
</div>
);
};

export default Banner;
