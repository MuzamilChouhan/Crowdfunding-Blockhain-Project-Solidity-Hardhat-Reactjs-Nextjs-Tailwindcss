import React, { useState, useEffect } from "react";

const PopUp = ({ setOpenModel, donate, donateFunction, getDonations }) => {
  const [amount, setAmount] = useState("");
  const [allDonationData, setAllDonationData] = useState([]);

  const createDonation = async () => {
    try {
      await donateFunction(donate.pId, amount);
      setAmount(""); // clear input after donation
      const updatedDonations = await getDonations(donate.pId);
      setAllDonationData(updatedDonations); // update list
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchDonations = async () => {
      const donationData = await getDonations(donate.pId);
      setAllDonationData(donationData);
    };
    fetchDonations();
  }, [donate.pId, getDonations]);

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 sm:mx-0 z-50">
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">
              {donate.title}
            </h3>
            <button
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              onClick={() => setOpenModel(false)}
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-6 space-y-4">
            <p className="text-gray-700">{donate.description}</p>

            <input
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Amount in ETH"
              required
              type="number"
              className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="max-h-40 overflow-y-auto border-t border-gray-200 pt-3">
              {allDonationData.length > 0 ? (
                allDonationData.map((d, i) => (
                  <div key={i} className="text-sm text-gray-800">
                    <span className="font-semibold">{i + 1}.</span>{" "}
                    <span>{d.donation} ETH</span> from{" "}
                    <span className="text-gray-500">
                      {d.donator.slice(0, 6)}...{d.donator.slice(-4)}
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400 italic">No donations yet.</p>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-end items-center p-5 border-t border-gray-200">
            <button
              className="text-gray-600 hover:text-gray-800 px-4 py-2 mr-2 rounded-md transition"
              onClick={() => setOpenModel(false)}
            >
              Cancel
            </button>
            <button
              className={`px-6 py-2 rounded-md text-white font-medium transition ${
                amount
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              onClick={createDonation}
              disabled={!amount}
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-40 z-40" />
    </>
  );
};

export default PopUp;
