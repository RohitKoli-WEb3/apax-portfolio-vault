import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">APAX</h2>

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