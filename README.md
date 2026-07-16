# APAX Portfolio Vault

A full-stack Web3 portfolio management application demonstrating blockchain-based token management, secure holder whitelisting, backend integration, and a modern React frontend.

![Solidity](https://img.shields.io/badge/Solidity-0.8.28-363636?logo=solidity)
![Hardhat](https://img.shields.io/badge/Hardhat-3.x-yellow)
![Ethers.js](https://img.shields.io/badge/Ethers.js-v6-blue)
![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![License](https://img.shields.io/badge/License-MIT-blue)

---

# Overview

APAX Portfolio Vault is a demonstration Web3 application that combines smart contracts, backend APIs, and a React frontend into a complete blockchain-powered portfolio management system.

The project focuses on secure token transfers by enforcing an on-chain holder whitelist before allowing APAX token transfers.

---

# Features

## Smart Contracts

- ERC20 APAX Token
- Holder Whitelist
- Owner-only Holder Management
- Transfer Restrictions
- Custom Errors
- Events
- Ownership Controls
- OpenZeppelin Contracts v5
- Hardhat 3

---

## Backend

- Node.js
- Express.js
- REST APIs
- Blockchain Integration
- Ethers.js v6

---

## Frontend

- React
- Vite
- Portfolio Dashboard
- Transactions Page
- Settings Page
- Responsive UI

---

# Project Structure

```text
apax-portfolio-vault
│
├── backend
│
├── shared
│   ├── abi
│   └── contract-address.json
│
├── smart-contracts
│   ├── contracts
│   ├── scripts
│   ├── ignition
│   ├── test
│   ├── artifacts
│   └── hardhat.config.ts
│
├── web
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# Technology Stack

| Layer           | Technology        |
| --------------- | ----------------- |
| Smart Contracts | Solidity 0.8.28   |
| Framework       | Hardhat 3         |
| Libraries       | OpenZeppelin v5   |
| Blockchain      | Ethereum Sepolia  |
| Web3            | Ethers.js v6      |
| Backend         | Node.js + Express |
| Frontend        | React + Vite      |

---

# Smart Contract

Contract Name

```
APAXToken
```

Main Features

- ERC20 Token
- Whitelist System
- Holder Approval
- Holder Revocation
- Transfer Restriction
- Custom Errors
- Event Emission

---

# Smart Contract Functions

```
approveHolder()

revokeHolder()

isApproved()

transfer()

transferFrom()
```

Transfers are validated using the OpenZeppelin v5 `_update()` hook to ensure only approved holders can receive APAX tokens.

---

# Testing

Comprehensive unit tests were written using Hardhat 3, Mocha, and Chai.

## Test Coverage

### Deployment

- Initial supply
- Owner approval

### Holder Management

- Holder approval
- Holder revocation
- Duplicate approval
- Invalid address checks
- Event emission
- Access control

### Ownership

- Ownership transfer
- Previous owner restrictions
- New owner permissions

### Transfer Rules

- Transfer to approved holder
- Reject unapproved holder
- Reject revoked holder
- transferFrom validation
- Multiple holder transfers

Result

```
23 Passing Tests
0 Failing Tests
```

Run tests

```bash
npx hardhat test
```

---

# Deployment

Deployment Framework

```
Hardhat Ignition
```

Deploy locally

```bash
npx hardhat ignition deploy ignition/modules/APAXToken.ts
```

Deploy to Sepolia

```bash
npx hardhat ignition deploy ignition/modules/APAXToken.ts --network sepolia
```

---

# Contract Information

Network

```
Ethereum Sepolia
```

Contract Address

```
0xb5Dc021ED526A88Ca5926Cdbbe5b79BD77a1a8DE
```

---

# Contract Verification

The deployed contract has been successfully verified on Sepolia Blockscout and Sourcify.

---

# Installation

Clone repository

```bash
git clone <repository-url>
```

Install Smart Contract dependencies

```bash
cd smart-contracts
npm install
```

Install Backend

```bash
cd ../backend
npm install
```

Install Frontend

```bash
cd ../web
npm install
```

---

# Environment Variables

Create a `.env` file inside `smart-contracts`.

```
SEPOLIA_RPC_URL=

SEPOLIA_PRIVATE_KEY=

ETHERSCAN_API_KEY=
```

---

# Backend Integration

The backend interacts with the blockchain using:

- ABI
- Contract Address
- Ethers.js Provider
- Smart Contract Instance

Shared resources are stored inside:

```
shared/
```

---

# Security Features

- Owner-only administrative functions
- Holder whitelist
- Transfer restrictions
- Custom Solidity errors
- Zero-address validation
- OpenZeppelin audited contracts

---

# Future Improvements

- Role-Based Access Control
- Multi-signature administration
- Upgradeable contracts
- Token vesting
- Portfolio analytics
- Event indexing using The Graph

---

# License

This project is licensed under the MIT License.

---

# Author

**Rohit Koli**

Blockchain Developer

GitHub:
https://github.com/RohitKoli-WEB3