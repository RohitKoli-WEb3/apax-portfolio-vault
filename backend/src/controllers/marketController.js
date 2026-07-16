import { getMarketData } from "../services/marketService.js";

export const getMarket = async (req, res) => {
  try {
    const market = await getMarketData();

    res.status(200).json(market);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to load market data",
    });
  }
};