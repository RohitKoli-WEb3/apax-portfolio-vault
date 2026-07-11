import PageLayout from "../components/layout/PageLayout";
import WalletOverview from "../components/wallet/WalletOverview";
import WalletAssets from "../components/wallet/WalletAssets";
import WalletActivity from "../components/wallet/WalletActivity";
import "../styles/Wallet.css";

function Wallet(){

return(

<PageLayout>

<div className="wallet-page">

<h1>Wallet</h1>

<p>Manage your connected wallet and digital assets.</p>

<WalletOverview/>

<WalletAssets/>

<WalletActivity/>

</div>

</PageLayout>

);

}

export default Wallet;