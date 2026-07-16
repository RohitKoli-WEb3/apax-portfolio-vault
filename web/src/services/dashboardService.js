import api from "./api";

export const dashboardService = {
  async getDashboardStats() {
    const response = await api.get("/dashboard");
    return response.data;
  },

  async getPortfolioChart() {
    const response = await api.get("/dashboard/chart");
    return response.data;
  },
};