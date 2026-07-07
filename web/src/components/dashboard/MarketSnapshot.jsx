import "./MarketSnapshot.css";

import {
  FaCoins,
  FaGem,
  FaChartLine,
  FaBitcoin,
  FaArrowUp,
  FaArrowDown,
} from "react-icons/fa";


function MarketSnapshot() {


  const assets = [

    {
      icon:<FaCoins/>,
      name:"Gold",
      symbol:"XAU",
      price:"$3.3B",
      change:"+2.45%",
      trend:"up",
      color:"gold"
    },


    {
      icon:<FaGem/>,
      name:"Silver",
      symbol:"XAG",
      price:"$1.5B",
      change:"+0.71%",
      trend:"up",
      color:"silver"
    },


    {
      icon:<FaChartLine/>,
      name:"Platinum",
      symbol:"XPT",
      price:"$2.84B",
      change:"-0.62%",
      trend:"down",
      color:"purple"
    },


    {
      icon:<FaBitcoin/>,
      name:"APAX Token",
      symbol:"APAX",
      price:"$12.3M",
      change:"+5.32%",
      trend:"up",
      color:"green"
    }

  ];



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


      {
        assets.map((asset,index)=>(


          <div 
            className="market-item"
            key={index}
          >


            <div className="asset-info">


              <div className={`market-icon ${asset.color}`}>

                {asset.icon}

              </div>


              <div>

                <h4>{asset.name}</h4>

                <p>{asset.symbol}</p>

              </div>


            </div>



            <div className="market-value">


              <h4>

                {asset.price}

              </h4>


              <span className={asset.trend}>


                {
                  asset.trend==="up"
                  ?
                  <FaArrowUp/>
                  :
                  <FaArrowDown/>
                }


                {asset.change}


              </span>


            </div>



          </div>


        ))
      }


      </div>



    </div>

  );

}


export default MarketSnapshot;