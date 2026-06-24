import "./PortfolioChart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function PortfolioChart() {
  const data = [
    { day: "Mon", value: 12000 },
    { day: "Tue", value: 18000 },
    { day: "Wed", value: 15000 },
    { day: "Thu", value: 22000 },
    { day: "Fri", value: 28000 },
    { day: "Sat", value: 25000 },
    { day: "Sun", value: 32000 },
  ];

  return (
    <div className="portfolio-chart">
      <div className="chart-header">
        <h2>Portfolio Performance</h2>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default PortfolioChart;