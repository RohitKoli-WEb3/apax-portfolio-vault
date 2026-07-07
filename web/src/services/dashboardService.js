import api from "./api";

export const dashboardService = {
  async getDashboardStats() {
    await api.get("/dashboard");

    return {
      portfolioValue: "$1,248,750",
      holdings: 3,
      walletStatus: "Approved",
      dailyChange: "+6.35%",
    };
  },

  async getPortfolioChart() {
    await api.get("/portfolio-chart");

    return [
      { day: "May 19", portfolio: 22000, market: 24000 },
      { day: "May 20", portfolio: 12000, market: 20000 },
      { day: "May 21", portfolio: 18000, market: 22000 },
      { day: "May 22", portfolio: 26000, market: 18000 },
      { day: "May 23", portfolio: 31000, market: 17000 },
      { day: "May 24", portfolio: 28000, market: 15000 },
      { day: "May 25", portfolio: 39000, market: 21000 },
    ];
  },
};