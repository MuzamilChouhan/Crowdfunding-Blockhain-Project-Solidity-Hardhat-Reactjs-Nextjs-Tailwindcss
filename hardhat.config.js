require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337, // ✅ Set this explicitly
    },
    hardhat: {
      chainId: 31337, // ✅ Also useful for internal Hardhat network (e.g. during tests)
    },
  },
};
