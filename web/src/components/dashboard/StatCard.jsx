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


  const badge = {
    portfolio: "+12.5%",
    holdings: "24 Assets",
    wallet: "Active",
    change: "+2.4%",
  };


  return (

    <div className={`stat-card ${type}`}>


      <div className="stat-top">


        <div className={`icon-box ${type}`}>

          {icons[type]}

        </div>


        <div className="badge">

          {badge[type]}

        </div>


      </div>



      <div className="stat-content">


        <p className="stat-title">

          {title}

        </p>


        <h2>

          {value}

        </h2>


        <p className="stat-subtitle">

          {subtitle}

        </p>


      </div>



      {
        type === "portfolio" &&

        <div className="mini-chart">

          <svg viewBox="0 0 180 50">


            <polyline

              points="
              0,40
              25,35
              50,38
              80,20
              110,28
              140,12
              180,5
              "

              fill="none"

              stroke="#00e5ff"

              strokeWidth="4"

            />


          </svg>

        </div>

      }


    </div>

  );

}


export default StatCard;