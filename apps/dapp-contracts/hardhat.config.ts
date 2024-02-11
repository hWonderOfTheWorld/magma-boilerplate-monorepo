import dotenv from "dotenv";
dotenv.config();
import { parseEther } from "@ethersproject/units";

import { HardhatUserConfig } from "hardhat/types";
import '@nomicfoundation/hardhat-ethers';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-abi-exporter";
import "hardhat-tracer";
import "@nomiclabs/hardhat-etherscan";
import '@nomicfoundation/hardhat-chai-matchers';
import 'hardhat-ethernal'

const UNISWAP_SETTING = {
  version: "0.7.6",
  settings: {
    optimizer: {
      enabled: true,
      runs: 5_000,
    },
  },
}
const LOW_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 2_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const LOWEST_OPTIMIZER_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

const config: HardhatUserConfig = {
  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5'
  },
  solidity: {
    compilers: [
      {
        version: "0.7.0",
      },
      {
        version: "0.7.5",
      },
      {
        version: "0.7.6",
      },
      {
        version: "0.8.0",
          settings: {
            optimizer: {
              enabled: true,
              runs: 5000,
          },
        },
      },
      {
        version: "0.8.17",
        settings: {
            optimizer: {
              enabled: true,
              runs: 5000,
          },
        },
      },
      {
        version: "0.8.19",
        settings: {
            optimizer: {
              enabled: true,
              runs: 5000,
          },
        },
      },
      {
        version: "0.8.4",
        settings: {
            optimizer: {
              enabled: true,
              runs: 5000,
          },
        },
      },
      { version: '0.6.11' },
      { version: '0.6.0' },
      { version: '0.6.2' },
      { version: '0.6.12' },
      UNISWAP_SETTING,
      LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      LOW_OPTIMIZER_COMPILER_SETTINGS
    ],
    overrides: {
      '@uniswap/v3-periphery/contracts/NonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
      '@uniswap/v3-periphery/contracts/test/MockTimeNonfungiblePositionManager.sol': LOW_OPTIMIZER_COMPILER_SETTINGS,
      '@uniswap/v3-periphery/contracts/test/NFTDescriptorTest.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      '@uniswap/v3-periphery/contracts/NonfungibleTokenPositionDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      '@uniswap/v3-periphery/contracts/libraries/NFTDescriptor.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS,
      '@uniswap/v3-periphery/contracts/libraries/PoolAddress.sol': LOWEST_OPTIMIZER_COMPILER_SETTINGS
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  defaultNetwork: "local",
  networks: {
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
    },
    hardhat: {
      forking: {
        url: process.env.FORK_URL!
      },
      loggingEnabled: true,
      accounts: [
        {
          privateKey: process.env.DEPLOYER_PRIVATE_KEY!,
          balance: parseEther("1000000000").toString(),
        },
      ],
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL!,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
      chainId: 5,
      gas: 'auto' 
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL!,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
      chainId: 5,
      gas: 'auto' 
    },
    mainnet: {
      url: process.env.MAIN_RPC_URL!,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
      chainId: 1,
      gas: 'auto' 
      
    },
    magma: {
      url: process.env.MAGMA_RPC_URL!,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY!],
      chainId: 48715795616,
      gas: 'auto'
    },
  },
  
  etherscan: {
    apiKey: {
      mainnet: '...'
    }
  },
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: process.env.CMC_API_KEY,
  },
  mocha: {
    timeout: 200000,
    retries: 3,
  },
  ethernal: {
    apiToken: process.env.ETHERNAL_API_TOKEN,
    disableSync: true, // If set to true, plugin will not sync blocks & txs
    disableTrace: true, // If set to true, plugin won't trace transaction
    workspace: 'Magma Onyx', // Set the workspace to use, will default to the default workspace (latest one used in the dashboard). It is also possible to set it through the ETHERNAL_WORKSPACE env variable
    uploadAst: true, // If set to true, plugin will upload AST, and you'll be able to use the storage feature (longer sync time though)
    disabled: false, // If set to true, the plugin will be disabled, nohting will be synced, ethernal.push won't do anything either
    resetOnStart: 'hardhat', // Pass a workspace name to reset it automatically when restarting the node, note that if the workspace doesn't exist it won't error
    serverSync: false, // Only available on public explorer plans - If set to true, blocks & txs will be synced by the server. For this to work, your chain needs to be accessible from the internet. Also, trace won't be synced for now when this is enabled.
    skipFirstBlock: true, // If set to true, the first block will be skipped. This is mostly useful to avoid having the first block synced with its tx when starting a mainnet fork
    verbose: false // If set to true, will display this config object on start and the full error object
},
tracer: {
  enabled: true
}
};


export default config;
