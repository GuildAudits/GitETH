import React from "react";
import image8 from "../../assets/image8.png";
import image10 from "../../assets/image10.png";
import image11 from "../../assets/image11.png";
import image22 from "../../assets/image22.png";
import image23 from "../../assets/image23.png";
import image24 from "../../assets/image24.png";

const WhyYouChoose: React.FC = () => {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen flex items-center justify-center">
      <div className=" grid grid-cols-1 lg:grid-cols-2  gap-10 items-center">
        {/* Left Section */}
        <div className="relative ">
          <div className="w-full">
            <img
              src={image8} // Replace with your image URL
              alt=""
              className="rounded-lg"
            />
          </div>
          {/* Weekly Sprint Report */}
          <div className="absolute bottom-5 left-5  text-white p-4   w-96">
            <img src={image10} alt="" />
          </div>
          {/* Name Tag */}
          <div className="absolute bottom-5 right-5  text-white px-4 py-2 rounded-full flex items-center">
            <div className="w-2 h-2 rounded-full  mr-2"></div>
            <img src={image11} alt="" />
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Why Choose Us</h1>
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className=" flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
                <img src={image22} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">
                  Collaborate with Leading Developers
                </h2>
                <p className="text-gray-400 text-sm">
                  Access a community of experienced contributors.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className=" flex items-center justify-center ">
                <img src={image23} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Contribute and Earn</h2>
                <p className="text-gray-400 text-sm">
                  Get paid for your contributions through cryptocurrency or
                  custom payment options.
                </p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className=" flex items-center justify-center ">
                <img src={image24} alt="" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Build Your Skills</h2>
                <p className="text-gray-400 text-sm">
                  Access learning resources, mentorship programs, and growth
                  opportunities.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyYouChoose;
