// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract APAXToken is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1_000_000 * 10 ** 18;

    mapping(address => bool) private approvedWallets;

    constructor(
        address initialOwner
    ) ERC20("APAX Token", "APAX") Ownable(initialOwner) {
        _mint(initialOwner, INITIAL_SUPPLY);
    }
}
