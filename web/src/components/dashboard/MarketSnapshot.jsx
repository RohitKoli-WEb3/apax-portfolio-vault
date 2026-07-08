import "./MarketSnapshot.css";

import {
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";

import {
  GiGoldBar,
} from "react-icons/gi";

import {
  FaGem,
  FaBitcoin,
} from "react-icons/fa";

import {
  MdOutlineDiamond,
} from "react-icons/md";

function MarketSnapshot({ marketData }) {
  const getIcon = (asset) => {
    switch (asset.toLowerCase()) {
      case "gold":
        return (
          <div className="market-icon gold">
            <GiGoldBar />
          </div>
        );

      case "silver":
        return (
          <div className="market-icon silver">
            <FaGem />
          </div>
        );

      case "platinum":
        return (
          <div className="market-icon purple">
            <MdOutlineDiamond />
          </div>
        );

      case "apax token":
        return (
          <div className="market-icon green">
            <FaBitcoin />
          </div>
        );

      default:
        return (
          <div className="market-icon green">
            <FaBitcoin />
          </div>
        );
    }
  };

  return (
    <div className="market-card">

      <div className="market-header">

        <div>

          <h2>Market Snapshot</h2>

          <p>Live asset performance</p>

        </div>

        <span className="live-dot">
          ● Live
        </span>

      </div>

      <div className="market-list">

        {marketData.map((item) => (

          <div
            className="market-item"
            key={item.id}
          >

            <div className="asset-info">

              {getIcon(item.asset)}

              <div>

                <h4>{item.asset}</h4>

                <p>{item.symbol}</p>

              </div>
            </div>

            <div className="market-value">

              <h4>{item.price}</h4>

              <span
                className={
                  item.change.startsWith("+")
                    ? "up"
                    : "down"
                }
              >

                {item.change.startsWith("+") ? (
                  <FaArrowUp />
                ) : (
                  <FaArrowDown />
                )}

                {item.change}

              </span>

            </div>
        </div>

        ))}
      </div>
    </div>
  );
}

export default MarketSnapshot;