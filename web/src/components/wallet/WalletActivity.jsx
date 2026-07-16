import "./WalletActivity.css";

function WalletActivity({ wallet }) {

    if (!wallet) {
        return <p>Loading activity...</p>;
    }

    return (

        <div className="wallet-activity">

            <h2>Recent Activity</h2>

            <div className="activity-list">

                {wallet.activity.map((item, index) => (

                    <div className="activity-item" key={index}>

                        <div>

                            <h4>{item.type}</h4>

                            <p>{item.asset} • {item.date}</p>

                        </div>

                        <span
                            className={
                                item.status === "Completed"
                                    ? "completed"
                                    : "pending"
                            }
                        >
                            {item.status}
                        </span>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default WalletActivity;