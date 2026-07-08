import "./WalletStatusCard.css";

import {
  FaWallet,
  FaEthereum,
  FaCheckCircle,
  FaCopy,
} from "react-icons/fa";

function WalletStatusCard({ wallet }) {
  const copyAddress = () => {
    navigator.clipboard.writeText(wallet.address);
    alert("Wallet Address Copied!");
  };

  return (
    <div className="wallet-card">
      <div className="wallet-header">
        <div className="wallet-icon">
          <FaWallet />
        </div>

        <div>
          <h2>Wallet Status</h2>
          <p>Secure connection</p>
        </div>

        <span className="connected">
          {wallet.connected ? "● Connected" : "● Disconnected"}
        </span>

      </div>

      <div className="wallet-details">
        <div className="wallet-row">
          <span>Wallet Address</span>

          <div
            className="address"
            onClick={copyAddress}
            style={{ cursor: "pointer" }}
          >
            {wallet.address}
            <FaCopy />
          </div>

        </div>

        <div className="wallet-row">
          <span>Network</span>
          <div className="network">
            <FaEthereum />
            {wallet.network}
          </div>
        </div>

        <div className="wallet-row">
          <span>Balance</span>
          <strong>{wallet.balance}</strong>
        </div>

        <div className="wallet-row">

          <span>Status</span>
          <div className="approved">
            <FaCheckCircle />
            {wallet.status}
          </div>
        </div>
      </div>

      <button className="wallet-btn">
        View Wallet
      </button>

    </div>
  );
}

export default WalletStatusCard;