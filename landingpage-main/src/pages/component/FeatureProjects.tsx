// src/components/FeaturedProjects.js
// src/components/FeaturedProjects.tsx
import React from "react";
import image18 from "../../assets/image18.png";
import image15 from "../../assets/image15.png";
import image16 from "../../assets/image16.png";
import image17 from "../../assets/image17.png";
import image7 from "../../assets/image7.png";

const FeatureProjects: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-40 text-white ">
      <div className="flex items-center justify-center">
        <img src={image7} alt="" />
      </div>
      <div className="p-1">
        <h1 className="text-4xl font-bold mb-8 text-center ">
          Featured Projects
        </h1>
      </div>
      <div className="flex items-center justify-center p-10">
        <button className="mt-4 px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-200 flex items-center justify-center">
          View all Projects →
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
        {/* DeFi Protocol Enhancement Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-xs  transform -translate-y-10 -mt-8 mx-auto ">
          <img src={image15} alt="" />
          <div className="text-xl font-semibold mb-2">
            DeFi Protocol Enhancement
          </div>
          <p className="text-sm mb-4">
            Help improve the security and scalability of a cutting-edge
            decentralized finance protocol.
          </p>
          <div className="flex items-center gap-2 text-xs mb-4">
            <img src={image18} alt="" />
            <p> Solidity, DeFi, Security</p>
            <button className="rounded-full border border-gray-100 p-2">
              Intermediate
            </button>
          </div>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-auto float-right"
          >
            View Project →
          </a>
        </div>

        {/* DAO Governance Dashboard Card */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-12 max-w-xs">
          <img src={image16} alt="" />
          <div className="text-xl font-semibold mb-2 p-">
            DAO Governance Dashboard
          </div>
          <p className="text-sm mb-4">
            Develop a user-friendly interface for DAO members to vote, propose
            changes, and track progress.
          </p>
          <div className="flex items-center gap-2 text-xs mb-4">
            <img src={image18} alt="" />
            <p>React, DAO, Goverance</p>
            <button className="rounded-full border border-gray-100 p-2">
              Beginner
            </button>
          </div>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-auto float-right"
          >
            View Project →
          </a>
        </div>

        {/* NFT Marketplace Expansion Card */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg  transform -translate-y-10 -mt-8 mx-auto">
          <img src={image17} alt="" />
          <div className="">NFT Marketplace Expansion</div>
          <p className="text-gray-400 text-sm mb-4">
            Contribute to the development of new features for a popular NFT
            marketplace. Enhance smart contracts and user experience.
          </p>
          <div className="flex justify-between items-center text-sm">
            <img src={image18} alt="" />
            <p className=" text-white px-1 py-1 ">Web3, NFT,SmartContracts</p>

            <button className="rounded-full border border-blue-100 p-2 w-20">
              Expert
            </button>
          </div>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-auto float-right"
          >
            View Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureProjects;
