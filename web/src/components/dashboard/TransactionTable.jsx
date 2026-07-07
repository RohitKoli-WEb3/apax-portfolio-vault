import "./TransactionTable.css";

import {

FaArrowDown,

FaArrowUp,

FaExchangeAlt

} from "react-icons/fa";
function TransactionTable() {
  const transactions = [
  {
    type: "Deposit",
    asset: "Gold (XAU)",
    amount: "10.25 XAU",
    usd: "$24,850.25",
    date: "May 25, 2025",
    status: "Completed",
  },
  {
    type: "Withdrawal",
    asset: "Silver (XAG)",
    amount: "50 XAG",
    usd: "$1,567.50",
    date: "May 24, 2025",
    status: "Completed",
  },
  {
    type: "Transfer",
    asset: "Platinum (XPT)",
    amount: "2.50 XPT",
    usd: "$2,345.75",
    date: "May 23, 2025",
    status: "Pending",
  },
  {
    type: "Deposit",
    asset: "Gold (XAU)",
    amount: "5 XAU",
    usd: "$12,250",
    date: "May 22, 2025",
    status: "Completed",
  },
];

  return (
    <div className="transaction-table">
      <div className="table-header">

    <h2>Recent Transactions</h2>

    <button className="view-btn">

        View All

    </button>

</div>

      <table>
        <thead>
            <tr>
            <th>Type</th>
            <th>Asset</th>
            <th>Amount</th>
            <th>USD Value</th>
            <th>Date</th>
            <th>Status</th>
            </tr>
            </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>
                <div className="type-cell">
                {
                transaction.type==="Deposit"
                ?
                <FaArrowDown className="deposit"/>
                :
                transaction.type==="Withdrawal"
                ?
                <FaArrowUp className="withdraw"/>
                :
                <FaExchangeAlt className="transfer"/>
                }
                <span>
                {transaction.type}
                </span>
                </div>
                </td>
              <td>{transaction.asset}</td>
              <td>{transaction.amount}</td>
              <td>
                  <span
                  className={
                  transaction.status==="Completed"
                  ? "status completed"
                  : "status pending"
                  }
                  >
                  {transaction.status}
                  </span>
                  </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
<button className="view-btn">
View All
</button>
export default TransactionTable;