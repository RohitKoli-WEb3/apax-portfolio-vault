import "./WalletStatusCard.css";

import {
  FaWallet,
  FaEthereum,
  FaCheckCircle,
  FaCopy
} from "react-icons/fa";


function WalletStatusCard() {


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

          ● Connected

        </span>


      </div>



      <div className="wallet-details">


        <div className="wallet-row">

          <span>Wallet Address</span>

          <div className="address">

            0xA71F...91BC

            <FaCopy />

          </div>

        </div>



        <div className="wallet-row">

          <span>Network</span>

          <div className="network">

            <FaEthereum />

            Ethereum Mainnet

          </div>

        </div>



        <div className="wallet-row">

          <span>Status</span>

          <div className="approved">

            <FaCheckCircle />

            Verified

          </div>

        </div>



        <div className="wallet-row">

          <span>Last Sync</span>

          <strong>

            2 min ago

          </strong>

        </div>


      </div>



      <button className="wallet-btn">

        View Wallet

      </button>



    </div>

  );

}


export default WalletStatusCard;