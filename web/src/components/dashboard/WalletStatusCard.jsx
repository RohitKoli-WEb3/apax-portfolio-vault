import "./WalletStatusCard.css";
import {
  FaWallet,
  FaEthereum,
  FaCheckCircle,
  FaCopy,
} from "react-icons/fa";

function WalletStatus() {

  const walletAddress = "0xA71F...91Bc";

  return (

    <div className="wallet-card">

      <div className="wallet-header">

        <FaWallet className="wallet-icon"/>

        <h2>Wallet Status</h2>

      </div>

      <div className="wallet-item">

        <span>Address</span>

        <div className="wallet-address">

          {walletAddress}

          <FaCopy className="copy-icon"/>

        </div>

      </div>

      <div className="wallet-item">

        <span>Network</span>

        <div>

          <FaEthereum />

          Ethereum Mainnet

        </div>

      </div>

      <div className="wallet-item">

        <span>Status</span>

        <div className="approved">

          <FaCheckCircle />

          Approved

        </div>

      </div>

      <div className="wallet-item">

        <span>Last Sync</span>

        <strong>2 min ago</strong>

      </div>

      <button className="wallet-btn">

        View Wallet

      </button>

    </div>

  );

}

export default WalletStatus;