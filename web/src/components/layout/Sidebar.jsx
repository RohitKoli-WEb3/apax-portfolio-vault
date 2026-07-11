import "./Sidebar.css";
import logo from "../../assets/apaxLogo.png";
import { NavLink } from "react-router-dom";


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

  <li>
    <NavLink
      to="/dashboard"
      className={({ isActive }) =>
        isActive ? "active" : ""
      }
    >
      <FaHome />
      <span>Dashboard</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/portfolio"
      className={({ isActive }) =>
        isActive ? "active" : ""
      }
    >
      <FaChartPie />
      <span>Portfolio</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/wallet"
      className={({ isActive }) =>
        isActive ? "active" : ""
      }
    >
      <FaWallet />
      <span>Wallet</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/transactions"
      className={({ isActive }) =>
        isActive ? "active" : ""
      }
    >
      <FaExchangeAlt />
      <span>Transactions</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/settings"
      className={({ isActive }) =>
        isActive ? "active" : ""
      }
    >
      <FaCog />
      <span>Settings</span>
    </NavLink>
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