import "./StatCard.css";
import {
  FaWallet,
  FaCoins,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

function StatCard({ type, title, value, subtitle }) {
  const icons = {
    portfolio: <FaWallet />,
    holdings: <FaCoins />,
    wallet: <FaShieldAlt />,
    change: <FaChartLine />,
  };

  return (
    <div className="stat-card">
      <div className="stat-top">
        <div className={`icon-box ${type}`}>
          {icons[type]}
        </div>

        <div className="stat-info">
          <h4>{title}</h4>
          <h2>{value}</h2>

          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>
      </div>

      {type === "portfolio" && (
        <div className="mini-chart">
          <svg
            width="120"
            height="40"
            viewBox="0 0 120 40"
          >
            <polyline
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              points="
              0,35
              20,25
              40,28
              60,12
              80,18
              100,8
              120,2
              "
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default StatCard;