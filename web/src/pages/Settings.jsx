import "../styles/Transactions.css";
import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { walletService } from "../services/walletService";

function Settings() {

    const [address, setAddress] = useState("");
    const [message, setMessage] = useState("");

    async function handleApprove() {
        try {
            const response = await walletService.approveHolder(address);

            setMessage(
                `Holder Approved\n\nTransaction:\n${response.transactionHash}`
            );
        } catch (error) {
            setMessage(
                error.response?.data?.message || error.message
            );
        }
    }

    async function handleRevoke() {
        try {
            const response = await walletService.revokeHolder(address);

            setMessage(
                `Holder Revoked\n\nTransaction:\n${response.transactionHash}`
            );
        } catch (error) {
            setMessage(
                error.response?.data?.message || error.message
            );
        }
    }

    async function handleStatus() {
        try {
            const response = await walletService.isApproved(address);

            setMessage(
                response.approved
                    ? "Wallet is Approved"
                    : "Wallet is NOT Approved"
            );
        } catch (error) {
            setMessage(
                error.response?.data?.message || error.message
            );
        }
    }

    return (

        <PageLayout>

            <div className="dashboard">

                <h1 style={{ color: "white" }}>
                    Holder Management
                </h1>

                <p style={{ color: "#94a3b8" }}>
                    Manage APAX approved wallet holders.
                </p>

                <div className="transaction-card">

                    <div className="form-group">

                        <label>Wallet Address</label>

                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="0x..."
                        />

                    </div>

                    <button onClick={handleApprove}>
                        Approve Holder
                    </button>

                    <button
                        onClick={handleRevoke}
                        style={{ marginLeft: "10px" }}
                    >
                        Revoke Holder
                    </button>

                    <button
                        onClick={handleStatus}
                        style={{ marginLeft: "10px" }}
                    >
                        Check Status
                    </button>

                    <pre
                        style={{
                            color: "white",
                            marginTop: "20px",
                            whiteSpace: "pre-wrap"
                        }}
                    >
                        {message}
                    </pre>

                </div>

            </div>

        </PageLayout>

    );

}

export default Settings;