import React from "react";
import icon from "../assets/Icon.png";
import image26 from "../assets/image26.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 p-28">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center m-9">
          {/* Left Section - Title and Social Media */}
          <div className="mb-8 md:mb-0">
            <h1 className="text-xl font-semibold bg-gradient-to-r from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">
              Empowering Ethereum
              <br />
              Through Open-Source
            </h1>
            <div className="flex items-center gap-4 mt-4">
              {/* Social Media Icons */}
              <a
                href="#"
                className="p-3  transition-all"
                aria-label="Instagram"
              >
                <img src={image26} alt="" />
              </a>
              <a href="#" className="p-3 transition-all" aria-label="Cancel">
                <img src={image27} alt="" />
              </a>
              <a
                href="#"
                className="p-3   transition-all"
                aria-label="LinkedIn"
              >
                <img src={image28} alt="" />
              </a>
            </div>
          </div>

          {/* Center Section - Platform Links */}
          <div className="text-center mb-8 md:mb-0 ">
            <p className="text-gray-400 font-semibold mb-2 ml-[-330px] ">
              Platform
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className=" px-4 py-2 rounded-full border border-gray-200 w-20 p-2">
                Home
              </button>
              <button className="rounded-full border border-gray-200 w-28">
                Projects
              </button>
              <button className="rounded-full border border-gray-200 w-28">
                Contributor
              </button>
              <div className="">
                <button className="rounded-full border border-gray-200 w-28">
                  Reward
                </button>
                <button className="rounded-full border border-gray-200 w-28">
                  {" "}
                  Community
                </button>
              </div>
            </div>
          </div>

          {/* Right Section - Learn Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6 p-1">
            <p className="text-gray-400 font-semibold mb-12 mr-[-63px] ">
              Learn
            </p>
            <ul className=" flex flex-wrap justify-center gap-4 ">
              <li>
                <a href="#" className="hover:text-white">
                  <button className="rounded-full border border-gray-200 w-20 p-2">
                    Blog
                  </button>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  <button className="rounded-full border border-gray-200 w-20 p-2">
                    FAQ
                  </button>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  <button className="rounded-full border border-gray-200 w-28 p-2">
                    {" "}
                    Changelog
                  </button>
                </a>
              </li>
            </ul>
            <div></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex justify-between items-center">
          {/* Left Section - Copyright */}
          <p className="text-sm">© 2024 Projecty. All rights reserved.</p>

          {/* Right Section - Privacy Links */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-purple-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-purple-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="hover:text-purple-400 text-sm">
              Cookie Settings
            </a>
          </div>
        </div>
        <img src={icon} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
