const dashboardData = {
  totalValue: 1248750.32,
  holdings: 3,
  walletStatus: "Approved",
  summary: {
    gold: 59.9,
    silver: 25.0,
    platinum: 15.1
  },
  performance: [
    12000,
    14500,
    13200,
    18900,
    24300,
    29100,
    32658
  ]
};

const portfolioData = [
  {
    id: 1,
    asset: "Gold",
    symbol: "XAU",
    balance: 150,
    usdValue: 748350.2,
    allocation: 59.9
  },
  {
    id: 2,
    asset: "Silver",
    symbol: "XAG",
    balance: 500,
    usdValue: 312450.1,
    allocation: 25.0
  },
  {
    id: 3,
    asset: "Platinum",
    symbol: "XPT",
    balance: 75,
    usdValue: 187950.02,
    allocation: 15.1
  }
];

const walletData = {
  walletAddress: "0x3fA7...8B29",
  approved: true,
  network: "Ethereum Mainnet",
  lastUpdated: "2025-05-25T10:30:00Z"
};

const transactionData = [
  {
    id: 1,
    type: "Deposit",
    asset: "Gold",
    amount: "10.25 XAU",
    usdValue: 24850.25,
    date: "2025-05-25",
    status: "Completed"
  },
  {
    id: 2,
    type: "Withdrawal",
    asset: "Silver",
    amount: "50 XAG",
    usdValue: 1567.5,
    date: "2025-05-24",
    status: "Completed"
  },
  {
    id: 3,
    type: "Transfer",
    asset: "Platinum",
    amount: "2.5 XPT",
    usdValue: 2345.75,
    date: "2025-05-23",
    status: "Completed"
  }
];

module.exports = {
  dashboardData,
  portfolioData,
  walletData,
  transactionData
};