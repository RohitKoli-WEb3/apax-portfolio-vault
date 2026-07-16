import { getWalletData } from "../services/walletService.js";

export const getWallet = async (req, res) => {

    try {

        const { address } = req.query;

        if (!address) {
            return res.status(400).json({
                message: "Wallet address is required"
            });
        }

        const data = await getWalletData(address);

        res.json(data);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: error.message
        });

    }

};