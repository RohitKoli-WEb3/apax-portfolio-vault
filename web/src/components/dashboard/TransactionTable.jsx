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
      value: "$24,850",
      date: "May 25, 2025",
      status: "Completed"
    },

    {
      type: "Withdrawal",
      asset: "Silver (XAG)",
      amount: "50 XAG",
      value: "$1,567",
      date: "May 24, 2025",
      status: "Completed"
    },

    {
      type: "Transfer",
      asset: "Platinum (XPT)",
      amount: "2.50 XPT",
      value: "$2,345",
      date: "May 23, 2025",
      status: "Pending"
    },

    {
      type: "Deposit",
      asset: "APAX Token",
      amount: "500 APAX",
      value: "$12,250",
      date: "May 22, 2025",
      status: "Completed"
    }

  ];


  return (

    <div className="transaction-card">


      <div className="table-header">

        <div>

          <h2>Recent Transactions</h2>

          <p>Latest portfolio activities</p>

        </div>


        <button>
          View All
        </button>


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

          {
            transactions.map((item, index) => (

              <tr key={index}>


                <td>

                  <div className="type">

                    {
                      item.type === "Deposit"
                        ?
                        <FaArrowDown className="deposit" />
                        :
                        item.type === "Withdrawal"
                          ?
                          <FaArrowUp className="withdraw" />
                          :
                          <FaExchangeAlt className="transfer" />
                    }


                    <span>
                      {item.type}
                    </span>


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
                        ?
                        "completed"
                        :
                        "pending"
                    }
                  >

                    {item.status}

                  </span>

                </td>


              </tr>


            ))
          }


        </tbody>


      </table>


    </div>

  );


}


export default TransactionTable;