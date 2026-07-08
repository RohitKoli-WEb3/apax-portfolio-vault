import { getWalletData } from "../services/walletService.js";

export const getWallet = async (req, res) => {
  try {
    const wallet = await getWalletData();

    res.json(wallet);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch wallet data",
    });
  }
};