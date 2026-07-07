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

function Dashboard() {
  const [stats, setStats] = useState({
    portfolioValue: "",
    holdings: 0,
    walletStatus: "",
    dailyChange: "",
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function loadDashboard() {
      const dashboardStats = await dashboardService.getDashboardStats();
      setStats(dashboardStats);

      const portfolioChart = await dashboardService.getPortfolioChart();
      setChartData(portfolioChart);
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
          <AssetAllocation />
          <MarketSnapshot />
        </div>

        <div className="bottom-grid">
          <TransactionTable />
          <WalletStatusCard />
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;