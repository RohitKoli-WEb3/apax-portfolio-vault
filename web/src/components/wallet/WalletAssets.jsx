import "./WalletAssets.css";

function WalletAssets({ wallet }) {

    if (!wallet) {
        return <p>Loading assets...</p>;
    }

    return (

        <div className="wallet-assets">

            <h2>Wallet Assets</h2>

            <div className="asset-grid">

                {wallet.assets.map((item, index) => (

                    <div className="asset-card" key={index}>

                        <h3>{item.asset}</h3>

                        <p>{item.quantity}</p>

                        <h2>{item.value}</h2>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default WalletAssets;