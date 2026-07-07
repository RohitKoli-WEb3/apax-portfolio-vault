import "./Sidebar.css";
import logo from "../../assets/apaxLogo.png";

import {
  FaHome,
  FaChartPie,
  FaWallet,
  FaExchangeAlt,
  FaCog,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <img
          src={logo}
          alt="APAX"
          className="logo-img"
        />

        <p>Portfolio Vault</p>

      </div>

      <ul className="sidebar-menu">

        <li className="active">
          <FaHome />
          <span>Dashboard</span>
        </li>

        <li>
          <FaChartPie />
          <span>Portfolio</span>
        </li>

        <li>
          <FaWallet />
          <span>Wallet</span>
        </li>

        <li>
          <FaExchangeAlt />
          <span>Transactions</span>
        </li>

        <li>
          <FaCog />
          <span>Settings</span>
        </li>

      </ul>

      <div className="sidebar-bottom">

        <div className="vault-box">

          <h3>APAX Vault</h3>

          <p>
            Secure • Tokenized • Transparent
          </p>

        </div>

        <small>Version 1.0</small>

      </div>

    </aside>
  );
}

export default Sidebar;