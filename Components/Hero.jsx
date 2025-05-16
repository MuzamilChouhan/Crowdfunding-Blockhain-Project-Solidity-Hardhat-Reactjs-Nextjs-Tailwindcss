import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";

const Hero = () => {
  const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    amount: "",
    deadline: "",
  });

  const { createCampaign } = useContext(CrowdFundingContext);

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(campaign);
      window.location.reload();
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <section className="relative font-poppins bg-black text-white overflow-hidden">
      

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 lg:py-32 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-16 max-w-7xl mx-auto">
        {/* Left Section - Text */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Fuel <span className="text-indigo-500">Innovative Ideas</span><br />
            with Web3 Crowdfunding
          </h1>
          <p className="text-lg text-gray-300">
            Launch your campaign. Raise ETH. Empower change. FundSpark connects creators to the decentralized world of support.
          </p>
          <p className="text md:text-2xl font-extrabold leading-tight text-indigo-500">
            Blockchain powered trusted crowdfunding for everyone.
          </p>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-lg border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Start a New Campaign</h2>
          <form onSubmit={createNewCampaign} className="space-y-4">
            <input
              type="text"
              placeholder="Campaign Title"
              onChange={(e) => setCampaign({ ...campaign, title: e.target.value })}
              required
              className="w-full h-12 px-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setCampaign({ ...campaign, description: e.target.value })}
              required
              className="w-full h-12 px-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="number"
              placeholder="Target Amount (ETH)"
              onChange={(e) => setCampaign({ ...campaign, amount: e.target.value })}
              required
              className="w-full h-12 px-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="date"
              onChange={(e) => setCampaign({ ...campaign, deadline: e.target.value })}
              required
              className="w-full h-12 px-4 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold shadow-md transition"
            >
              Launch Campaign
            </button>
          </form>
          <p className="text-sm text-gray-400 text-center mt-4">
            Your dream deserves a decentralized start.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
