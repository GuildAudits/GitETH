import React from "react";
import image19 from "../../assets/image19.png";
import image20 from "../../assets/image20.png";
import image21 from "../../assets/image21.png";
import image14 from "../../assets/image14.png";
import image9 from "../../assets/image9.png";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <img src={image9} alt="" />
      <div className="p-10 text-lg">
        <h2 className="text-4xl font-bold mb-4">How It Works</h2>
      </div>
      {/* Steps Indicator */}
      <div className="flex space-x-4 mb-10">
        <button className="bg-white text-gray-900 px-6 py-2 rounded-full shadow font-medium">
          Step 1
        </button>
        <button className="bg-gray-800 text-gray-400 px-6 py-2 rounded-full shadow font-medium">
          Step 2
        </button>
        <button className="bg-gray-800 text-gray-400 px-6 py-2 rounded-full shadow font-medium">
          Step 3
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl w-full rounded">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <h1 className="text-4xl font-bold mb-4 flex">
            Sign Up and Create Your Profile
          </h1>
          <p className="text-gray-400 mb-6">
            Join the platform, create your profile, and highlight your skills.
          </p>
        </div>

        {/* Right Section */}
        <div className="bg-gray-800 p-20 rounded-lg shadow-lg">
          <div className="flex items-center justify-center p-6 flex-col space-y-4">
            <img
              src={image19}
              alt=""
              className="w-80 h-15 cursor-pointer pl-6 "
            />
          </div>
          <div className="items-center justify-center flex">
            <h2 className="text-2xl font-bold mb-4 ">
              Create your Project account
            </h2>
          </div>
          <p className="text-gray-400 text-center mb-6">
            Transform the way you manage projects.
          </p>

          {/* Buttons */}
          <button className="bg-gray-700 border border-indigo-500   text-white w-full py-2 rounded-full mb-4 hover:bg-gray-700 flex items-center justify-center space-x-2">
            <img src={image20} alt="" />
            Continue with Email
          </button>
          <div className="text-center text-gray-500 my-2">or</div>
          <button className=" border border-indigo-500 bg-gray-700 text-white w-full py-2 rounded-full mb-4 hover:bg-gray-600 flex items-center justify-center space-x-2">
            <img src={image21} alt="Google Icon" className="w-5 h-5" />
            <span>Continue with Google</span>
          </button>
          <button className="bg-gray-700  border border-indigo-500 text-white w-full py-2 rounded-full hover:bg-gray-600 flex items-center justify-center space-x-2">
            <img src={image14} alt="Apple Icon" className="w-5 h-5" />
            <span>Continue with GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
