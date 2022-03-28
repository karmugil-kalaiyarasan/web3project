//https://eth-ropsten.alchemyapi.io/v2/NUKLAdEj7DdYqaklXTdEMlr_xAURGKkE

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/NUKLAdEj7DdYqaklXTdEMlr_xAURGKkE",
      accounts: [
        "dd5b5f3df39e521a2c1eb942d15996156afcd551115430f7f11f3e26e060a5b5",
      ],
    },
  },
};

//Transactions deployed to: 0xA65c79B56cD1Cab1b19Ca84863236e21267e048b
