import "./PortfolioChart.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function PortfolioChart({ data }) {
  return (
    <div className="portfolio-chart">
<div className="chart-header">

  <div>

    <h2>Portfolio Performance</h2>

    <p>Portfolio vs Market Performance</p>

  </div>

  <div className="chart-right">

    <div className="chart-stats">

      <div className="stat-box">

        <span>Today's Gain</span>

        <h4>+$24,580</h4>

      </div>

      <div className="stat-box">

        <span>ROI</span>

        <h4>18.4%</h4>

      </div>

      <div className="stat-box">

        <span>Assets</span>

        <h4>12</h4>

      </div>

    </div>

    <div className="chart-filter">

      <button className="active">1W</button>

      <button>1M</button>

      <button>3M</button>

      <button>1Y</button>

    </div>

  </div>

</div>

      <ResponsiveContainer
        width="100%"
        height={360}
      >

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="portfolioGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="0%"
                stopColor="#00E5FF"
                stopOpacity={0.35}
              />

              <stop
                offset="100%"
                stopColor="#00E5FF"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            stroke="#243244"
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="day"
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: "#94a3b8" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#111827",
              border: "1px solid #233248",
              borderRadius: "14px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="portfolio"
            stroke="#00E5FF"
            strokeWidth={4}
            fill="url(#portfolioGradient)"
          />

          <Line
            type="monotone"
            dataKey="market"
            stroke="#8B5CF6"
            strokeWidth={3}
            dot={false}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}

export default PortfolioChart;