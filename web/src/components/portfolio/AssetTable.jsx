import "./AssetTable.css";

function AssetTable({ assets }) {

  return (

    <div className="asset-table-card">

      <div className="table-title">

        <h2>Asset Holdings</h2>

        <button>View All</button>

      </div>

      <table>

        <thead>

          <tr>

            <th>Asset</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total Value</th>
            <th>24H</th>

          </tr>

        </thead>

        <tbody>

          {assets.map((item) => (

            <tr key={item.id}>

              <td>{item.asset}</td>

              <td>{item.quantity}</td>

              <td>{item.price}</td>

              <td>{item.value}</td>

              <td>

                <span
                  className={
                    item.change.startsWith("+")
                      ? "gain"
                      : "loss"
                  }
                >

                  {item.change}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default AssetTable;