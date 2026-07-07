import "./MarketSnapshot.css";
import {
  FaCoins,
  FaGem,
  FaChartLine,
  FaBitcoin,
} from "react-icons/fa";

function MarketSnapshot() {

  const assets = [

    {
      icon:<FaCoins />,
      color:"#f59e0b",
      name:"Gold",
      symbol:"XAU",
      value:"$3.3B",
      change:"-1.02%"
    },

    {
      icon:<FaGem />,
      color:"#9ca3af",
      name:"Silver",
      symbol:"XAG",
      value:"$1.5B",
      change:"+0.71%"
    },

    {
      icon:<FaChartLine />,
      color:"#7c3aed",
      name:"Platinum",
      symbol:"XPT",
      value:"$2.84B",
      change:"+0.62%"
    },

    {
      icon:<FaBitcoin />,
      color:"#16a34a",
      name:"APAX Token",
      symbol:"APAX",
      value:"$12.3M",
      change:"-1.32%"
    }

  ];

  return (

    <div className="market-card">

      <h2>Market Snapshot</h2>

      {

        assets.map((asset,index)=>(

          <div
            key={index}
            className="market-item"
          >

            <div className="market-left">

              <div
                className="market-icon"
                style={{
                  background:asset.color
                }}
              >

                {asset.icon}

              </div>

              <div>

                <h4>{asset.name}</h4>

                <p>{asset.symbol}</p>

              </div>

            </div>

            <div className="market-right">

              <h4>{asset.value}</h4>

              <p
                className={
                  asset.change.includes("+")
                  ? "green"
                  : "red"
                }
              >
                {asset.change}
              </p>

            </div>

          </div>

        ))

      }

    </div>

  );
}

export default MarketSnapshot;