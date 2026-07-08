import { getTransactions } from "../services/transactionService.js";

export const getTransactionsController = async (req, res) => {
  try {
    const transactions = await getTransactions();

    res.json(transactions);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch transactions",
    });
  }
};