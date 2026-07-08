import {
  getDashboardData,
  getPortfolioChartData,
} from "../services/dashboardService.js";

export const getDashboard = async (req, res) => {
  try {
    const data = await getDashboardData();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load dashboard data",
    });
  }
};

export const getPortfolioChart = async (req, res) => {
  try {
    const data = await getPortfolioChartData();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load portfolio chart",
    });
  }
};