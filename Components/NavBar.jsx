import React, { useState, useContext } from "react";
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Logo } from "../Components/index";

const NavBar = () => {
  const { currentAccount, setCurrentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentAccount);
    alert("Wallet address copied!");
  };

  const disconnectWallet = () => {
    if (setCurrentAccount) {
      setCurrentAccount(null);
    }
    localStorage.removeItem("connectedAccount");
    setIsDropdownOpen(false);
    // Optional: reload to fully reset app state
    // window.location.reload();
  };

  const switchWallet = () => {
    disconnectWallet();
    connectWallet();
  };

  return (
    <div className="bg-white shadow-sm font-[Poppins] fixed w-full z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Brand */}
        <a href="/" className="flex items-center space-x-2">
          <Logo color="text-indigo-600" />
          <span className="text-xl font-bold text-indigo-600 uppercase tracking-wide">
            FundFlow
          </span>
        </a>

        {/* Wallet Section */}
        <div className="relative">
          {currentAccount ? (
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition flex items-center space-x-2"
            >
              <span className="break-all">{currentAccount}</span>
              {/* Down arrow icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={connectWallet}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md transition"
            >
              Connect Wallet
            </button>
          )}

          {/* Dropdown */}
          {isDropdownOpen && currentAccount && (
            <div className="absolute right-0 mt-2 w-72 bg-white shadow-lg border rounded-md p-4 z-50">
              <p className="text-sm text-gray-700 break-all mb-2">
                <strong>Address:</strong> {currentAccount}
              </p>
              <button
                onClick={handleCopy}
                className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md mb-2 w-full text-left"
              >
                📋 Copy Address
              </button>
              <hr className="my-2" />
              <button
                onClick={disconnectWallet}
                className="text-sm text-red-500 hover:text-red-600 w-full text-left mb-2"
              >
                🚪 Disconnect
              </button>
              <button
                onClick={switchWallet}
                className="text-sm text-blue-600 hover:text-blue-800 w-full text-left"
              >
                🔄 Switch Wallet
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
