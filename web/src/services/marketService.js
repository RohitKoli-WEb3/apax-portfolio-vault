import api from "./api";

export const marketService = {
  async getMarketData() {
    const response = await api.get("/market");
    return response.data;
  },
};