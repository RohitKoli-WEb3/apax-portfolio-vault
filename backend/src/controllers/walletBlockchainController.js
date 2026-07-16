import {
    approveHolder,
    revokeHolder,
    transferTokens,
    isApproved
} from "../services/blockchainService.js";

// Approve Holder
export async function approveHolderController(req, res) {
    try {
        const { address } = req.body;

        if (!address) {
            return res.status(400).json({
                success: false,
                message: "Address is required"
            });
        }

        const txHash = await approveHolder(address);

        res.json({
            success: true,
            transactionHash: txHash
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

// Revoke Holder
export async function revokeHolderController(req, res) {

    try {

        const { address } = req.body;

        if (!address) {
            return res.status(400).json({
                success: false,
                message: "Address is required"
            });
        }

        const txHash = await revokeHolder(address);

        res.json({
            success: true,
            transactionHash: txHash
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

// Transfer Tokens
export async function transferController(req, res) {

    try {

        const { to, amount } = req.body;

        if (!to || !amount) {

            return res.status(400).json({
                success: false,
                message: "Recipient and amount are required"
            });

        }

        const txHash = await transferTokens(to, amount);

        res.json({
            success: true,
            transactionHash: txHash
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

// Check Approval
export async function approvedController(req, res) {

    try {

        const { address } = req.params;

        const approved = await isApproved(address);

        res.json({
            address,
            approved
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}