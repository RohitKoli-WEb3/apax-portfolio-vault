import React, { useEffect, useState } from "react";
import "./Dashboard.css";

import PageLayout from "../components/layout/PageLayout";
import StatCard from "../components/dashboard/StatCard";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import AssetAllocation from "../components/dashboard/AssetAllocation";
import MarketSnapshot from "../components/dashboard/MarketSnapshot";
import TransactionTable from "../components/dashboard/TransactionTable";
import WalletStatusCard from "../components/dashboard/WalletStatusCard";

import { dashboardService } from "../services/dashboardService";
import { transactionService } from "../services/transactionService";
import { marketService } from "../services/marketService";
import { walletService } from "../services/walletService";

function Dashboard() {
  const [stats, setStats] = useState({
    portfolioValue: "",
    holdings: 0,
    walletStatus: "",
    dailyChange: "",
  });

const [chartData, setChartData] = useState([]);
const [transactions, setTransactions] = useState([]);
const [marketData, setMarketData] = useState([]);
const [assetAllocation, setAssetAllocation] = useState([]);
const [wallet, setWallet] = useState({
  address: "",
  network: "",
  balance: "",
  status: "",
  connected: false,
});

useEffect(() => {
  async function loadDashboard() {
    try {
      const dashboardStats =
      await dashboardService.getDashboardStats();

      setStats(dashboardStats);
      setAssetAllocation(dashboardStats.assetAllocation);

      const portfolioChart =
      await dashboardService.getPortfolioChart();
      setChartData(portfolioChart);

      const transactionData =
      await transactionService.getTransactions();
      setTransactions(transactionData);

      const market=
      await marketService.getMarketData();
      setMarketData(market);

      const walletData = await walletService.getWallet();
      setWallet(walletData);

    } catch (error) {
      console.error(error);
    }
  }

  loadDashboard();
}, []);


return (
<PageLayout>
  <div className="dashboard">

        <div className="stats-grid">
          <StatCard
            type="portfolio"
            title="Total Portfolio Value"
            value={stats.portfolioValue}
            subtitle={stats.dailyChange}
          />

          <StatCard
            type="holdings"
            title="Total Holdings"
            value={stats.holdings}
            subtitle="Assets in Vault"
          />

          <StatCard
            type="wallet"
            title="Wallet Status"
            value={stats.walletStatus}
            subtitle="Wallet Connected"
          />

          <StatCard
            type="change"
            title="24H Change"
            value={stats.dailyChange}
            subtitle="Today's Performance"
          />
        </div>

        <div className="middle-grid">
          <PortfolioChart data={chartData} />
          <AssetAllocation data={assetAllocation} />
          <MarketSnapshot marketData={marketData} />
        </div>

        <div className="bottom-grid">
          <TransactionTable transactions={transactions} />
          <WalletStatusCard wallet={wallet} />
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;