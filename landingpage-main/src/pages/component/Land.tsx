import React from "react";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
const Land: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  text-center px-4">
      <h1 className="text-4xl text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">
        Fueling Ethereum Community with <br />
        <span className="text-4xl text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">
          Open-Source Contribution
        </span>
      </h1>
      <p className="text-gray-400 text-lg md:text-xl mb-8">
        Contribute to innovative projects, connect with developers, <br /> and
        earn rewards for your contributions.
      </p>
      <div className="flex space-x-4 mb-16">
        <button className="px-6 py-3 bg-gray-800 text-gray-200 rounded-full hover:bg-gray-700 focus:outline-none">
          Connect to Github
        </button>
        <button className="px-6 py-3 bg-gray-50 text-black-200 rounded-full hover:bg-gray-50 focus:outline-none">
          Explore Projects
        </button>
      </div>
      <div className="flex space-x-8">
        <div className="  absolute left-10 bottom-1/0 transform -translate-y-1/2  ">
          <img src={image5} alt="" className="w-80 h-80 " />
        </div>
        <div className=" absolute right-10 bottom-1/0 transform -translate-y-1/2">
          <img src={image6} alt="" className="w-80 h-80 float-right " />
        </div>
      </div>
    </div>
  );
};

export default Land;
