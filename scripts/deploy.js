const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.deployed();

  console.log(`crowdFunding deployed to ${crowdFunding.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});




// const { ethers } = require("hardhat");

// //0x5fbdb2315678afecb367f032d93f642f64180aa3

// async function main() {
//   const crowdFundingFactory = await ethers.getContractFactory("CrowdFunding");
//   const crowdFunding = await crowdFundingFactory.deploy(); // ✅ deploy the contract
//   await crowdFunding.deployed(); // ✅ wait for deployment

//   console.log("CrowdFunding deployed to:", crowdFunding.address);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

