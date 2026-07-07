export const getDashboard = (req, res) => {
  res.json({
    success: true,
    data: {
      portfolioValue: "$1,248,750",
      holdings: 3,
      walletStatus: "Approved",
      dailyChange: "+6.35%",
    },
  });
};