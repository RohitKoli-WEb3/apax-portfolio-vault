export const getTransactions = async () => {
  return [
    {
      id: 1,
      type: "Deposit",
      asset: "Gold (XAU)",
      amount: "10.25 XAU",
      value: "$24,850",
      date: "May 25, 2025",
      status: "Completed",
    },
    {
      id: 2,
      type: "Withdrawal",
      asset: "Silver (XAG)",
      amount: "50 XAG",
      value: "$1,567",
      date: "May 24, 2025",
      status: "Completed",
    },
    {
      id: 3,
      type: "Transfer",
      asset: "Platinum (XPT)",
      amount: "2.50 XPT",
      value: "$2,345",
      date: "May 23, 2025",
      status: "Pending",
    },
    {
      id: 4,
      type: "Deposit",
      asset: "APAX Token",
      amount: "500 APAX",
      value: "$12,250",
      date: "May 22, 2025",
      status: "Completed",
    },
  ];
};