import "./TransactionTable.css";

function TransactionTable() {
  const transactions = [
    {
      id: 1,
      type: "Deposit",
      asset: "Gold",
      amount: "$24,850",
      status: "Completed",
    },
    {
      id: 2,
      type: "Withdrawal",
      asset: "Silver",
      amount: "$5,420",
      status: "Completed",
    },
    {
      id: 3,
      type: "Transfer",
      asset: "Platinum",
      amount: "$12,100",
      status: "Pending",
    },
  ];

  return (
    <div className="transaction-table">
      <h2>Recent Transactions</h2>

      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Asset</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.asset}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;