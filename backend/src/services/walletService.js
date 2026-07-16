import {
    getBalance,
    isApproved
} from "./blockchainService.js";

export const getWalletData = async (walletAddress) => {

    const balance = await getBalance(walletAddress);

    const approved = await isApproved(walletAddress);

    return {

        balance,

        network: "Ethereum Sepolia",

        status: approved ? "Approved" : "Not Approved",

        address: walletAddress,

        assets: [
            {
                asset: "APAX Token",
                quantity: balance,
                value: balance
            }
        ],

        activity: [
            {
                type: "Blockchain",
                asset: "APAX",
                date: "Live",
                status: "Connected"
            }
        ]

    };

};