import api from "./api";

export const authService = {
  async login(email, password) {
    const response = await api.post("/auth/login", {
      email,
      password,
    });

    return response.data;
  },

  async connectWallet(walletAddress) {
    const response = await api.post("/auth/wallet", {
      walletAddress,
    });

    return response.data;
  },
};