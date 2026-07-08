import "./TransactionTable.css";

import {
  FaArrowDown,
  FaArrowUp,
  FaExchangeAlt,
} from "react-icons/fa";

function TransactionTable({ transactions }) {
  return (
    <div className="transaction-card">

      <div className="table-header">

        <div>
          <h2>Recent Transactions</h2>
          <p>Latest portfolio activities</p>
        </div>

        <button>View All</button>

      </div>

      <table>

        <thead>

          <tr>
            <th>Type</th>
            <th>Asset</th>
            <th>Amount</th>
            <th>Value</th>
            <th>Date</th>
            <th>Status</th>
          </tr>

        </thead>

        <tbody>

          {transactions.map((item) => (

            <tr key={item.id}>

              <td>

                <div className="type">

                  {item.type === "Deposit" && (
                    <FaArrowDown className="deposit" />
                  )}

                  {item.type === "Withdrawal" && (
                    <FaArrowUp className="withdraw" />
                  )}

                  {item.type === "Transfer" && (
                    <FaExchangeAlt className="transfer" />
                  )}

                  <span>{item.type}</span>

                </div>

              </td>

              <td>{item.asset}</td>

              <td>{item.amount}</td>

              <td>{item.value}</td>

              <td>{item.date}</td>

              <td>

                <span
                  className={
                    item.status === "Completed"
                      ? "completed"
                      : "pending"
                  }
                >
                  {item.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default TransactionTable;