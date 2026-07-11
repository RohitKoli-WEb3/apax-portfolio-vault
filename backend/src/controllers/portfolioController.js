import { getPortfolioData } from "../services/portfolioService.js";

export const getPortfolio = async (req, res) => {
  const data = await getPortfolioData();
  res.json(data);
};