import React from "react";

const Card = ({ allcampaign, setOpenModel, setDonate, title, userWallet }) => {
  const daysLeft = (deadline) => {
    const difference = new Date(deadline).getTime() - Date.now();
    const remainingDays = difference / (1000 * 3600 * 24);
    return remainingDays.toFixed(0);
  };

  // Filter campaigns created by the user
  const myCampaigns = userWallet
    ? allcampaign?.filter(
        (c) => c.owner?.toLowerCase() === userWallet.toLowerCase()
      )
    : [];

  // Progress bar width helper
  const progressPercentage = (collected, target) => {
    if (!target || target === 0) return 0;
    let percent = (collected / target) * 100;
    if (percent > 100) percent = 100;
    return percent;
  };

  return (
    <div className="px-4 py-10 mx-auto max-w-screen-xl">
      {/* All Campaigns Section */}
      <p className="pb-8 text-3xl font-extrabold text-blue-900">{title}</p>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {allcampaign?.map((campaign, i) => {
          const progress = progressPercentage(
            campaign.amountCollected || 0,
            campaign.target
          );
          return (
            <div
              key={i}
              onClick={() => {
                setDonate(campaign);
                setOpenModel(true);
              }}
              className="cursor-pointer rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-600"
            >
              <img
                src="https://cdn.shopify.com/s/files/1/0070/7032/articles/BestCrowdfundingSites_resized-03_e2e805b4-56c9-4e56-a4d1-890788247548.jpg?v=1740804825&originalWidth=1848&originalHeight=782&width=1400"
                className="w-full h-48 object-cover rounded-t-lg"
                alt="Campaign"
              />
              <div className="p-5">
                <p className="text-xs font-semibold text-blue-600 mb-1">
                  Days Left: {daysLeft(campaign.deadline)}
                </p>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {campaign.title}
                </h2>
                <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                  {campaign.description.length > 60
                    ? campaign.description.slice(0, 60) + "..."
                    : campaign.description}
                </p>
                <div className="flex justify-between text-sm font-medium text-gray-800 mb-2">
                  <p>🎯 Target: {campaign.target} ETH</p>
                  <p className="text-green-600 font-semibold">
                    ✅ Collected: {campaign.amountCollected || 0} ETH
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-right text-xs text-gray-600 mt-1">
                  {progress.toFixed(1)}% funded
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* My Campaigns Section */}
      {myCampaigns?.length > 0 && (
        <>
          <p className="pt-20 pb-8 text-3xl font-extrabold text-blue-900">
            My Created Campaigns
          </p>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {myCampaigns.map((campaign, i) => {
              const progress = progressPercentage(
                campaign.amountCollected || 0,
                campaign.target
              );
              return (
                <div
                  key={`my-${i}`}
                  onClick={() => {
                    setDonate(campaign);
                    setOpenModel(true);
                  }}
                  className="cursor-pointer rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition-transform duration-300 hover:scale-105 border border-transparent hover:border-blue-600"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0070/7032/articles/BestCrowdfundingSites_resized-03_e2e805b4-56c9-4e56-a4d1-890788247548.jpg?v=1740804825&originalWidth=1848&originalHeight=782&width=1400"
                    className="w-full h-48 object-cover rounded-t-lg"
                    alt="Campaign"
                  />
                  <div className="p-5">
                    <p className="text-xs font-semibold text-blue-600 mb-1">
                      Days Left: {daysLeft(campaign.deadline)}
                    </p>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {campaign.title}
                    </h2>
                    <p className="text-gray-700 mb-3 text-sm leading-relaxed">
                      {campaign.description.length > 60
                        ? campaign.description.slice(0, 60) + "..."
                        : campaign.description}
                    </p>
                    <div className="flex justify-between text-sm font-medium text-gray-800 mb-2">
                      <p>🎯 Target: {campaign.target} ETH</p>
                      <p className="text-green-600 font-semibold">
                        ✅ Collected: {campaign.amountCollected || 0} ETH
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded-full h-2.5">
                      <div
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <p className="text-right text-xs text-gray-600 mt-1">
                      {progress.toFixed(1)}% funded
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
