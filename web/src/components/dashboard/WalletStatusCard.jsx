import "./WalletStatusCard.css";

function WalletStatusCard() {
  return (
    <div className="wallet-card">
      <h2>Wallet Status</h2>

      <div className="wallet-info">
        <p>Status</p>
        <h3>Approved</h3>
      </div>

      <div className="wallet-info">
        <p>Network</p>
        <h3>Ethereum</h3>
      </div>

      <div className="wallet-info">
        <p>Last Updated</p>
        <h3>Today</h3>
      </div>
    </div>
  );
}

export default WalletStatusCard;