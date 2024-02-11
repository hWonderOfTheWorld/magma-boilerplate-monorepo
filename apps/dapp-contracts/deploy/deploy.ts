import { DeployFunction } from "hardhat-deploy/types";
import { parseEther, Address, formatEther } from 'viem'
import { Yum } from "../typechain";
import hardhat from 'hardhat';
import { assertAddress } from "../lib/utils";
import { time } from "@nomicfoundation/hardhat-network-helpers";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";
import fs from 'fs';
import { getAddress } from 'viem'

const deploy: DeployFunction = async function (hre) {
  hre.tracer.enabled = true;

  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  console.log('hardhat.network.config.chainId', hardhat.network.config.chainId)
  const { chainId } = hardhat.network.config;
  if (!chainId) {
    throw new Error('Invalid chain ID');
  }

}

export default deploy;

