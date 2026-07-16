import api from "./api";

export const walletService = {

  async getWallet(address) {

    const response = await api.get("/wallet", {
      params: {
        address
      }
    });

    return response.data;

  },

  async approveHolder(address) {

    const response = await api.post("/wallet/approve-holder", {
      address
    });

    return response.data;

  },

  async revokeHolder(address) {

    const response = await api.post("/wallet/revoke-holder", {
      address
    });

    return response.data;

  },

  async transfer(to, amount) {

    const response = await api.post("/wallet/transfer", {
      to,
      amount
    });

    return response.data;

  },

  async isApproved(address) {

    const response = await api.get(
      `/wallet/approved/${address}`
    );

    return response.data;

  }

};