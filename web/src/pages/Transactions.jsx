import { useState } from "react";
import PageLayout from "../components/layout/PageLayout";
import { walletService } from "../services/walletService";
import "../styles/Transactions.css";

function Transactions() {

    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    async function handleTransfer(e) {
        e.preventDefault();

        setLoading(true);
        setResult(null);

        try {

            const response = await walletService.transfer(to, amount);

            setResult({
                success: true,
                hash: response.transactionHash
            });

            setTo("");
            setAmount("");

        } catch (error) {

            setResult({
                success: false,
                message:
                    error.response?.data?.message ||
                    error.message
            });

        } finally {

            setLoading(false);

        }
    }

    return (

        <PageLayout>

            <div className="dashboard">

                <h1 style={{ color: "white" }}>
                    Transfer APAX Tokens
                </h1>

                <p style={{ color: "#94a3b8" }}>
                    Send APAX tokens through the deployed smart contract.
                </p>

                <div className="transaction-card">

                    <form onSubmit={handleTransfer}>

                        <div className="form-group">

                            <label>Recipient Address</label>

                            <input
                                type="text"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                placeholder="0x..."
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label>Amount</label>

                            <input
                                type="number"
                                step="0.000001"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Processing..." : "Transfer"}
                        </button>

                    </form>

                    {result && result.success && (

                        <div className="success-box">

                            <h3>Transfer Successful</h3>

                            <p>

                                Transaction Hash

                                <br />

                                <small>{result.hash}</small>

                            </p>

                        </div>

                    )}

                    {result && !result.success && (

                        <div className="error-box">

                            <h3>Transfer Failed</h3>

                            <p>{result.message}</p>

                        </div>

                    )}

                </div>

            </div>

        </PageLayout>

    );

}

export default Transactions;