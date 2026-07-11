export const getDashboardData = async () => {
  return {
    portfolioValue: "$1,248,750",
    holdings: 3,
    walletStatus: "Approved",
    dailyChange: "+6.35%",

      assetAllocation: [
      {name: "Gold",value: 55,amount: "$686,812",},
      {name: "Silver", value: 25,amount: "$312,188",},
      {name: "Platinum",value: 20,amount: "$249,750",},
    ],
  };
};

export const getPortfolioChartData = async () => {
  return [
    { day: "May 19", portfolio: 22000, market: 24000 },
    { day: "May 20", portfolio: 12000, market: 20000 },
    { day: "May 21", portfolio: 18000, market: 22000 },
    { day: "May 22", portfolio: 26000, market: 18000 },
    { day: "May 23", portfolio: 31000, market: 17000 },
    { day: "May 24", portfolio: 28000, market: 15000 },
    { day: "May 25", portfolio: 39000, market: 21000 },
  ];
};