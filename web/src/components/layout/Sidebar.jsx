import "./Sidebar.css";
import logo from "../../assets/apaxLogo.png";

import {

FaHome,

FaWallet,

FaExchangeAlt,

FaCog,

FaChartPie

} from "react-icons/fa";
function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo"></h2>
      <img src={logo} alt="APAX Logo" className="logo-img" />

      <ul>
        <li>Dashboard</li>
        <li>Portfolio</li>
        <li>Wallet Status</li>
        <li>Transactions</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;

