import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import WalletOverview from "../components/wallet/WalletOverview";
import WalletAssets from "../components/wallet/WalletAssets";
import WalletActivity from "../components/wallet/WalletActivity";
import { walletService } from "../services/walletService";
import "../styles/Wallet.css";

function Wallet() {
    const [walletData, setWalletData] = useState(null);

    useEffect(() => {
        const fetchWallet = async () => {
            try {
                const address = "0xEeCCa2Dbef7ea84475EAB92DAB646A2a107bA35c";

                const data = await walletService.getWallet(address);

                setWalletData(data);
            } catch (error) {
                console.error("Failed to fetch wallet data:", error);
            }
        };

        fetchWallet();
    }, []);

    return (
        <PageLayout>
            <div className="wallet-page">
                <h1>Wallet</h1>

                <p>Manage your connected wallet and digital assets.</p>

                <WalletOverview wallet={walletData} />

                <WalletAssets wallet={walletData} />

                <WalletActivity wallet={walletData} />
            </div>
        </PageLayout>
    );
}

export default Wallet;