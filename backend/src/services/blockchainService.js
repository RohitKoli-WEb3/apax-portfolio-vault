import { ethers } from "ethers";

import APAXTokenArtifact from "../../../shared/abi/APAXToken.json" with { type: "json" };
import contractAddressData from "../../../shared/contract-address.json" with { type: "json" };

// =========================
// Provider
// =========================

const provider = new ethers.JsonRpcProvider(
    process.env.SEPOLIA_RPC_URL
);

// =========================
// ABI & Contract Address
// =========================

const abi = APAXTokenArtifact.abi ?? APAXTokenArtifact;

const contractAddress = contractAddressData.sepolia.APAXToken;

// =========================
// Read Contract
// =========================

const readContract = new ethers.Contract(
    contractAddress,
    abi,
    provider
);

// =========================
// Write Contract
// =========================

let writeContract = null;

if (process.env.PRIVATE_KEY && process.env.PRIVATE_KEY.trim() !== "") {

    const signer = new ethers.Wallet(
        process.env.PRIVATE_KEY.trim(),
        provider
    );

    writeContract = new ethers.Contract(
        contractAddress,
        abi,
        signer
    );

}

// =========================
// Helpers
// =========================

function validateAddress(address) {

    if (!address) {
        throw new Error("Wallet address is required.");
    }

    if (!ethers.isAddress(address)) {
        throw new Error(`Invalid Ethereum address: ${address}`);
    }

}

// =========================
// READ FUNCTIONS
// =========================

export async function getBalance(address) {

    validateAddress(address);

    const balance = await readContract.balanceOf(address);

    return ethers.formatUnits(balance, 18);

}

export async function getTokenName() {

    return await readContract.name();

}

export async function getTokenSymbol() {

    return await readContract.symbol();

}

export async function getTotalSupply() {

    const supply = await readContract.totalSupply();

    return ethers.formatUnits(supply, 18);

}

export async function isApproved(address) {

    validateAddress(address);

    return await readContract.isApproved(address);

}

// =========================
// WRITE FUNCTIONS
// =========================

export async function approveHolder(address) {

    validateAddress(address);

    if (!writeContract) {
        throw new Error("PRIVATE_KEY is not configured.");
    }

    const tx = await writeContract.approveHolder(address);

    await tx.wait();

    return tx.hash;

}

export async function revokeHolder(address) {

    validateAddress(address);

    if (!writeContract) {
        throw new Error("PRIVATE_KEY is not configured.");
    }

    const tx = await writeContract.revokeHolder(address);

    await tx.wait();

    return tx.hash;

}

export async function transferTokens(to, amount) {

    validateAddress(to);

    if (!writeContract) {
        throw new Error("PRIVATE_KEY is not configured.");
    }

    const tx = await writeContract.transfer(
        to,
        ethers.parseUnits(amount.toString(), 18)
    );

    await tx.wait();

    return tx.hash;

}