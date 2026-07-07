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
  "#00E5FF",
  "#8B5CF6",
  "#F59E0B",
];

function AssetAllocation() {
  return (
    <div className="asset-card">

      <div className="asset-header">

        <h2>Asset Allocation</h2>

        <button>Details</button>

      </div>

      <div className="donut-wrapper">

        <ResponsiveContainer
          width="100%"
          height={240}
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={4}
            >

              {data.map((item,index)=>

                <Cell
                  key={index}
                  fill={COLORS[index]}
                />

              )}

            </Pie>

          </PieChart>

        </ResponsiveContainer>

        <div className="center-value">

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

            <div className="asset-left">

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

            <strong>{asset.value}%</strong>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AssetAllocation;