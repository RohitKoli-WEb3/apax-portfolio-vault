export const getPortfolioData = async () => {
  return {
    summary: {
      totalValue: "$1,248,750",
      totalAssets: 3,
      bestPerformer: "Gold",
      walletStatus: "Verified",
    },

    assets: [
      {
        id: 1,
        asset: "Gold (XAU)",
        quantity: "10.25 XAU",
        price: "$2,425",
        value: "$24,850",
        change: "+3.25%",
      },
      {
        id: 2,
        asset: "Silver (XAG)",
        quantity: "50 XAG",
        price: "$31.34",
        value: "$1,567",
        change: "+1.12%",
      },
      {
        id: 3,
        asset: "Platinum (XPT)",
        quantity: "2.50 XPT",
        price: "$938",
        value: "$2,345",
        change: "-0.84%",
      },
    ],
  };
};