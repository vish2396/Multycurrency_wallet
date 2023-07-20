const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = 'stairs tortoise scatter glance exact nation hedgehog enjoy auto kiss habit girl'; // Replace with your actual mnemonic phrase
const infuraApiKey = '3989f6493524bc4c0e0101f0499158f82e892ea7e0da1135800dd4f68c5c59d4'; // Replace with your Infura API key

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `https://polygon-mumbai.infura.io/v3/${infuraApiKey}`),
      network_id: 80001,
      gasPrice: 1000000000, // Adjust the gasPrice according to the current network conditions
      confirmations: 2, // Number of block confirmations before a transaction is considered mined (default: 2)
      timeoutBlocks: 200, // Number of blocks before a deployment times out (default: 200)
      skipDryRun: true, // Skip the dry run step (default: false for public networks)
    },
  },
  compilers: {
    solc: {
      version: '^0.8.0', // Replace with the version of Solidity you are using
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
