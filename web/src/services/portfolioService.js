import api from "./api";

export const portfolioService = {
  async getPortfolio() {
    const response = await api.get("/portfolio");
    return response.data;
  },
};