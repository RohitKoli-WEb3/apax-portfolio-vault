import api from "./api";

export const transactionService = {
  async getTransactions() {
    const response = await api.get("/transactions");
    return response.data;
  },
};