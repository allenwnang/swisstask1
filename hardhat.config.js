require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: ["0xbcb74fd9e22f0d0df5183210c18b5a0c3364661cbe77bc7bd2d6f8bda128816f"], //Your private key starting with "0x"
    },
  },
};