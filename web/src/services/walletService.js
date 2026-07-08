import api from "./api";

export const walletService = {
  async getWallet() {
    const response = await api.get("/wallet");
    return response.data;
  },
};