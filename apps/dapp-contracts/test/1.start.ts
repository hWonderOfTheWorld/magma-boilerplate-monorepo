import { ethers } from "hardhat";
import { expect } from "chai";
import { parseUnits, parseEther } from 'viem'
import { createMerkleTreeAndDistribution } from '../lib/generator';
import hre from 'hardhat'
import { Yum } from "../typechain";

const log = {
	white(val:string) {
	  console.log(`\t\t ${val}`); 
	},
	blue(val:string) {
	  console.log('\x1b[36m%s\x1b[0m', `\t\t ${val}`);
	},
	green(val:string) {
	  console.log('\x1b[32m%s\x1b[0m', `\t\t ${val}`);
	},
  }

  

describe("General Logging", () => {
	it("Can Distribute", async () => {
		const [ deployer ] = await ethers.getSigners()

		log.green(`Deployer: ${deployer.address}`)

		
	})
});
