import React, { useEffect, useState, useContext } from "react";
// Internal Imports
import { CrowdFundingContext } from "../Context/CrowdFunding";
import { Hero, Card, PopUp } from "../Components";

const Index = () => {
  const {
    titlData,
    getCampaigns,
    createCampaign,   // fixed typo here
    donate,
    getUserCampaigns,
    getDonations,
  } = useContext(CrowdFundingContext);

  // Initialize with empty arrays for safe rendering
  const [allCampaign, setAllCampaign] = useState([]);
  const [userCampaign, setUserCampaign] = useState([]);

  useEffect(() => {
    // define async function inside effect
    const fetchData = async () => {
      try {
        const allData = await getCampaigns();
        const userData = await getUserCampaigns();
        setAllCampaign(allData);
        setUserCampaign(userData);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    fetchData();
    // empty deps means runs once on mount
  }, [getCampaigns, getUserCampaigns]);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState(null);

  console.log(donateCampaign);

  return (
    <>
      <Hero titlData={titlData} createCampaign={createCampaign} />
      <Card
        title="All Listed Campaign"
        allcampaign={allCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      <Card
        title="Your Created Campaign"
        allcampaign={userCampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonations={getDonations}
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default Index;
