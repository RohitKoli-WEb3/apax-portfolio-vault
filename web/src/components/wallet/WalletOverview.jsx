import "./WalletOverview.css";
import {FaEthereum,FaCheckCircle,FaCopy} from "react-icons/fa";

function WalletOverview(){

return(

<div className="wallet-overview">

<div className="wallet-top">

<div>

<h2>Connected Wallet</h2>

<p>Primary wallet linked to your APAX account</p>

</div>

<span className="verified"><FaCheckCircle/> Verified</span>

</div>

<div className="wallet-grid">

<div className="wallet-box">

<span>Total Balance</span>

<h2>$1,248,750</h2>

</div>

<div className="wallet-box">

<span>Network</span>

<h2><FaEthereum/> Ethereum</h2>

</div>

<div className="wallet-box">

<span>Wallet Address</span>

<h2>0xA71F...91BC <FaCopy/></h2>

</div>

<div className="wallet-box">

<span>Status</span>

<h2>Connected</h2>

</div>

</div>

</div>

);

}

export default WalletOverview;