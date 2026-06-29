import "./AssetAllocation.css";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Gold (XAU)",
    value: 59.9,
    amount: "$748,350",
  },
  {
    name: "Silver (XAG)",
    value: 25,
    amount: "$312,450",
  },
  {
    name: "Platinum (XPT)",
    value: 15.1,
    amount: "$187,950",
  },
];

const COLORS = [
  "#f59e0b",
  "#9ca3af",
  "#7c3aed",
];

function AssetAllocation() {
  return (
    <div className="asset-card">

      <h2>Asset Allocation</h2>

      <div className="chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={260}
        >
          <PieChart>

            <Pie
              data={data}
              innerRadius={70}
              outerRadius={105}
              dataKey="value"
            >

              {data.map((item,index)=>(

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              ))}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

        <div className="center-text">

          <h3>$1.25M</h3>

          <p>Total Value</p>

        </div>

      </div>

      <div className="asset-list">

        {data.map((asset,index)=>(

          <div
            key={asset.name}
            className="asset-row"
          >

            <div className="left">

              <span
                className="dot"
                style={{
                  background:COLORS[index]
                }}
              ></span>

              <div>

                <h4>{asset.name}</h4>

                <p>{asset.amount}</p>

              </div>

            </div>

            <span>{asset.value}%</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AssetAllocation;