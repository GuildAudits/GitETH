import React from "react";
import image3 from "../../assets/image3.png";
import image12 from "../../assets/image12.png";
import image1 from "../../assets/image1.png";
import image4 from "../../assets/image4.png";
import image2 from "../../assets/image2.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image29 from "../../assets/image29.png";
const ProjectCategories: React.FC = () => {
  return (
    <div className="bg-[#0d0d2b] min-h-screen p-8">
      <div className="flex items-center justify-center">
        <img src={image29} alt="" />
      </div>
      <h1 className="text-white text-4xl font-bold text-center mb-8">
        Explore Project Categories
      </h1>
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-transparent border border-purple-500 text-purple-500 py-2 px-6 rounded-full hover:bg-purple-500 hover:text-white transition duration-300">
          Connect to Github
        </button>
        <button className="bg-white text-gray-800 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">
          Explore Projects
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {/* Left Image */}
        <div className=" ">
          <img
            src={image3} // Replace with your image link
            alt="DeFi"
            className=" h-80"
          />
        </div>
        {/* Middle Section */}
        <div className="rounded-lg">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 rounded-lg">
            <img
              src={image1} // Replace with your graphic
              alt="NFT"
              className="w-96 h-80"
            />
          </div>
        </div>
        {/* Right Image */}
        <div className="rounded-lg">
          <img
            src={image12} // Replace with your image link
            alt="Profile"
            className=""
          />
        </div>
        <div className="rounded-lg bottom-1/0 transform -translate-y-2/3">
          <img src={image4} alt="" className="w-72 h-96" />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 rounded-lg bottom-1/0 transform -translate-y-3/4 ">
          <img src={image2} alt="" className="" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1 className=" text-4xl text-4xl font-bold md:text-5xl lg:text-6xl bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">
          Join the Community
        </h1>{" "}
      </div>
      <div className="flex items-center justify-center p-3">
        <p className="text-white">
          Connect with fellow developer, share knowledge and get support
        </p>
      </div>
      <div className="text-black flex items-center justify-center p-2">
        <button className="rounded-full bg-gray-100 p-3">
          Join our Discord
        </button>
      </div>
      <div className="flex space-x-8">
        <div className="  absolute left-10 bottom-1/0 transform -translate-y-2/3  ">
          <img src={image5} alt="" className="w-80 h-80 " />
        </div>
        <div className=" absolute right-10 bottom-1/0 transform -translate-y-1/2">
          <img src={image6} alt="" className="w-80 h-80 float-right " />
        </div>
      </div>
    </div>
  );
};

export default ProjectCategories;
