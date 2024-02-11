// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import {IERC20, SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

interface IYum is IERC20 {
    function mint(address to, uint256 amount) external;
}

contract Yum is IERC20, ERC20, IYum {
    address public minter;
    uint256 public constant maxSupply = 400000000000000000000000000;

    constructor() ERC20("TestNet", "YUM") {
        minter = msg.sender;
    }

    function _safeMint(address to, uint256 amount) internal {
        _mint(to, amount);
        require(totalSupply() <= maxSupply, "Too Much Supply");
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == minter, "Not Minter");
        _safeMint(to, amount);
    }
   
}
