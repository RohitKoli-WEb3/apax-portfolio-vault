import "./WalletOverview.css";
import { FaEthereum, FaCheckCircle, FaCopy } from "react-icons/fa";

function WalletOverview({ wallet }) {

    if (!wallet) {
        return <p>Loading wallet...</p>;
    }

    return (

        <div className="wallet-overview">

            <div className="wallet-top">

                <div>

                    <h2>Connected Wallet</h2>

                    <p>Primary wallet linked to your APAX account</p>

                </div>

                <span className="verified">

                    <FaCheckCircle />

                    {wallet.status}

                </span>

            </div>

            <div className="wallet-grid">

                <div className="wallet-box">

                    <span>Total Balance</span>

                    <h2>{wallet.balance} APAX</h2>

                </div>

                <div className="wallet-box">

                    <span>Network</span>

                    <h2>

                        <FaEthereum />

                        {wallet.network}

                    </h2>

                </div>

                <div className="wallet-box">

                    <span>Wallet Address</span>

                    <h2>

                        {wallet.address.slice(0, 6)}

                        ...

                        {wallet.address.slice(-4)}

                        <FaCopy />

                    </h2>

                </div>

                <div className="wallet-box">

                    <span>Status</span>

                    <h2>{wallet.status}</h2>

                </div>

            </div>

        </div>

    );

}

export default WalletOverview;