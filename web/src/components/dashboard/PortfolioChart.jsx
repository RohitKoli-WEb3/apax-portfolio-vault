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

function PortfolioChart() {
  const data = [
    { day: "May 19", portfolio: 22000, market: 24000 },
    { day: "May 20", portfolio: 12000, market: 20000 },
    { day: "May 21", portfolio: 18000, market: 22000 },
    { day: "May 22", portfolio: 26000, market: 18000 },
    { day: "May 23", portfolio: 31000, market: 17000 },
    { day: "May 24", portfolio: 28000, market: 15000 },
    { day: "May 25", portfolio: 39000, market: 21000 },
  ];

  return (
    <div className="portfolio-chart">

      <div className="chart-header">

        <div>
          <h2>Portfolio Performance</h2>

          <div className="chart-legend">
            <span className="portfolio-dot"></span>
            Portfolio

            <span className="market-dot"></span>
            Market
          </div>
        </div>

        <div className="chart-filter">
          <button className="active">1W</button>
          <button>1M</button>
          <button>1Y</button>
        </div>

      </div>

      <ResponsiveContainer width="100%" height={380}>
        <AreaChart data={data}>

          <defs>
            <linearGradient id="portfolioFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.45}/>
              <stop offset="100%" stopColor="#f59e0b" stopOpacity={0}/>
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#1f2937" />

          <XAxis dataKey="day"/>

          <YAxis/>

          <Tooltip/>

          <Area
            dataKey="portfolio"
            stroke="#f59e0b"
            fill="url(#portfolioFill)"
            strokeWidth={3}
          />

          <Line
            dataKey="market"
            stroke="#22c55e"
            strokeWidth={3}
            dot={false}
          />

        </AreaChart>
      </ResponsiveContainer>

    </div>
  );
}

export default PortfolioChart;