import "./AssetAllocation.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

function AssetAllocation() {
  const data = [
    {
      name: "Gold",
      value: 59.9,
    },
    {
      name: "Silver",
      value: 25,
    },
    {
      name: "Platinum",
      value: 15.1,
    },
  ];

  const COLORS = [
    "#f59e0b",
    "#9ca3af",
    "#8b5cf6",
  ];

  return (
    <div className="asset-allocation">
      <h2>Asset Allocation</h2>

      <div className="pie-container">
        <ResponsiveContainer
          width="100%"
          height={220}
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={50}
              outerRadius={80}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="allocation-list">
        {data.map((asset) => (
          <div
            key={asset.name}
            className="allocation-item"
          >
            <span>{asset.name}</span>
            <span>{asset.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssetAllocation;