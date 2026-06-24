
import "./Dashboard.css";
import PageLayout from "../components/layout/PageLayout";
import StatCard from "../components/dashboard/StatCard";
import AssetAllocation from "../components/dashboard/AssetAllocation";
import PortfolioChart from "../components/dashboard/PortfolioChart";
import TransactionTable from "../components/dashboard/TransactionTable";
import WalletStatusCard from "../components/dashboard/WalletStatusCard";

function Dashboard() {
  return (
    <PageLayout>
      <div className="dashboard">
        
        <div className="stats-grid">
          <StatCard
            title="Portfolio Value"
            value="$1,248,750"
          />

          <StatCard
            title="Total Holdings"
            value="3"
          />

          <StatCard
            title="Wallet Status"
            value="Approved"
          />

          <StatCard
            title="24H Change"
            value="+6.35%"
          />
        </div>
        <div className="dashboard-grid">
            <PortfolioChart />
            <AssetAllocation />
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