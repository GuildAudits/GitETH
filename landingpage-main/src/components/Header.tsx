import React from "react";

import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";

const Header: React.FC = () => {
  return (
    <nav className="bg-dark-blue px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className=" ">
        <img src={image13} alt="" className="w-60 h-9 cursor-pointer " />
      </div>
      {/* Navigation Links */}
      <ul className="flex space-x-8 text-gray-300 rounded-full border border-gray-300 p-4 bg-gradient-to-b from-gray-800 hidden lg:flex ml-14 p-2">
        <li className="text-white cursor-pointer hover:bg-gray-700 hover:rounded-full rounded-full  p-1 w-20 flex items-center justify-center">
          <a href="#">Home</a>
        </li>
        <li className=" text-white rounded-full cursor-pointer hover:bg-gray-700 hover:rounded-full   p-1 w-20 flex items-center justify-center">
          <a href="#">Projects</a>
        </li>
        <li className="text-white cursor-pointer hover:bg-gray-700 hover:rounded-full rounded-full  p-1 p-1 w-30 flex items-center justify-center">
          <a href="#">Contributors</a>
        </li>
        <li className="text-white cursor-pointer hover:bg-gray-700 hover:rounded-full rounded-full  p-1 p-1 w-20 flex items-center justify-center">
          <a href="#">Rewards</a>
        </li>
        <li className="text-white cursor-pointer hover:bg-gray-700 hover:rounded-full rounded-full  p-1 p-1 w-25 flex items-center justify-center">
          <a href="#">Community</a>
        </li>
      </ul>
      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="text-gray-300 hover:text-white">Login</button>
        <button className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-full border border-purple-500 hover:border-transparent hover:bg-white-500 hover:text-white shadow-md --tw-gradient-from: #e9d5ff var(--tw-gradient-from-position)">
          <img
            src={image14}
            alt="Github"
            className="w-5 h-5 inline-block mr-2 "
          />
          Connect to Github
        </button>
      </div>
    </nav>
  );
};

export default Header;
